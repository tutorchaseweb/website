export default {
  name: 'test',
  type: 'document',
  title: 'Test',
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
  ],
}
