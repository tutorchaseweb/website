export default {
  name: 'tutors-page',
  type: 'document',
  title: 'Tutors page',
  fieldsets: [{ name: 'seo', title: 'Fields for SEO' }],
  fields: [
    {
      name: 'firstScreen',
      type: 'pageHead',
      title: 'First section on tutors page',
    },
    {
      name: 'filterDescription',
      type: 'filterDescription',
      title: 'Filter description and price per hour',
    },
    {
      name: 'tutorsSection',
      type: 'tutorsList',
      title: 'Tutors list section',
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
