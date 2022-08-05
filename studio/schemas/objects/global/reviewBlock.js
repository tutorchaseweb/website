export default {
  name: 'reviewBlock',
  type: 'object',
  title: 'Review block',
  fields: [
    {
      name: 'author',
      type: 'string',
      title: 'Reviewer',
      description: '(is required)',
      validation: (Rule) => Rule.error('The field is required').required(),
    },
    {
      name: 'position',
      type: 'string',
      title: 'Reviewer position',
      description: '(is required)',
      validation: (Rule) => Rule.error('The field is required').required(),
    },
    {
      name: 'content',
      type: 'simpleContent',
      title: 'Review content',
      description: '(is required)',
      validation: (Rule) => Rule.error('The field is required').required(),
    },
  ],
}
