// Usage: node scripts/profile-scroll.mjs <browser-CDP-websocket> <output.json> [baseline|no-noise|no-drift] [cpu-rate]
// Connect to the agent-browser QA session. This is tooling, never shipped to visitors.
import { writeFile } from "node:fs/promises";
const [endpoint, output, variant = "baseline", cpuRate = "4"] = process.argv.slice(2);
if (!endpoint || !output) throw new Error("A CDP endpoint and output path are required.");
const socket = new WebSocket(endpoint);
await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
let nextId = 0;
const pending = new Map();
const trace = [];
let complete;
const tracingDone = new Promise((resolve) => { complete = resolve; });
socket.onmessage = ({ data }) => {
  const message = JSON.parse(data);
  if (message.id) {
    const request = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) request.reject(message.error); else request.resolve(message.result);
  }
  if (message.method === "Tracing.dataCollected") trace.push(...message.params.value);
  if (message.method === "Tracing.tracingComplete") complete();
};
function send(method, params = {}, sessionId) {
  const id = ++nextId;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }));
  });
}
const { targetInfos } = await send("Target.getTargets");
const target = targetInfos.find((target) => target.type === "page" && target.url.startsWith("http://localhost:3100"));
if (!target) throw new Error("Open the portfolio on localhost:3100 in agent-browser first.");
const { sessionId } = await send("Target.attachToTarget", { targetId: target.targetId, flatten: true });
const evaluate = (expression) => send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true }, sessionId);
try {
  await evaluate(`document.getElementById('profile-override')?.remove(); window.scrollTo({top:0,behavior:'instant'}); document.fonts.ready`);
  if (variant !== "baseline") {
    const css = variant === "no-noise" ? "body::before{display:none!important}" : ".hero-cinema-image{animation:none!important}";
    await evaluate(`{const s=document.createElement('style');s.id='profile-override';s.textContent=${JSON.stringify(css)};document.head.append(s)}`);
  }
  await send("Emulation.setCPUThrottlingRate", { rate: Number(cpuRate) }, sessionId);
  await new Promise((resolve) => setTimeout(resolve, 300));
  await send("Tracing.start", { categories: "devtools.timeline,blink.user_timing,cc,benchmark", transferMode: "ReportEvents" });
  await evaluate(`window.__frames=[];window.__longTasks=[];window.__longTaskObserver?.disconnect();window.__longTaskObserver=PerformanceObserver.supportedEntryTypes.includes('longtask')?new PerformanceObserver(list=>window.__longTasks.push(...list.getEntries().map(e=>({startTime:e.startTime,duration:e.duration})))):null;window.__longTaskObserver?.observe({type:'longtask'});window.__captureFrames=true;(function frame(t){if(window.__captureFrames){window.__frames.push(t);requestAnimationFrame(frame)}})(performance.now())`);
  for (const yDistance of [-900, 900, -900, 900]) {
    await send("Input.synthesizeScrollGesture", { x: 700, y: 600, yDistance, speed: 900, gestureSourceType: "mouse" }, sessionId);
  }
  const frames = (await evaluate(`window.__captureFrames=false;window.__frames`)).result.value;
  const longTasks = (await evaluate(`window.__longTasks.push(...(window.__longTaskObserver?.takeRecords()??[]).map(e=>({startTime:e.startTime,duration:e.duration})));window.__longTaskObserver?.disconnect();window.__longTaskObserver?window.__longTasks:null`)).result.value;
  await send("Tracing.end");
  await tracingDone;
  const gaps = frames.slice(1).map((time, i) => time - frames[i]).sort((a, b) => a - b);
  const timings = {};
  for (const name of ["Paint", "RasterTask", "UpdateLayoutTree", "Layout", "FunctionCall"]) {
    const events = trace.filter((event) => event.name === name && event.ph === "X");
    timings[name] = { count: events.length, ms: +events.reduce((sum, event) => sum + (event.dur ?? 0) / 1000, 0).toFixed(2) };
  }
  const summary = { variant, cpuRate: Number(cpuRate), frames: frames.length, frameGapP95: +gaps[Math.floor(gaps.length * .95)].toFixed(2), gapsOver34ms: gaps.filter((gap) => gap > 34).length, longTasks: longTasks?.length ?? null, timings };
  await writeFile(output, JSON.stringify({ summary, longTasks, traceEvents: trace }));
  console.log(JSON.stringify(summary, null, 2));
} finally {
  await send("Emulation.setCPUThrottlingRate", { rate: 1 }, sessionId);
  await evaluate(`document.getElementById('profile-override')?.remove();window.__captureFrames=false;window.__longTaskObserver?.disconnect();window.scrollTo({top:0,behavior:'instant'})`);
  socket.close();
}
