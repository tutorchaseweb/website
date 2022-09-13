export default {
  name: 'reviewSection',
  type: 'document',
  title: 'Reviews',
  description: 'Reviews block',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of Review section',
    },
    {
      name: 'reviews',
      type: 'array',
      of: [{ type: 'reviewBlock' }],
      title: 'Review item',
      description: '(required field)',
      validation: (Rule) => Rule.error('The field is required').required(),
    },
  ],
}
