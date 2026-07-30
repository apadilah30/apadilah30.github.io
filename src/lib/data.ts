export type ExperienceItem = {
  num: string;
  title: string;
  company: string;
  dates: string;
  summary: string;
};

export type Project = {
  name: string;
  slug: string;
  category: string;
  year: string;
  blurb: string;
  tags: string[];
  caseStudySlug: string | null;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Service = {
  title: string;
  body: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  kicker: string;
  role: string;
  company: string;
  timeline: string;
  stack: string;
  overview: string;
  problem: string;
  approach: string[];
  result: string;
  tags: string[];
};

export const heroHeadline1 = "Shipping production web apps";
export const heroHeadline2 = "for e-commerce, fintech & IoT.";

export const stats = [
  { value: "5+", label: "Years experience" },
  { value: "6", label: "Companies shipped for" },
  { value: "12+", label: "Production projects" },
  { value: "100%", label: "Remote & async" },
];

export const aboutFacts = [
  { label: "Location", value: "Depok, West Java, Indonesia" },
  { label: "Languages", value: "Indonesian (native) · English (professional)" },
  { label: "Education", value: "B.Sc. Informatics — Universitas Siber Asia, GPA 3.26" },
  {
    label: "Certifications",
    value: "8 Dicoding certifications — Web, Data Science, AI, DevOps, Networking",
  },
];

export const experience: ExperienceItem[] = [
  {
    num: "01",
    title: "Frontend Developer",
    company: "PT Tikswa Rosan Utsaha Esa",
    dates: "Feb 2026 – May 2026 · Remote",
    summary:
      "Built an ads aggregator platform with reporting, dashboards, and analytics — decoupled Go (Gin) APIs with a component-based React.js frontend, secure upload handling, and a scalable MySQL schema for asset tracking.",
  },
  {
    num: "02",
    title: "Fullstack Developer",
    company: "PT Infomedia Nusantara",
    dates: "Sep 2025 – Feb 2026 · Remote",
    summary:
      "Engineered a CRM platform from the ground up for internal sales pipelines and project management, with modular Go (Gin) services and a type-safe TypeScript/React frontend, coordinating entirely remotely.",
  },
  {
    num: "03",
    title: "Frontend Developer",
    company: "PT Arif Konversi Surya Inovasi Indonesia",
    dates: "Aug 2024 – Aug 2025 · Remote",
    summary:
      "Built a real-time auction platform for official Persib jerseys with live bidding and integrated payments, plus internal dashboards and membership management interfaces.",
  },
  {
    num: "04",
    title: "Fullstack Developer",
    company: "PT Lintas Media Danawa",
    dates: "Jul 2023 – Present · Depok",
    summary:
      "Own end-to-end delivery of internal web apps — a CRM/CMS for building management and an FO network monitoring tool — with Laravel/Django backends, React/Next.js frontends, and query optimization across 450,000+ row datasets.",
  },
  {
    num: "05",
    title: "Backend Developer",
    company: "PT. Setia Digital Inovasi Bangsa",
    dates: "Jan 2022 – Jul 2023 · Bogor/Depok",
    summary:
      "Designed high-performance RESTful APIs for an e-commerce platform — catalog, authentication, order processing — using Java (Quarkus) microservices alongside PHP (Laravel, Lumen).",
  },
  {
    num: "06",
    title: "Web Developer",
    company: "PT. MAKERINDO PRIMA SOLUSI",
    dates: "Jun 2020 – Jan 2022 · Bandung",
    summary:
      "Delivered end-to-end platforms spanning IoT monitoring, multi-level e-commerce, and CMS systems — owning system design, database architecture, API development, and UI/UX.",
  },
];

export const projects: Project[] = [
  {
    name: "SPARC",
    slug: "proj-sparc",
    category: "Fintech / Ads",
    year: "2026",
    blurb:
      "Ads aggregator platform with third-party integrations, payments, and a wallet system, built for a fully distributed team.",
    tags: ["Go", "Gin", "React.js", "MySQL"],
    caseStudySlug: "sparc",
  },
  {
    name: "Persib Jersey Auction",
    slug: "proj-persib",
    category: "E-commerce",
    year: "2025",
    blurb:
      "Real-time auction platform for official jerseys with live bidding and automated payment integration.",
    tags: ["React.js", "Real-time", "Payments"],
    caseStudySlug: "persib",
  },
  {
    name: "GNTU Building Management",
    slug: "proj-gntu",
    category: "Enterprise",
    year: "2024–2025",
    blurb: "CRM & CMS platform supporting internal building and asset management operations.",
    tags: ["Laravel", "React", "MySQL"],
    caseStudySlug: null,
  },
  {
    name: "Cloudeka CMS Revamp",
    slug: "proj-cloudeka",
    category: "Enterprise",
    year: "2026",
    blurb: "CMS modernization on WordPress and React, including a dynamic pricing calculator.",
    tags: ["WordPress", "React"],
    caseStudySlug: null,
  },
  {
    name: "Caffeins",
    slug: "proj-caffeins",
    category: "Enterprise / IoT",
    year: "2023–2024",
    blurb: "Real-time Fiber Optic (FO) network monitoring system for internal operations.",
    tags: ["Laravel", "Next.js"],
    caseStudySlug: null,
  },
  {
    name: "Battery & Biofarma Monitoring",
    slug: "proj-battery",
    category: "Industrial IoT",
    year: "2020",
    blurb:
      "Monitoring systems tracking temperature, humidity, and pressure for BTS tower batteries and lab environments.",
    tags: ["IoT", "Vue.js"],
    caseStudySlug: null,
  },
  {
    name: "Consolidated Distribution System",
    slug: "proj-distribution",
    category: "E-commerce",
    year: "2021",
    blurb: "Three-level commodity sales ecosystem exposing a mobile-facing RESTful API.",
    tags: ["Laravel", "MySQL", "REST API"],
    caseStudySlug: null,
  },
];

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["PHP", "JavaScript", "TypeScript", "Python", "Go", "Java", "SQL"] },
  {
    label: "Backend Frameworks",
    items: ["Laravel", "Lumen", "Django", "Flask", "Gin", "Fiber", "Express.js", "Quarkus"],
  },
  { label: "Frontend Frameworks", items: ["React.js", "Next.js", "Vue.js", "Tailwind CSS", "Bootstrap"] },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"] },
  { label: "Infrastructure & Tools", items: ["Docker", "Nginx", "Redis", "Git", "GitHub", "GitLab"] },
  { label: "Integrations", items: ["RESTful API design", "Midtrans payment gateway"] },
];

