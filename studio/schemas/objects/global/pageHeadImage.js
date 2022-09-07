export default {
  name: 'pageHeadImage',
  type: 'object',
  title: 'First Screen',
  description: 'First screen of page',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Section image',
      description: '(required field)',
      validation: (Rule) => Rule.error('The image is required').required(),
    },
    {
      name: 'title',
      type: 'simpleContent',
      title: 'Title',
      description: '(required field)',
      validation: (Rule) => Rule.error('The title is required').required(),
    },
    {
      name: 'description',
      type: 'simpleContent',
      title: 'Description',
      description: '(required field)',
      validation: (Rule) => Rule.error('The description is required').required(),
    },
    {
      name: 'withButton',
      type: 'boolean',
      initialValue: false,
      title: 'Enable button',
      description: 'Enable this option to display "Hire a Tutor" button',
    },
  ],
}
