export default {
  name: 'smallSection',
  type: 'object',
  title: 'Small section',
  description: 'Image and title is required, other fields are optional',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Section image',
      description: '(required field)',
      validation: (Rule) => Rule.error('The image is required').required(),
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
      description: '(required field)',
      validation: (Rule) => Rule.error('The description is required').required(),
    },
  ],
}
