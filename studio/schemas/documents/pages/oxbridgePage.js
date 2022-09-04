export default {
  name: 'oxbridge-page',
  type: 'document',
  title: 'Oxbridge page',
  fieldsets: [{ name: 'seo', title: 'Fields for SEO' }],
  fields: [
    {
      name: 'firstScreen',
      type: 'pageHeadImage',
      title: 'First section on oxbridge page',
    },
    {
      name: 'filterDescription',
      type: 'filterDescription',
      title: 'Filter description and price per hour',
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
    {
      name: 'seoTitle',
      type: 'string',
      fieldset: 'seo',
      title: 'Page title',
      description: 'Title for your site, search engines and social media (required field).',
      validation: (Rule) => Rule.error('The title is required').required(),
    },
    {
      name: 'seoDescription',
      type: 'text',
      fieldset: 'seo',
      title: 'Description',
      description: 'Describe your site for search engines and social media (required field).',
      validation: (Rule) => Rule.error('The description is required').required(),
    },
  ],
}
