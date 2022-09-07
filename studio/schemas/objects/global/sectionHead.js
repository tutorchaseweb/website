export default {
  name: 'sectionHead',
  type: 'object',
  title: 'Head of any section',
  fields: [
    {
      name: 'preTitle',
      type: 'string',
      title: 'Small text before title',
      description: '(optional field)',
    },
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
      description: '(optional field)',
    },
  ],
}
