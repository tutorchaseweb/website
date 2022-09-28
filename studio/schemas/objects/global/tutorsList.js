export default {
  name: 'tutorsList',
  type: 'object',
  title: 'Head of any section',
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
      description: '(optional field)',
    },
    {
      name: 'tutorsList',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tutor' } }],
      title: 'Tutors List',
      description: 'Select the tutors you want to display in the list (optional field)',
    },
  ],
}
