export default {
  name: 'filterDescription',
  type: 'object',
  title: 'Filter description',
  fields: [
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      description: '(required field)',
      validation: (Rule) => Rule.error('The description is required').required(),
    },
    {
      name: 'price',
      type: 'string',
      title: 'Price',
      description: '(required field)',
      validation: (Rule) => Rule.error('The price is required').required(),
    },
  ],
}
