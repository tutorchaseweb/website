export default {
  name: 'firstScreen',
  type: 'object',
  title: 'First Screen',
  description: 'First screen of main page',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Section image',
      description: '(is required)',
      validation: (Rule) => Rule.error('The image is required').required(),
    },
    {
      name: 'title',
      type: 'simpleContent',
      title: 'Title',
      description: '(is required)',
      validation: (Rule) => Rule.error('The title is required').required(),
    },
    {
      name: 'description',
      type: 'simpleContent',
      title: 'Description',
      description: '(is required)',
      validation: (Rule) => Rule.error('The title is required').required(),
    },
    {
      name: 'universities',
      type: 'simpleContent',
      title: 'Universities description',
      description: '(is required)',
      validation: (Rule) => Rule.error('The title is required').required(),
    },
  ],
}
