import { experience } from "@/lib/data";
import { Kicker } from "@/components/ui/tag";

export function Experience() {
  return (
    <section id="experience" className="border-t-4 border-border py-16 sm:py-[72px]">
      <Kicker className="mb-4.5">Work Experience</Kicker>
      <h2 className="font-heading mb-7 text-[28px] uppercase tracking-tight sm:text-[38px]">
        Six years across six teams.
      </h2>
      <div>
        {experience.map((role) => (
          <div
            key={role.num}
            className="grid grid-cols-[minmax(36px,60px)_minmax(0,1fr)] items-baseline gap-x-4 gap-y-3 border-t-[3px] border-border py-6 sm:gap-x-6 md:gap-x-14"
          >
            <p
              className="font-heading m-0 text-base text-accent"
              style={{ WebkitTextStroke: "1px var(--border)" }}
            >
              {role.num}
            </p>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <h3 className="font-heading m-0 text-xl uppercase tracking-tight">
                  {role.title} — {role.company}
                </h3>
                <span className="whitespace-nowrap border-2 border-border bg-surface-alt px-2 py-0.5 text-[13px] font-bold">
                  {role.dates}
                </span>
              </div>
              <p className="mt-3 max-w-[64ch] text-[15.5px] font-medium leading-[1.6]">
                {role.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
