export default {
  name: 'partnerships-page',
  type: 'document',
  title: 'Business Partnerships page',
  fieldsets: [{ name: 'seo', title: 'Fields for SEO' }],
  fields: [
    {
      name: 'firstScreen',
      type: 'pageHead',
      title: 'First section on partnerships page',
    },
    {
      name: 'secondScreen',
      type: 'sectionHead',
      title: 'Head of second section',
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
      name: 'blueCard',
      type: 'blueCard',
      title: 'Blue card on partnerships page',
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
