export default {
  name: 'us-admissions-page',
  type: 'document',
  title: 'US Admissions page',
  fieldsets: [{ name: 'seo', title: 'Fields for SEO' }],
  fields: [
    {
      name: 'seoTitle',
      type: 'string',
      title: 'Page title',
      description: 'Title for your site, search engines and social media.',
      fieldset: 'seo',
    },
    {
      name: 'seoDescription',
      type: 'text',
      title: 'Description',
      description: 'Describe your site for search engines and social media.',
      fieldset: 'seo',
    },
    {
      name: 'firstScreen',
      type: 'pageHeadImage',
      title: 'First section on US admissions page',
    },
  ],
}
