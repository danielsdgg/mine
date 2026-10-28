export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <div className="rounded-2xl border border-border bg-surface p-8 sm:p-12">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Let&apos;s work together
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          I am open to full-time or part-time developer roles, on-site, hybrid
          or remote. For a website or web app for your business, you can also
          reach me through Daleon Dynamics.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:gathigdg26@gmail.com"
            className="rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-muiruri-541a701a3/"
            className="rounded-lg border border-border px-5 py-3 text-sm font-medium hover:bg-background"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/danielsdgg"
            className="rounded-lg border border-border px-5 py-3 text-sm font-medium hover:bg-background"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}