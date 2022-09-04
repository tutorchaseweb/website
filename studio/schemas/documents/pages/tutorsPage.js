export default {
  name: 'tutors-page',
  type: 'document',
  title: 'Tutors page',
  fieldsets: [
    { name: 'seo', title: 'Fields for SEO' },
    { name: 'faq', title: 'Fields for FAQ' },
  ],
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
      name: 'firstSectionHead',
      type: 'sectionHead',
      title: 'First section head',
    },
    {
      name: 'blueCard',
      type: 'blueCard',
      title: 'Blue card on tutors page',
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
      name: 'servicesBlock',
      type: 'servicesBlock',
      title: 'Our services block',
    },
    {
      name: 'faqSectionHead',
      type: 'sectionHead',
      fieldset: 'faq',
      title: 'FAQ section head',
    },
    {
      name: 'faqQuestions',
      type: 'array',
      of: [{ type: 'faqGroup' }],
      fieldset: 'faq',
      title: 'Questions/answers',
      description: '(required field)',
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
