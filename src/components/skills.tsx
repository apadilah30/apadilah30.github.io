import { skillGroups } from "@/lib/data";
import { Kicker } from "@/components/ui/tag";

export function Skills() {
  return (
    <section className="border-t-4 border-border py-16 sm:py-[72px]">
      <Kicker className="mb-4.5">Technical Skills</Kicker>
      <h2 className="font-heading mb-7 text-[28px] uppercase tracking-tight sm:text-[38px]">
        Tools I reach for.
      </h2>
      <div className="flex flex-col gap-4">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="grid grid-cols-1 items-start gap-x-7 gap-y-2.5 border-t-[3px] border-border py-4 sm:grid-cols-[repeat(auto-fit,minmax(140px,1fr))]"
          >
            <p className="m-0 text-[13px] font-bold uppercase tracking-wide text-muted">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="border-2 border-border px-2.25 py-0.75 text-xs font-bold">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
