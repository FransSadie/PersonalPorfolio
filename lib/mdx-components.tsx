import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => <h1 {...props} className="display-font mt-12 text-5xl" />,
  h2: (props) => <h2 {...props} className="display-font mt-12 text-4xl" />,
  h3: (props) => <h3 {...props} className="mt-10 text-2xl font-semibold" />,
  p: (props) => <p {...props} className="mt-5 text-lg leading-8" />,
  ul: (props) => <ul {...props} className="mt-5 list-disc space-y-3 pl-6 text-lg" />,
  ol: (props) => <ol {...props} className="mt-5 list-decimal space-y-3 pl-6 text-lg" />,
  li: (props) => <li {...props} className="leading-8" />,
  a: (props) => <a {...props} />,
  code: (props) => <code {...props} />,
  blockquote: (props) => <blockquote {...props} className="mt-8 border-l-2 border-[#df765d] pl-6 text-lg italic" />,
};
