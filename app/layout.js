import { Inter } from 'next/font/google';
import { JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',      // texte visible pendant chargement font
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  // Titre avec template
  title: {
    template: '%s | MEYOGHE Melvine Joêl — Fullstack Dev',
    default: 'MEYOGHE Melvine Joêl — Développeur Java-Fullstack React & Node.js',
  },

  // Description
  description:
    'Portfolio de MEYOGHE Melvine Joêl, développeur Java-Fullstack spécialisé React, Next.js, NestJS, FastAPI et Docker. Disponible pour missions freelance et opportunités.',

  // Mots-clés (moins importants qu'avant mais utiles)
  keywords: [
    'développeur java-fullstack',
    'React',
    'Next.js',
    'NestJS',
    'Java',
    'Node.js',
    'Docker',
    'DevOps',
    'freelance',
  ],

  // Auteur
  authors: [{ name: 'MEYOGHE Melvine Joêl', url: 'https://ton-portfolio.vercel.app' }],

  // Canonical de base
  metadataBase: new URL('https://ton-portfolio.vercel.app'),

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://ton-portfolio.vercel.app',
    siteName: 'MEYOGHE Melvine Joêl — Java-Fullstack Developer',
    title: 'MEYOGHE Melvine Joêl — Développeur Java-Fullstack React & Node.js',
    description:
      'Portfolio de MEYOGHE Melvine Joêl, développeur Java-Fullstack spécialisé React, Next.js, NestJS et Docker.',
    images: [
      {
        url: '/og-image.png',   // 1200×630px dans /public
        width: 1200,
        height: 630,
        alt: 'MEYOGHE Melvine Joêl — Java-Fullstack Developer',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'MEYOGHE Melvine Joêl — Développeur Java-Fullstack',
    description: 'Portfolio Java-Fullstack — React, Next.js, NestJS, Docker.',
    images: ['/og-image.png'],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },

  // Icône
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
