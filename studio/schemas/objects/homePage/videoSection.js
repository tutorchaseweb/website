export default {
  name: 'videoSection',
  type: 'object',
  title: 'Universal part of a section',
  description: 'Image and title is required, other fields are optional',
  fields: [
    {
      name: 'file',
      type: 'file',
      title: 'Section file',
      description: '(required field)',
      validation: (Rule) => Rule.error('The file is required').required(),
    },
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
    {
      name: 'list',
      type: 'array',
      of: [{ type: 'string' }],
      title: 'Ordered list',
      description: '(optional field)',
    },
    {
      name: 'button',
      type: 'button',
      title: 'Button',
      description: '(optional field)',
    },
  ],
}
