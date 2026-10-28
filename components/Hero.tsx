import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-5xl items-center gap-12 px-6 pb-20 pt-16 sm:pt-24 md:grid-cols-[1fr_auto]">
      <div>
        <p className="text-muted">Hello, I&apos;m</p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
          Daniel Muiruri
        </h1>

        <p className="mt-3 text-2xl font-semibold text-accent sm:text-3xl">
          Full-Stack Developer
        </p>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          I build fast, reliable web applications with React, Next.js,
          TypeScript and Python. Based in Nairobi, I lead software development
          at Morgan Technical Training and run Daleon Dynamics, a small
          software company building websites and web apps for Kenyan
          businesses.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            View my work →
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
          <a href="https://github.com/danielsdgg" className="hover:text-foreground">GitHub</a>
          <a href="https://www.linkedin.com/in/daniel-muiruri-541a701a3/" className="hover:text-foreground">LinkedIn</a>
          <a href="mailto:gathigidg26@gmail.com" className="hover:text-foreground">gathigidg26@gmail.com</a>
        </div>
      </div>

      <div className="relative mx-auto md:mx-0">
        <Image
          src="/daniel.jpg"
          alt="Daniel Muiruri"
          width={320}
          height={320}
          priority
          className="h-56 w-56 rounded-full border-2 border-border object-cover sm:h-72 sm:w-72"
        />
        <span className="absolute -bottom-2 right-0 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm shadow-sm">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Open to work
        </span>
      </div>
    </section>
  );
}