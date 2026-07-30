import Link from "next/link";

export function CaseStudyNav() {
  return (
    <nav className="flex items-center justify-between border-b-4 border-border bg-bg px-5 py-5 sm:px-8 md:px-16">
      <span className="font-heading text-xl uppercase">Agus Padilah</span>
      <Link href="/#projects" className="text-sm font-bold uppercase no-underline">
        ← Back to projects
      </Link>
    </nav>
  );
}
