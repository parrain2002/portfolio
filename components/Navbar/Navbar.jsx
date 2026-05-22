'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bootstrap JS pour le collapse (côté client uniquement)
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">

        {/* Logo */}
        <span className={`navbar-brand ${styles.logo}`}>
          &lt;Melvine Joêl /&gt;
        </span>

        {/* Bouton hamburger mobile */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Liens — collapse sur mobile */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-lg-4">
            <li className="nav-item">
              <Link href="#hero" className={`nav-link ${styles.navLink}`}>Accueil</Link>
            </li>
            <li className="nav-item">
              <Link href="#projects" className={`nav-link ${styles.navLink}`}>Projets</Link>
            </li>
            <li className="nav-item">
              <Link href="#skills" className={`nav-link ${styles.navLink}`}>Skills</Link>
            </li>
            <li className="nav-item">
              <Link href="#contact" className={`nav-link ${styles.navLink}`}>Contact</Link>
            </li>
          </ul>

          {/* CTA */}
          <a href="#contact" className={`btn ${styles.ctaBtn}`}>
            Me contacter
          </a>
        </div>

      </div>
    </nav>
  );
}