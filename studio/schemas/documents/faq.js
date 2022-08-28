export default {
  name: 'faq',
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
      title: 'Questions/answers',
      of: [{ type: 'faqGroup' }],
    },
  ],
}
