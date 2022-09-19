export default {
  name: 'menuItem',
  type: 'object',
  title: 'Menu item',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Link name',
      description: '(required field)',
      validation: (Rule) => Rule.error('The name is required').required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: '(required field)',
      validation: (Rule) => Rule.error('The slug is required').required(),
    },
  ],
}
