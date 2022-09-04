/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://tutorchase.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 1000,
}

export default config
