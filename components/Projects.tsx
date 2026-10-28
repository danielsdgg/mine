import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        Selected work
      </h2>
      <p className="mt-2 max-w-2xl text-muted">
        Live projects I have built and shipped for clients.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface"
          >
            <div className="relative aspect-video w-full bg-border/50">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              ) : (
                <div className="flex h-full items-center justify-center px-4 text-center text-lg font-semibold text-muted">
                  {p.title}
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-accent">{p.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {p.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 text-sm font-medium text-accent hover:underline"
              >
                Visit site →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}