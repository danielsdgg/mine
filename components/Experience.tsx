const roles = [
  {
    title: "Founder & Lead Developer",
    org: "Daleon Dynamics",
    period: "Present",
    bullets: [
      "Build websites and web apps for Kenyan businesses with Next.js, from requirements to deployment and SEO.",
      "Work directly with clients on scope, timelines and delivery as the sole developer.",
    ],
  },
  {
    title: "Software Developer & Technical Trainer",
    org: "Morgan Technical Training",
    period: "Oct 2024 – Present",
    bullets: [
      "Lead software development for the school's internal systems, including the learning management system students use to learn remotely, built end to end with course management, student tracking and assessments.",
      "Train aspiring developers in frontend, backend and deployment through real portfolio projects.",
    ],
  },
  {
    title: "Software Developer (Intern)",
    org: "iTalanta",
    period: "Sep 2023 – Feb 2024",
    bullets: [
      "Built the Elewa website interface with React and TypeScript under tight deadlines.",
      "Contributed frontend fixes and pull requests to the open-source Goomza project (Angular, TypeScript).",
    ],
  },
  {
    title: "IT Consultant",
    org: "Grizzly Systems LTD",
    period: "Nov 2020 – Nov 2021",
    bullets: [
      "Built websites for schools and businesses alongside the senior developer, using JavaScript.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        Experience
      </h2>

      <ol className="mt-10 space-y-8 border-l border-border pl-6">
        {roles.map((r) => (
          <li key={r.org} className="relative">
            <span className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold">
                {r.title} <span className="text-muted">· {r.org}</span>
              </h3>
              <span className="text-sm text-muted">{r.period}</span>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted">
              {r.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}