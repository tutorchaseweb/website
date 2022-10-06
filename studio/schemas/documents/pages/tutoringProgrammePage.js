export default {
  name: 'tutoring-programme-page',
  type: 'document',
  title: 'National tutoring programme partner page',
  fieldsets: [{ name: 'seo', title: 'Fields for SEO' }],
  fields: [
    {
      name: 'firstScreen',
      type: 'pageHead',
      title: 'First section on tutors page',
    },
    {
      name: 'firstSection',
      type: 'smallSection',
      title: 'Small section on first screen',
    },
    {
      name: 'blueCard',
      type: 'blueCard',
      title: 'Blue card on tutors page',
    },
    {
      name: 'reviewBlock',
      type: 'reviewBlock',
      title: 'Review block (one review)',
    },
    {
      name: 'faqSection',
      type: 'faqSection',
      title: 'FAQ',
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
