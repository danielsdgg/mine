export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 pt-20 sm:pt-28">
      <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted">
        <span className="h-2 w-2 rounded-full bg-green-500" />
        Open to full-time or part-time roles
      </p>

      <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
        Full-Stack Developer
      </h1>

      <p className="mt-4 text-lg text-accent sm:text-xl">
        React · Next.js · TypeScript · Python (FastAPI / Flask)
      </p>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        I build fast, reliable web applications from the interface to the
        backend. Based in Nairobi, I lead software development at Morgan
        Technical Training and run Daleon Dynamics, a small software company
        where I build websites and web apps for Kenyan businesses.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
        >
          View projects
        </a>
        <a
          href="/Daniel-Muiruri-CV.pdf"
          download
          className="rounded-lg border border-border px-5 py-3 text-sm font-medium hover:bg-surface"
        >
          Download CV
        </a>
      </div>

      <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted">
        <a href="https://github.com/danielsdgg" className="hover:text-foreground">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-muiruri-541a701a3/"
          className="hover:text-foreground"
        >
          LinkedIn
        </a>
        <a
          href="mailto:gathigidg26@gmail.com"
          className="hover:text-foreground"
        >
          gathigidg26@gmail.com
        </a>
      </div>
    </section>
  );
}