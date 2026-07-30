import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Services } from "@/components/services";
import { Companies } from "@/components/companies";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <div className="mx-auto max-w-300 px-5 sm:px-8 md:px-16">
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Services />
        <Companies />
      </div>
      <Contact />
      <Footer />
    </>
  );
}
