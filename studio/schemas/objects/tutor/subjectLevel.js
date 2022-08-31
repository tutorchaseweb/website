export default {
  name: 'subjectLevel',
  type: 'object',
  title: 'The subject level',
  fields: [
    {
      name: 'subject',
      title: 'Subject',
      type: 'reference',
      to: { type: 'subject' },
    },
    {
      name: 'rating',
      title: 'Rating',
      description: 'Set rating for this subject (from 1 to 100)',
      type: 'number',
      initialValue: 1,
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
