export default {
  name: 'subject',
  type: 'document',
  title: 'Subject',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'levels',
      type: 'array',
      title: 'Levels',
      description: 'Add level of the subject',
      of: [{ type: 'reference', to: { type: 'level' } }],
    },
    {
      name: 'tutors',
      type: 'array',
      title: 'Tutors',
      description: 'Add tutors by the subject.',
      of: [{ type: 'tutorLevel' }],
    },
  ],
}
