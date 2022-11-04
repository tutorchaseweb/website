export default {
  name: 'blueCardWithLogo',
  type: 'object',
  title: 'Head of any section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title for blue card',
      description: '(required field)',
      validation: (Rule) => Rule.error('The title is required').required(),
    },
    {
      name: 'description',
      type: 'simpleContent',
      title: 'Description for the blue card',
      description: '(optional field)',
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Blue card logo',
      description: '(required field)',
      validation: (Rule) => Rule.error('The logo is required').required(),
    },
  ],
}
