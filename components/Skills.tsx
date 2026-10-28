const groups = [
  {
    title: "Frontend",
    items: ["React", "Next.js (App Router)", "TypeScript", "JavaScript", "Angular", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    items: ["Python", "FastAPI", "Flask", "Node.js", "REST APIs", "JWT authentication"],
  },
  {
    title: "Data & Tools",
    items: ["SQLite", "Git & GitHub", "Linux", "Cloudinary", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Skills</h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {groups.map((g) => (
          <div key={g.title} className="rounded-xl border border-border bg-surface p-5">
            <h3 className="font-semibold text-accent">{g.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li
                  key={i}
                  className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}