export const services: Service[] = [
  {
    title: "Full-stack Web Application Development",
    body: "End-to-end builds — architecture, backend APIs, frontend delivery, and deployment — for e-commerce, fintech, and internal tools.",
  },
  {
    title: "API & Backend Architecture",
    body: "RESTful APIs and microservices in Go, PHP, Python, or Java, designed for scale and secure data handling.",
  },
  {
    title: "Database Design & Optimization",
    body: "Schema design and query tuning for PostgreSQL and MySQL, including datasets exceeding 450,000 rows.",
  },
  {
    title: "IoT & Real-time Monitoring Systems",
    body: "Dashboards and monitoring platforms for industrial and environmental sensor data, from edge to cloud.",
  },
];

export const companies: string[] = [
  "PT Tikswa Rosan Utsaha Esa",
  "PT Infomedia Nusantara",
  "PT Arif Konversi Surya Inovasi Indonesia",
  "PT Lintas Media Danawa",
  "PT. Setia Digital Inovasi Bangsa",
  "PT. Makerindo Prima Solusi",
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "sparc",
    title: "SPARC — Ads Aggregator Platform",
    kicker: "Case Study · Fintech / Ads",
    role: "Frontend Developer",
    company: "PT Tikswa Rosan Utsaha Esa",
    timeline: "Feb – May 2026",
    stack: "Go (Gin), React.js, MySQL",
    overview:
      "SPARC is an ads aggregator platform built for a distributed team, unifying reporting, dashboards, and analytics from third-party ad networks into a single interface, with payments and a wallet system layered on top.",
    problem:
      "The team needed a way to aggregate ad performance, payments, and asset data across integrations without a central source of truth — and to build it fully asynchronously, with no shared working hours.",
    approach: [
      "I built a decoupled architecture: a Go (Gin) backend for high-performance APIs, paired with a dynamic, component-based React.js frontend. Secure data-handling protocols covered profile management and resource uploads, and I designed a scalable MySQL database for asset tracking, user permissions, and real-time reporting.",
      "Async collaboration meant writing clear API contracts and documentation up front, so backend and frontend work could proceed independently across time zones.",
    ],
    result:
      "Shipped a working ads aggregator with real-time reporting, secure resource handling, and role-based permissions — delivered entirely through asynchronous collaboration across a distributed team.",
    tags: ["Go", "Gin", "React.js", "MySQL", "REST API"],
  },
  {
    slug: "persib",
    title: "Persib Jersey Auction Platform",
    kicker: "Case Study · E-commerce / Real-time",
    role: "Frontend Developer",
    company: "PT Arif Konversi Surya Inovasi Indonesia",
    timeline: "Aug 2024 – Aug 2025",
    stack: "React.js, Payment Gateway",
    overview:
      "An official real-time auction platform for Persib jerseys, built as part of a fully remote team, with live bidding, integrated payment processing, and supporting internal dashboards.",
    problem:
      "Fans needed a trustworthy way to bid on official jerseys in real time, with prices updating live and payment settled automatically the moment an auction closed — plus a way for the club's team to manage memberships and daily operations.",
    approach: [
      "I built the live-bidding interface with real-time price updates and integrated a payment gateway for automated settlement once bidding closed. Alongside the public auction experience, I delivered internal dashboards and membership management interfaces to streamline daily operations for the partnership team.",
    ],
    result:
      "Delivered a live, real-time auction experience with automated payment integration, plus dashboards that streamlined daily membership and partnership operations.",
    tags: ["React.js", "Real-time Bidding", "Payment Integration", "Dashboards"],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
