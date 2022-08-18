export default {
  name: 'custom-page',
  type: 'document',
  title: 'Custom page',
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
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'firstScreen',
      type: 'pageHeadImage',
      title: 'First section on oxbridge page',
    },
  ],
}
