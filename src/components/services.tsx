import { services } from "@/lib/data";
import { Kicker } from "@/components/ui/tag";

export function Services() {
  return (
    <section id="services" className="border-t-4 border-border py-16 sm:py-[72px]">
      <Kicker className="mb-4.5">Services</Kicker>
      <h2 className="font-heading mb-3 text-[28px] uppercase tracking-tight sm:text-[38px]">
        Available for freelance engagements.
      </h2>
      <p className="mb-8 max-w-[60ch] text-base font-medium leading-[1.6]">
        Also open to full-time remote roles. Here&rsquo;s what I typically take on as a
        contractor:
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col gap-2.5 border-[3px] border-border bg-surface-alt p-5.5 shadow-[6px_6px_0_var(--shadow)]"
          >
            <h3 className="font-heading m-0 text-[17px] uppercase">{service.title}</h3>
            <p className="m-0 text-[14.5px] font-medium leading-[1.55]">{service.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
