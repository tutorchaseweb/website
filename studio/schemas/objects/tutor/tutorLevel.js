export default {
  name: 'tutorLevel',
  type: 'object',
  title: 'The tutor level',
  fields: [
    {
      name: 'tutor',
      title: 'Tutor',
      type: 'reference',
      to: { type: 'tutor' },
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
      title: 'tutor.name',
      subtitle: 'rating',
      media: 'tutor.image',
    },
  },
}
