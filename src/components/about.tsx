import { aboutFacts } from "@/lib/data";
import { Kicker } from "@/components/ui/tag";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-[72px]">
      <div className="grid items-start gap-10 sm:grid-cols-2">
        <div>
          <Kicker className="mb-4.5">About</Kicker>
          <h2 className="font-heading mb-5 text-[28px] uppercase tracking-tight sm:text-[38px]">
            Engineer who owns the whole stack.
          </h2>
          <p className="max-w-[56ch] text-base font-medium leading-[1.7]">
            Remote-first full-stack developer shipping production applications for e-commerce,
            IoT, and fintech clients across distributed teams. I own projects end-to-end —
            architecture, backend APIs, frontend delivery, and deployment — while collaborating
            fully asynchronously. Fluent across PHP (Laravel), Python (Django/Flask),
            JavaScript/TypeScript (React, Next.js), and Go, with strong fundamentals in
            databases, caching, and containerized deployment.
          </p>
        </div>
        <div className="flex flex-col gap-4.5 border-[3px] border-border bg-surface p-6 shadow-[6px_6px_0_var(--shadow)]">
          {aboutFacts.map((fact, i) => (
            <div key={fact.label} className="contents">
              {i > 0 && <hr className="h-0.5 border-0 bg-border opacity-15" />}
              <div>
                <p className="m-0 mb-1 text-xs font-bold uppercase tracking-wide text-muted">
                  {fact.label}
                </p>
                <p className="m-0 text-base font-semibold">{fact.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
