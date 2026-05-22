'use client';
import { useEffect } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: 'Tu travailles en freelance ?',
    a: 'Oui, je suis disponible pour des missions freelance en développement fullstack, que ce soit pour des projets courts ou des collaborations longues durées.',
  },
  {
    q: 'Quelles technologies tu maîtrises le mieux ?',
    a: 'React/Next.js côté frontend, NestJS, Java,FastAPI côté backend, PostgreSQL pour les bases de données, et Docker/GitHub Actions pour le DevOps.',
  },
  {
    q: 'Tu peux travailler à distance ?',
    a: 'Absolument. J\'ai déjà travaillé en remote sur des projets internationaux (Espagne, Sénégal). Je suis à l\'aise avec les outils de collaboration async.',
  },
  {
    q: 'Quel est ton délai de réponse ?',
    a: 'Je réponds généralement sous 24h. Pour les projets urgents, n\'hésites pas à le préciser dans ton message.',
  },
];

export default function FAQ() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <section className={`py-5 ${styles.section}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">

            <h2 className={`text-center fw-semibold mb-5 ${styles.title}`}>
              Questions fréquentes
            </h2>

            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, i) => (
                <div key={i} className={`accordion-item ${styles.accordionItem}`}>
                  <h3 className="accordion-header">
                    <button
                      className={`accordion-button ${i !== 0 ? 'collapsed' : ''} ${styles.accordionBtn}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq-${i}`}
                    >
                      {faq.q}
                    </button>
                  </h3>
                  <div
                    id={`faq-${i}`}
                    className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className={`accordion-body ${styles.accordionBody}`}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}