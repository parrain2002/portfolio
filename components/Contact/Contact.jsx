'use client';
import { useEffect, useRef } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const toastRef = useRef(null);

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText('mmeyoghe.ir2026@esaip.org');

    // Afficher le toast Bootstrap
    const { Toast } = await import('bootstrap');
    const toast = new Toast(toastRef.current);
    toast.show();
  };

  return (
    <section id="contact" className={`${styles.section}`}>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-lg-7">

            <h2 className={`fw-bold mb-4 ${styles.title}`}>
              Travaillons ensemble
            </h2>
            <p className={`mb-5 ${styles.subtitle}`}>
              Disponible pour des missions freelance, des stages ou
              des opportunités fullstack avec react et nestjs et backend avec java . N'hésite pas à me contacter.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-5">
              <a
                href="mailto:mmeyoghe.ir2026@esaip.org"
                className={`btn ${styles.emailBtn}`}
              >
                mmeyoghe.ir2026@esaip.org ↗
              </a>
              <button
                className={`btn ${styles.copyBtn}`}
                onClick={handleCopyEmail}
              >
                Copier l'email
              </button>
            </div>

            <div className="d-flex justify-content-center align-items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.social}>
                GitHub
              </a>
              <span className={styles.dot}>·</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.social}>
                LinkedIn
              </a>
              <span className={styles.dot}>·</span>
              <a href="#" className={styles.social}>CV PDF</a>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`container mt-5 pt-4 ${styles.footer}`}>
        <div className="row justify-content-between align-items-center">
          <div className="col-auto">
            <span className={styles.footerText}>
              Conçu sur Figma · Développé avec Next.js
            </span>
          </div>
          <div className="col-auto">
            <span className={styles.footerText}>© 2025 — Melvine Joêl</span>
          </div>
        </div>
      </div>

      {/* Toast Bootstrap */}
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 999 }}>
        <div
          ref={toastRef}
          className={`toast align-items-center border-0 ${styles.toast}`}
          role="alert"
        >
          <div className="d-flex">
            <div className="toast-body">
              ✅ Email copié dans le presse-papier !
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
            />
          </div>
        </div>
      </div>

    </section>
  );
}