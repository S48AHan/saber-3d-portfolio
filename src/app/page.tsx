import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { socials } from "@/data/experience";
import { SITE_DESCRIPTION, SITE_URL } from "@/data/site";

const person = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Saber Ahmed",
  url: SITE_URL,
  jobTitle: "Software Engineer II",
  image: `${SITE_URL}/saber-portrait.jpg`,
  worksFor: { "@type": "Organization", name: "Polygon Technology", url: "https://polygontechnology.io/" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Ahsanullah University of Science and Technology" },
  email: "mailto:saberahmedn2@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
  sameAs: socials.filter((s) => s.href.startsWith("http")).map((s) => s.href),
  knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Web development"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    person,
    {
      "@type": "ProfessionalService",
      name: "Saber Ahmed — Web Development",
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      founder: { "@id": person["@id"] },
      areaServed: "Worldwide",
      image: `${SITE_URL}/saber-portrait.jpg`,
      address: person.address,
    },
  ],
};

export default function Home() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
