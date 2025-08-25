/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://federicomatovelle.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
