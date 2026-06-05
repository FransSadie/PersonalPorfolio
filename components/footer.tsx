import Link from "next/link";

export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 border-t border-white/6 px-5 py-8 text-sm text-muted sm:px-8 lg:px-10">
      <p>
        Frans / Portfolio
        <span className="mx-2 text-cyan">::</span>
        Built with Next.js and MDX
      </p>
      <Link href="/contact" className="text-foreground hover:text-cyan">
        Contact
      </Link>
    </footer>
  );
}
