export default {
  name: 'reviewBlock',
  type: 'object',
  title: 'Review block',
  fields: [
    {
      name: 'author',
      type: 'string',
      title: 'Author',
      description: 'Review author (optional field)',
    },
    {
      name: 'position',
      type: 'string',
      title: 'Reviewer position',
      description: 'Author position (student, parent of student, etc...) optional field',
    },
    {
      name: 'content',
      type: 'simpleContent',
      title: 'Review content',
      description: '(required field)',
      validation: (Rule) => Rule.error('The content is required').required(),
    },
  ],
}
