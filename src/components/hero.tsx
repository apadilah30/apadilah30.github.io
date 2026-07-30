import { heroHeadline1, heroHeadline2 } from "@/lib/data";
import { buttonClasses } from "@/components/ui/button-styles";
import { Kicker } from "@/components/ui/tag";

export function Hero() {
  return (
    <section className="py-14 sm:py-20 md:pb-16 md:pt-24">
      <Kicker rotate className="mb-6">
        Full-stack Developer — Remote-first
      </Kicker>
      <h1 className="font-heading text-[38px] uppercase leading-[1.02] tracking-tight sm:text-6xl md:text-[84px]">
        <span className="block">{heroHeadline1}</span>
        <span
          className="block bg-accent px-2 text-accent-ink"
          style={{ WebkitBoxDecorationBreak: "clone", boxDecorationBreak: "clone" }}
        >
          {heroHeadline2}
        </span>
      </h1>
      <p className="mt-8 max-w-[58ch] text-lg font-medium leading-[1.65]">
        5+ years owning projects end-to-end — architecture, backend APIs, frontend delivery, and
        deployment — across fully distributed, asynchronous teams. Fluent in Go, PHP, Python, and
        TypeScript/React. Open to full-time remote roles and freelance engagements.
      </p>
      <div className="mt-9 flex flex-wrap gap-4">
        <a href="#projects" className={`flex-1 basis-[200px] ${buttonClasses("primary", "md")}`}>
          View projects
        </a>
        <a href="#contact" className={`flex-1 basis-[200px] ${buttonClasses("secondary", "md")}`}>
          Get in touch
        </a>
      </div>
    </section>
  );
}
