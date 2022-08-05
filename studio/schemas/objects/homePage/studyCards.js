export default {
  name: 'studyCards',
  type: 'object',
  title: 'First Screen',
  fields: [
    {
      name: 'firstTitle',
      type: 'string',
      title: 'Title for first card',
      description: '(is required)',
      validation: (Rule) => Rule.error('The title is required').required(),
    },
    {
      name: 'firstDescription',
      type: 'text',
      title: 'Description for first card',
      description: '(is required)',
      validation: (Rule) => Rule.error('The description is required').required(),
    },
    {
      name: 'secondTitle',
      type: 'string',
      title: 'Title for second card',
      description: '(is required)',
      validation: (Rule) => Rule.error('The title is required').required(),
    },
    {
      name: 'secondDescription',
      type: 'text',
      title: 'Description for second card',
      description: '(is required)',
      validation: (Rule) => Rule.error('The description is required').required(),
    },
    {
      name: 'thirdTitle',
      type: 'string',
      title: 'Title for third card',
      description: '(is required)',
      validation: (Rule) => Rule.error('The title is required').required(),
    },
    {
      name: 'thirdDescription',
      type: 'text',
      title: 'Description for third card',
      description: '(is required)',
      validation: (Rule) => Rule.error('The description is required').required(),
    },
    {
      name: 'thirdCardTags',
      type: 'array',
      title: 'Third card tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
  ],
}
