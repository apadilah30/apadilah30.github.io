import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section
      aria-label="At a glance"
      className="grid grid-cols-2 gap-7 border-y-4 border-border py-12 sm:grid-cols-4"
    >
      {stats.map((stat) => (
        <div key={stat.label}>
          <p
            className="font-heading m-0 text-[30px] text-accent sm:text-[44px]"
            style={{ WebkitTextStroke: "1.5px var(--border)" }}
          >
            {stat.value}
          </p>
          <p className="mt-1.5 text-[13px] font-bold uppercase tracking-wide">{stat.label}</p>
        </div>
      ))}
    </section>
  );
}
