export default {
  name: 'review',
  type: 'document',
  title: 'Review',
  description: 'Student reviews about teachers',
  fields: [
    {
      name: 'reviewBlock',
      type: 'reviewBlock',
      title: 'Review fields',
    },
    {
      name: 'tutor',
      type: 'reference',
      to: { type: 'tutor' },
      title: 'Tutor',
      description: 'Select the teacher to whom this review applies (optional field)',
    },
  ],
  preview: {
    select: {
      title: 'reviewBlock.author',
      subtitle: 'reviewBlock.position',
    },
  },
}
