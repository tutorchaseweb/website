export default {
  name: 'partOfSection',
  type: 'object',
  title: 'Universal part of a section',
  description: 'Image and title is required, other fields are optional',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Section image',
      description: '(is required)',
      validation: (Rule) => Rule.error('The image is required').required(),
    },
    {
      name: 'preTitle',
      type: 'string',
      title: 'Small text before title',
      description: '(optional)',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Section title',
      description: '(is required)',
      validation: (Rule) => Rule.error('The title is required').required(),
    },
    {
      name: 'description',
      type: 'simpleContent',
      title: 'Description',
      description: '(optional)',
    },
    {
      name: 'list',
      type: 'array',
      title: 'Ordered list',
      description: '(optional)',
      of: [{ type: 'string' }],
    },
    {
      name: 'button',
      type: 'button',
      title: 'Button',
      description: '(optional)',
    },
  ],
}
