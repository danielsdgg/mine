import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Daniel Muiruri",
  jobTitle: "Full-Stack Developer",
  url: "https://danielmuiruri.vercel.app",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  worksFor: {
    "@type": "Organization",
    name: "Daleon Dynamics",
    url: "https://daleondynamics.com",
  },
  sameAs: [
    "https://github.com/danielsdgg",
    "https://www.linkedin.com/in/daniel-muiruri-541a701a3/",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        Daniel Muiruri · Full-Stack Developer · Nairobi, Kenya
      </footer>
    </>
  );
}