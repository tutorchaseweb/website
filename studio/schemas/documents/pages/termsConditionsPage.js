export default {
  name: 'termAndConditions',
  type: 'document',
  title: 'Terms and conditions page',
  fieldsets: [{ name: 'seo', title: 'Fields for SEO' }],
  fields: [
    {
      name: 'title',
      type: 'simpleContent',
      title: 'Page title',
      description: "Title on page head (highlight text as code <> so it's blue, required field).",
      validation: (Rule) => Rule.error('The title is required').required(),
    },
    {
      name: 'content',
      type: 'blockContent',
      title: 'Content',
      description: '(required field)',
      validation: (Rule) => Rule.error('The content is required').required(),
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
