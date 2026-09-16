import { SectionHeader } from "@/components/section-header";

export function AboutSection() {
  return (
    <section tabIndex={-1} id="about" className="section anchor-section site-width" aria-labelledby="about-title">
      <SectionHeader id="about-title" title="About me" />
      <div className="profile-sheet">
        <header className="profile-summary">
          <div className="profile-identity">
            <h3 className="display-font">Frans<br />Sadie</h3>
            <div className="profile-meta"><p className="profile-role">Software engineer</p><p className="profile-location">Johannesburg, South Africa</p></div>
          </div>
          <dl className="profile-focus"><dt>Focus</dt><dd>Data engineering<br />Full-stack development<br />API & AI integrations</dd></dl>
        </header>
        <div className="profile-story">
          <p>I’m a software engineer based in Johannesburg, with hands-on experience in fintech, internal tools, and client applications. I like turning a complicated operational problem into software people can use.</p>
          <p>My focus is data, full-stack development, and integrations. I work across APIs, databases, workflows, and interfaces, with personal projects exploring market research, machine learning, and local AI.</p>
          <p>My background in UI/UX shapes how I build. I care about how a system works and how it feels to use. Away from the desk, I’m into climbing, strength training, music, games, and reading.</p>
          <a href="#projects" className="text-link">Explore my projects <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
