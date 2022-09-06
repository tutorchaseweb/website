export default {
  name: 'custom-page',
  type: 'document',
  title: 'Custom page',
  fieldsets: [{ name: 'seo', title: 'Fields for SEO' }],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: '(required field)',
      validation: (Rule) => Rule.error('The title is required').required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: '(required field)',
      validation: (Rule) => Rule.error('The slug is required').required(),
    },
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
      name: 'firstSection',
      type: 'smallSection',
      title: 'Small section on first screen',
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
      name: 'secondScreenPartThree',
      type: 'partOfSection',
      title: 'Second section (part 3)',
    },
    {
      name: 'admissionsTests',
      type: 'admissionsTests',
      title: 'Admissions Tests',
    },
    {
      name: 'tutorsSection',
      type: 'sectionHead',
      title: 'Tutors list section head',
    },
    {
      name: 'blueCard',
      type: 'blueCard',
      title: 'Blue card on access page',
    },
    {
      name: 'interactivePlatform',
      type: 'sectionHead',
      title: 'Interactive platform content',
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
