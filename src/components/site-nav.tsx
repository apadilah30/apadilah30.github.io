import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonClasses } from "@/components/ui/button-styles";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
];

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-30 flex flex-col gap-3.5 border-b-4 border-border bg-bg px-5 py-4 sm:px-8 md:px-16">
      <div className="flex items-center justify-between gap-4">
        <span className="font-heading text-[19px] uppercase tracking-tight">Agus Padilah</span>
        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a href="#contact" className={buttonClasses("primary", "sm")}>
            Get in touch
          </a>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-5 overflow-x-auto">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="whitespace-nowrap text-[13px] font-bold uppercase no-underline"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
