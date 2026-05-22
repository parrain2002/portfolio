export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://ton-portfolio.vercel.app/sitemap.xml',
  };
}