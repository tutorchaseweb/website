export default {
  name: 'admissionsTests',
  type: 'object',
  title: 'Admissions Tests',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section title',
      description: '(required field)',
      validation: (Rule) => Rule.error('The title is required').required(),
    },
    {
      name: 'description',
      type: 'simpleContent',
      title: 'Description',
      description: '(required field)',
      validation: (Rule) => Rule.error('The description is required').required(),
    },
    {
      name: 'tests',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'subject' }, { type: 'test' }] }],
      title: 'Tests',
      description: '(required field)',
      validation: (Rule) => Rule.error('The tests is required').required(),
    },
  ],
}
