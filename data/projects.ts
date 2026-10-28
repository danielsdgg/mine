// data/projects.ts
export type Project = {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "Daleon Dynamics",
    tagline: "My software company's website",
    description:
      "Company site for my Nairobi web design and software startup, built entirely with Next.js App Router and designed for search: structured metadata, sitemap, schema markup, service pages and a blog. The contact form saves enquiries to Google Sheets.",
    stack: ["Next.js", "App Router", "SEO", "Google Sheets"],
    href: "https://daleondynamics.com",
  },
  {
    title: "Tulip Foundation Kenya",
    tagline: "Website for a non-profit",
    description:
      "Website for a Kenyan non-profit supporting education, youth empowerment and families, with programme and story pages, search and social-preview metadata, and a donation and WhatsApp call to action.",
    stack: ["Next.js"],
    href: "https://tulipfoundationkenya.com",
  },
  {
    title: "HeroCloth",
    tagline: "Fashion e-commerce store",
    description:
      "Online store with a product catalogue, add to cart and checkout, plus an admin panel for creating, editing and deleting products. Python backend, React frontend.",
    stack: ["React", "Python"],
    href: "https://herocloth.vercel.app",
  },
  {
    title: "Karen Direct Insurance Brokers",
    tagline: "Website for an insurance broker",
    description:
      "React site for an insurance brokerage. It was scoped as a full-stack app, and we delivered it as a static site to match what the client needed.",
    stack: ["React"],
    href: "https://www.karendirectins.com",
  },
];