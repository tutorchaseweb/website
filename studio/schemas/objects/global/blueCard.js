export default {
  name: 'blueCard',
  type: 'object',
  title: 'Head of any section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title for blue card',
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
      name: 'withButton',
      type: 'boolean',
      title: 'Enable button',
      description: 'Enable this option to display the button on the card',
      initialValue: false,
    },
  ],
}
