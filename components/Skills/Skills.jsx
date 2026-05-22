"use client"; // <--- AJOUTE CETTE LIGNE ICI
import styles from './Skills.module.css';
// Dans Skills.jsx par exemple
import { useInView } from '../../hooks/useInView';

const skillGroups = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: ['React', 'Next.js', 'React Native', 'TypeScript', 'JavaScript', 'CSS', 'Accessibilité web'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['NestJS', 'FastAPI', 'Django', 'API REST', 'JWT', 'Rôles & Permissions'],
  },
  {
    category: 'Base de données',
    icon: '🗄️',
    skills: ['PostgreSQL', 'Prisma ORM', 'SQL'],
  },
  {
    category: 'DevOps & Outils',
    icon: '🚀',
    skills: ['Docker', 'GitHub Actions', 'GitLab CI/CD', 'Jenkins', 'Ansible', 'Git'],
  },
  {
    category: 'Langages',
    icon: '💻',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: 'Concepts',
    icon: '🧠',
    skills: ['CI/CD Pipelines', 'DevSecOps', 'Infrastructure as Code', 'Cloud', 'Git Flow'],
  },
];

const experiences = [
  {
    role: 'Développeur Fullstack — Stage',
    company: 'Wyze Academy',
    period: '2026 · 2 mois',
    location: 'FRANCE (angers)',
    desc: 'Développement de l\'application mobile Apex en React Native pour des partenaires au Sénégal.',
  },
  {
    role: 'developpeur backend-fullstack - projet académique',
    company: 'UCLM · Albacete, Espagne',
    period: '2025',
    location: 'Espagne',
    desc: 'Conception et développement complet d\'un Project Management Dashboard (React, NestJS, PostgreSQL, Docker).',
  },
];

export default function Skills() {
  const [ref, inView] = useInView();
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Skills & Expériences</h2>
        <p className={styles.subtitle}>Mon stack technique et mon parcours professionnel.</p>
      </div>

      

      <div className={styles.layout}>
        <div className={styles.left}>
          <h3 className={styles.blockTitle}>Compétences techniques</h3>
          <div className={styles.grid}>
            {skillGroups.map(group => (
              <div key={group.category} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.icon}>{group.icon}</span>
                  <span className={styles.category}>{group.category}</span>
                </div>
                <div className={styles.tags}>
                  {group.skills.map(skill => (
                    <span key={skill} className={styles.tag}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <h3 className={styles.blockTitle}>Expériences</h3>
          <div className={styles.timeline}>
            {experiences.map((exp, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <span className={styles.period}>{exp.period}</span>
                  <h4 className={styles.role}>{exp.role}</h4>
                  <span className={styles.company}>{exp.company}</span>
                  <p className={styles.desc}>{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.formation}>
            <h3 className={styles.blockTitle}>Formations</h3>
            <div className={styles.formationItem}>
              <span className={styles.period}>2023 — Aujourd'hui</span>
              <h4 className={styles.role}>École d'Ingénieurs — Web Fullstack & DevOps</h4>
              <span className={styles.company}>ESAIP · Angers, France</span>
            </div>
            <div className={styles.formationItem}>
              <span className={styles.period}>2021 — 2023</span>
              <h4 className={styles.role}>classe preparatoire mathsup mpsi-mp</h4>
              <span className={styles.company}>École Polytechnique · Libreville, Gabon</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    
  );
}

