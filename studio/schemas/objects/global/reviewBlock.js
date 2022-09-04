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
      validation: (Rule) => Rule.error('The author is required').required(),
    },
    {
      name: 'position',
      type: 'string',
      title: 'Reviewer position',
      description: 'Author position (student, parent of student, etc...) optional field',
      validation: (Rule) => Rule.error('The position is required').required(),
    },
    {
      name: 'content',
      type: 'simpleContent',
      title: 'Review content',
      description: '(optional field)',
      validation: (Rule) => Rule.error('The content is required').required(),
    },
  ],
}
