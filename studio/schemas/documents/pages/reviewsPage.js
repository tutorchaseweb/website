export default {
  name: 'reviews-page',
  type: 'document',
  title: 'Reviews page',
  fieldsets: [{ name: 'seo', title: 'Fields for SEO' }],
  fields: [
    {
      name: 'firstScreen',
      type: 'pageHead',
      title: 'First section on reviews page',
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
