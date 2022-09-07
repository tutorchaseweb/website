export default {
  name: 'subject',
  type: 'document',
  title: 'Subject',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: '(required field)',
      validation: (Rule) => Rule.error('The title is required').required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: '(required field)',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.error('The slug is required').required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: '(optional field)',
    },
    {
      name: 'levels',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'level' } }],
      title: 'Levels',
      description: 'Add level of the subject (required field)',
      validation: (Rule) => Rule.error('The field is required').required(),
    },
    {
      name: 'tutors',
      type: 'array',
      of: [{ type: 'tutorLevel' }],
      title: 'Tutors',
      description: 'Add tutors by the subject (required field).',
      validation: (Rule) => Rule.error('The field is required').required(),
    },
  ],
}
