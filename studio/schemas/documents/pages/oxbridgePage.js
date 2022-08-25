export default {
  name: 'oxbridge-page',
  type: 'document',
  title: 'Oxbridge page',
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
      title: 'First section on oxbridge page',
    },
    {
      name: 'blueCard',
      type: 'blueCard',
      title: 'Blue card on access page',
    },
    {
      name: 'reviewBlock',
      type: 'reviewBlock',
      title: 'Review block (one review)',
    },
  ],
}
