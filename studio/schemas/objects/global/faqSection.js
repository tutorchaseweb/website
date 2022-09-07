export default {
  name: 'faqSection',
  type: 'document',
  title: 'FAQ',
  description: 'FAQ block',
  fields: [
    {
      name: 'sectionHead',
      type: 'sectionHead',
      title: 'Head of FAQ section',
    },
    {
      name: 'questions',
      type: 'array',
      of: [{ type: 'faqGroup' }],
      title: 'Questions/answers',
      description: '(required field)',
      validation: (Rule) => Rule.error('The field is required').required(),
    },
  ],
}
