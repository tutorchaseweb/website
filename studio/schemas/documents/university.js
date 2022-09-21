export default {
  name: 'university',
  type: 'document',
  title: 'University',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: '(required field)',
      validation: (Rule) => Rule.error('The title is required').required(),
    },
    {
      name: 'logo',
      type: 'image',
      title: 'University logo',
      description: '(required field)',
      validation: (Rule) => Rule.error('The logo is required').required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: '(optional field)',
    },
    {
      name: 'order',
      type: 'number',
      title: 'Order number',
    },
  ],
  orderings: [
    {
      title: 'Order',
      name: 'ordered',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
}
