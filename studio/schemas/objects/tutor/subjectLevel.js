export default {
  name: 'subjectLevel',
  type: 'object',
  title: 'The subject level',
  fields: [
    {
      name: 'subject',
      type: 'reference',
      to: { type: 'subject' },
      title: 'Subject',
      description: '(required field)',
      validation: (Rule) => Rule.error('The subject is required').required(),
    },
    {
      name: 'rating',
      type: 'number',
      initialValue: 1,
      title: 'Rating',
      description: 'Set rating for this subject (from 1 to 100)',
      validation: (Rule) => Rule.required().error('Enter a number from 1 to 100').min(1).max(100),
    },
  ],
  preview: {
    select: {
      title: 'subject.title',
      subtitle: 'rating',
    },
  },
}
