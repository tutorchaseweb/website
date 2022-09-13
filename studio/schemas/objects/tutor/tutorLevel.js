export default {
  name: 'tutorLevel',
  type: 'object',
  title: 'The tutor level',
  fields: [
    {
      name: 'tutor',
      type: 'reference',
      to: { type: 'tutor' },
      title: 'Tutor',
      description: '(required field)',
      validation: (Rule) => Rule.error('The tutor is required').required(),
    },
    {
      name: 'level',
      type: 'reference',
      to: { type: 'level' },
      title: 'Level',
      description: '(required field)',
      validation: (Rule) => Rule.error('The level is required').required(),
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
      title: 'tutor.name',
      subtitle: 'rating',
      media: 'tutor.image',
    },
  },
}
