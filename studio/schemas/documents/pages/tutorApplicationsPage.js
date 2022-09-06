export default {
  name: 'applications-page',
  type: 'document',
  title: 'Tutor applications page',
  fieldsets: [{ name: 'seo', title: 'Fields for SEO' }],
  fields: [
    {
      name: 'title',
      type: 'simpleContent',
      title: 'Page title',
      description: 'Title on first screen.',
      validation: (Rule) => Rule.error('The title is required').required(),
    },
    {
      name: 'descriptionList',
      type: 'array',
      of: [{ type: 'string' }],
      title: 'Description list',
      description: 'Description on first screen (optional field)',
      validation: (Rule) => Rule.error('The description (list) is required').required(),
    },
    {
      name: 'secondScreenPartOne',
      type: 'partOfSection',
      title: 'Second section (part 1)',
    },
    {
      name: 'secondScreenPartTwo',
      type: 'partOfSection',
      title: 'Second section (part 2)',
    },
    {
      name: 'secondScreenPartThree',
      type: 'partOfSection',
      title: 'Second section (part 3)',
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
