import styles from './Projects.module.css';

const projects = [
  {
    title: 'SaaS Project Management Dashboard',
    description: 'Application fullstack complète avec auth JWT, gestion des rôles, dashboards et indicateurs de performance.',
    techs: ['React', 'Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'JWT'],
    type: 'Professionnel',
    year: '2025',
    live: '#',
    github: '#',
  },
  {
    title: 'Apex — Application Mobile',
    description: 'Application mobile React Native pour des partenaires au Sénégal, développée en stage chez Wyze Academy.',
    techs: ['React Native', 'JavaScript', 'Mobile'],
    type: 'Stage',
    year: '2024',
    live: null,
    github: '#',
  },
  {
    title: 'Dashboard UX & IHM',
    description: 'Tableau de bord Material Design 3, graphiques interactifs et accessibilité avancée.',
    techs: ['React', 'Material Design 3', 'Accessibilité'],
    type: 'Académique',
    year: '2025',
    live: null,
    github: '#',
  },
  {
    title: 'CI/CD Automation Pipeline',
    description: 'Pipelines complets avec Docker, GitHub Actions, GitLab CI/CD et Ansible. Approche DevSecOps.',
    techs: ['Docker', 'GitHub Actions', 'GitLab CI/CD', 'Ansible'],
    type: 'DevOps',
    year: '2024',
    live: null,
    github: '#',
  },
  {
    title: 'Full SaaS App',
    description: 'Auth JWT, CRUD complet, gestion des rôles. Déploiement Render + Netlify.',
    techs: ['NestJS', 'React', 'Prisma', 'PostgreSQL'],
    type: 'Personnel',
    year: '2024',
    live: '#',
    github: '#',
  },
  {
    title: 'ToDo List App',
    description: 'TypeScript strict, composants modulaires, Docker et CI/CD GitHub Actions.',
    techs: ['React', 'TypeScript', 'Docker', 'CI/CD'],
    type: 'Personnel',
    year: '2024',
    live: null,
    github: '#',
  },
];

const typeColors = {
  'Professionnel': '#E50914',
  'Stage':         '#7C3AED',
  'Académique':    '#2563EB',
  'DevOps':        '#D97706',
  'Personnel':     '#22C55E',
};

export default function Projects() {
  return (
    <section id="projects" className={`py-5 ${styles.section}`}>
      <div className="container">

        {/* Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-md-8 text-center">
            <h2 className={`fw-semibold mb-3 ${styles.title}`}>Mes Projets</h2>
            <p className={styles.subtitle}>
              Des projets professionnels, académiques et personnels
              qui reflètent mon parcours java-fullstack.
            </p>
          </div>
        </div>

        {/* Grid projets */}
        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.title} className="col-12 col-md-6 col-xl-4">
              <div className={`h-100 ${styles.card}`}>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span
                    className={styles.type}
                    style={{
                      color: typeColors[project.type],
                      borderColor: typeColors[project.type],
                    }}
                  >
                    {project.type}
                  </span>
                  <span className={styles.year}>{project.year}</span>
                </div>

                <h3 className={`${styles.cardTitle} mb-2`}>{project.title}</h3>
                <p className={`${styles.cardDesc} flex-grow-1`}>{project.description}</p>

                <div className="d-flex flex-wrap gap-2 my-3">
                  {project.techs.map(tech => (
                    <span key={tech} className={styles.tech}>{tech}</span>
                  ))}
                </div>

                <div className={`d-flex gap-3 pt-3 ${styles.cardLinks}`}>
                  {project.github && (
                    <a href={project.github} className={styles.link}>GitHub →</a>
                  )}
                  {project.live && (
                    <a href={project.live} className={styles.linkLive}>Live ↗</a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}