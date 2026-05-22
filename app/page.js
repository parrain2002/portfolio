import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Projects/Projects';
import Skills from '@/components/Skills/Skills';
import Contact from '@/components/Contact/Contact';
import FAQ from '@/components/FAQ/FAQ';


// Schema.org JSON-LD
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dexter',
  jobTitle: 'Développeur Java-Fullstack',
  url: 'https://ton-portfolio.vercel.app',
  email: 'mmeyoghe.ir2026@esaip.org',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Angers',
    addressCountry: 'FR',
  },
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'ESAIP',
      address: 'Angers, France',
    },
  ],
  knowsAbout: [
    'React', 'Next.js', 'NestJS', 'FastAPI',
    'Django', 'PostgreSQL', 'Docker', 'DevOps',
  ],
  sameAs: [
    'https://github.com/ton-github',
    'https://linkedin.com/in/ton-linkedin',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Dexter — Java-Fullstack Developer',
  url: 'https://ton-portfolio.vercel.app',
  description: 'Portfolio de Dexter, développeur Java-Fullstack.',
};

export default function Home() {
  return (
    <main>
      {/* 1. Ta structure de Portfolio Figma */}
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <FAQ />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Structure sémantique */}
      <header>
        <Navbar />
      </header>

      
        <Hero />

        <section id="projects" aria-label="Mes projets">
          <Projects />
        </section>

        <section id="skills" aria-label="Compétences et expériences">
          <Skills />
        </section>

        <section id="faq" aria-label="Questions fréquentes">
          <FAQ />
        </section>

        <section id="contact" aria-label="Contact">
          <Contact />
        </section>

    </main>
  );
}
