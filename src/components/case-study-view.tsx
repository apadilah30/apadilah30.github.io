import Link from "next/link";
import type { CaseStudy } from "@/lib/data";
import { CaseStudyNav } from "@/components/case-study-nav";
import { Kicker, Tag } from "@/components/ui/tag";
import { buttonClasses } from "@/components/ui/button-styles";

export function CaseStudyView({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <>
      <CaseStudyNav />
      <div className="mx-auto max-w-225 px-5 sm:px-8 md:px-16">
        <section className="pb-10 pt-14">
          <Kicker rotate className="mb-4.5">
            {caseStudy.kicker}
          </Kicker>
          <h1 className="font-heading mb-6 text-[32px] uppercase leading-[1.05] tracking-tight sm:text-5xl">
            {caseStudy.title}
          </h1>
          <div className="grid grid-cols-2 gap-4 border-y-[3px] border-border py-5 sm:grid-cols-4">
            <Fact label="Role" value={caseStudy.role} />
            <Fact label="Company" value={caseStudy.company} />
            <Fact label="Timeline" value={caseStudy.timeline} />
            <Fact label="Stack" value={caseStudy.stack} />
          </div>
        </section>

        <CaseSection title="Overview">
          <p className="m-0 text-base font-medium leading-[1.7]">{caseStudy.overview}</p>
        </CaseSection>
        <hr className="h-[3px] border-0 bg-ink" />

        <CaseSection title="Problem">
          <p className="m-0 text-base font-medium leading-[1.7]">{caseStudy.problem}</p>
        </CaseSection>
        <hr className="h-[3px] border-0 bg-ink" />

        <CaseSection title="Approach">
          <div className="flex flex-col gap-3">
            {caseStudy.approach.map((paragraph, i) => (
              <p key={i} className="m-0 text-base font-medium leading-[1.7]">
                {paragraph}
              </p>
            ))}
          </div>
        </CaseSection>
        <hr className="h-[3px] border-0 bg-ink" />

        <section className="pb-14 pt-9">
          <h2 className="font-heading mb-3 text-xl uppercase">Result</h2>
          <p className="m-0 mb-5 text-base font-medium leading-[1.7]">{caseStudy.result}</p>
          <div className="flex flex-wrap gap-2">
            {caseStudy.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </section>
      </div>

      <div className="mx-auto max-w-225 px-5 pb-14 pt-2 sm:px-8 md:px-16">
        <Link href="/#projects" className={buttonClasses("secondary", "sm")}>
          ← Back to all projects
        </Link>
      </div>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="m-0 mb-1 text-xs font-bold uppercase tracking-wide text-muted">{label}</p>
      <p className="m-0 text-[15px] font-semibold">{value}</p>
    </div>
  );
}

function CaseSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-9">
      <h2 className="font-heading mb-3 text-xl uppercase">{title}</h2>
      {children}
    </section>
  );
}
