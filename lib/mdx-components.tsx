import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      {...props}
      className="mt-8 text-4xl font-semibold tracking-tight text-foreground"
    />
  ),
  h2: (props) => (
    <h2
      {...props}
      className="mt-10 text-2xl font-semibold tracking-tight text-foreground"
    />
  ),
  h3: (props) => (
    <h3 {...props} className="mt-8 text-xl font-semibold text-foreground" />
  ),
  p: (props) => <p {...props} className="mt-4 text-base leading-8 text-muted" />,
  ul: (props) => <ul {...props} className="mt-4 list-disc space-y-2 pl-6 text-muted" />,
  ol: (props) => <ol {...props} className="mt-4 list-decimal space-y-2 pl-6 text-muted" />,
  li: (props) => <li {...props} className="leading-8" />,
  a: (props) => <a {...props} className="text-cyan underline-offset-4 hover:underline" />,
  code: (props) => (
    <code
      {...props}
      className="rounded bg-white/8 px-1.5 py-0.5 font-mono text-sm text-cyan"
    />
  ),
  blockquote: (props) => (
    <blockquote
      {...props}
      className="mt-6 border-l-2 border-magenta/40 pl-5 italic text-foreground/85"
    />
  ),
};
