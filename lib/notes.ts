import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/lib/mdx-components";
import type { NoteMeta } from "@/types/content";

const notesDirectory = path.join(process.cwd(), "content", "notes");

type RawFrontmatter = Omit<NoteMeta, "slug">;

function getNotePath(slug: string) {
  return path.join(notesDirectory, `${slug}.mdx`);
}

export function getAllNotes(): NoteMeta[] {
  const filenames = fs.readdirSync(notesDirectory);

  return filenames
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const source = fs.readFileSync(getNotePath(slug), "utf8");
      const { data } = matter(source);
      const frontmatter = data as RawFrontmatter;

      return {
        slug,
        title: frontmatter.title,
        summary: frontmatter.summary,
        date: frontmatter.date,
        tags: frontmatter.tags,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNoteBySlug(slug: string) {
  const notePath = getNotePath(slug);

  if (!fs.existsSync(notePath)) {
    return null;
  }

  const source = fs.readFileSync(notePath, "utf8");
  const { data, content } = matter(source);
  const frontmatter = data as RawFrontmatter;

  return {
    meta: {
      slug,
      title: frontmatter.title,
      summary: frontmatter.summary,
      date: frontmatter.date,
      tags: frontmatter.tags,
    },
    content,
  };
}

export async function renderNote(source: string) {
  return MDXRemote({
    source,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });
}
