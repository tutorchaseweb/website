export default {
  name: 'blog-page',
  type: 'document',
  title: 'Blog page',
  fieldsets: [{ name: 'seo', title: 'Fields for SEO' }],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page title',
      description: 'Title on first screen (required field).',
      validation: (Rule) => Rule.error('The title is required').required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Description on first screen (required field).',
      validation: (Rule) => Rule.error('The description is required').required(),
    },
    {
      name: 'postsPerPage',
      type: 'number',
      initialValue: 6,
      title: 'Number of posts per page',
      description:
        'Number of posts per page. If there are more posts than this number, page navigation will appear',
      validation: (Rule) => Rule.error('The field is required').required(),
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
