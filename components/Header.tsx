import Image from "next/image";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-3 font-semibold tracking-tight">
          <Image
            src="/daniel.jpg"
            alt="Daniel Muiruri"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full border border-border object-cover"
          />
          Daniel Muiruri
        </a>
        <nav className="flex gap-6 text-sm text-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}