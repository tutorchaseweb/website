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
      description: 'Title on first screen.',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Description on first screen.',
    },
    {
      name: 'postsPerPage',
      title: 'Number of posts per page',
      description:
        'Number of posts per page. If there are more posts than this number, page navigation will appear',
      type: 'number',
      initialValue: 6,
    },
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
  ],
}
