import Link from "next/link";
import { projects } from "@/lib/data";
import { Kicker, Tag } from "@/components/ui/tag";

export function Projects() {
  return (
    <section id="projects" className="border-t-4 border-border py-16 sm:py-[72px]">
      <Kicker className="mb-8">Selected Projects</Kicker>
      <h2 className="font-heading mb-8 text-[28px] uppercase tracking-tight sm:text-[38px]">
        Seven builds, three industries.
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="flex h-full flex-col overflow-hidden border-[3px] border-border bg-surface shadow-[6px_6px_0_var(--shadow)]"
          >
            <div className="flex flex-1 flex-col gap-3.5 p-5.5">
              <span className="text-xs font-bold uppercase tracking-wide text-muted">
                {project.category} · {project.year}
              </span>
              <h3 className="font-heading m-0 text-[19px] uppercase">{project.name}</h3>
              <p className="m-0 flex-1 text-[15px] font-medium leading-[1.55]">{project.blurb}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              {project.caseStudySlug && (
                <Link
                  href={`/case-studies/${project.caseStudySlug}`}
                  className="mt-1 text-sm font-extrabold uppercase no-underline"
                >
                  Read case study →
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
