export default {
  name: 'blueCard',
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
      name: 'withButton',
      type: 'boolean',
      initialValue: false,
      title: 'Enable button',
      description: 'Enable this option to display the button on the card',
    },
  ],
}
