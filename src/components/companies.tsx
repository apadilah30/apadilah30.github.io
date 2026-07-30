import { companies } from "@/lib/data";
import { Kicker } from "@/components/ui/tag";

export function Companies() {
  return (
    <section className="border-t-4 border-border py-16 sm:py-[72px]">
      <Kicker className="mb-6">Companies I&rsquo;ve built for</Kicker>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {companies.map((company) => (
          <div key={company} className="border-2 border-border bg-surface px-4 py-3.5">
            <p className="font-heading m-0 text-sm uppercase">{company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
