import styles from './Hero.module.css';

const techs = ['React', 'Next.js', 'Node.js', 'java', 'Python', 'Docker', 'PostgreSQL'];

export default function Hero() {
  return (
    <section id="hero" className={`${styles.hero} d-flex align-items-center`}>
      <div className="container">
        <div className="row align-items-center gy-5">

          {/* Contenu gauche */}
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <div className={`d-flex flex-column gap-4 ${styles.content}`}>

              <span className={styles.badge}>
                ✦ Disponible pour pour stage de fin d'études debouchant sur une alternance en java fullstacks 
              </span>

              <h1 className={`fw-bold ${styles.title}`}>
                java-Fullstack{' '}
                <span className={styles.accent}>Developer</span>
              </h1>

              <p className={`${styles.subtitle} mb-0`}>
                Je conçois et développe des applications web complètes —
                du design Figma jusqu'au déploiement Docker.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <a href="#projects" className={`btn ${styles.btnPrimary}`}>
                  Voir mes projets
                </a>
                <a href="#contact" className={`btn ${styles.btnGhost}`}>
                  Me contacter
                </a>
              </div>

              <div className="d-flex flex-wrap gap-2">
                {techs.map(tech => (
                  <span key={tech} className={styles.techBadge}>{tech}</span>
                ))}
              </div>

            </div>
          </div>

          {/* Visuel droite */}
          <div className="col-12 col-lg-5 offset-lg-1 order-1 order-lg-2">
            <div className={styles.card}>
              <span className={styles.cardLine}>
                <span className={styles.keyword}>const</span> dev = {'{'}
              </span>
              <span className={styles.cardLine}>
                &nbsp;&nbsp;name:{' '}
                <span className={styles.string}>"Melvine Joêl"</span>,
              </span>
              <span className={styles.cardLine}>
                &nbsp;&nbsp;role:{' '}
                <span className={styles.string}>"Java-Fullstack Dev"</span>,
              </span>
              <span className={styles.cardLine}>
                &nbsp;&nbsp;open:{' '}
                <span className={styles.keyword}>true</span>
              </span>
              <span className={styles.cardLine}>{'}'}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}