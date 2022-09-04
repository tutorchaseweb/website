export default {
  name: 'faqGroup',
  type: 'object',
  title: 'FAQ group',
  fields: [
    {
      name: 'question',
      type: 'string',
      title: 'Question',
      description: '(required field)',
      validation: (Rule) => Rule.error('The question is required').required(),
    },
    {
      name: 'answer',
      type: 'simpleContent',
      title: 'Answer',
      description: '(required field)',
      validation: (Rule) => Rule.error('The answer is required').required(),
    },
  ],
}
