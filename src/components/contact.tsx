import { buttonClasses } from "@/components/ui/button-styles";

export function Contact() {
  return (
    <section id="contact" className="border-t-4 border-border bg-ink text-bg">
      <div className="mx-auto max-w-300 px-5 py-22 sm:px-8 md:px-16">
        <h3 className="font-heading text-[32px] uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-[58px]">
          <span className="block">Let&rsquo;s build something</span>
          <span className="block text-accent">reliable, together.</span>
        </h3>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a href="mailto:aguspadilah30@gmail.com" className={buttonClasses("invert", "md")}>
            aguspadilah30@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/apadilah30"
            className="text-[15px] font-bold text-bg underline hover:text-bg active:text-bg"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/apadilah30"
            className="text-[15px] font-bold text-bg underline hover:text-bg active:text-bg"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
