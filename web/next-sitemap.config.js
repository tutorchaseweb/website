const siteUrl = process.env.NEXT_PUBLIC_BASE_URL
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ['/sitemap', '/404', '/tutor-submission', '/form-submission'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/404'],
      },
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`, `${siteUrl}/server-sitemap.xml`],
  },
}
