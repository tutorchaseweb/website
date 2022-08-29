export default {
  name: 'faqGroup',
  type: 'object',
  title: 'FAQ group',
  fields: [
    {
      name: 'question',
      type: 'string',
      title: 'Question',
      description: '(is required)',
      validation: (Rule) => Rule.error('The field is required').required(),
    },
    {
      name: 'answer',
      type: 'simpleContent',
      title: 'Answer',
      description: '(is required)',
      validation: (Rule) => Rule.error('The field is required').required(),
    },
  ],
}
