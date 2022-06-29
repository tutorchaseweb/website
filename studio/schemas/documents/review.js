export default {
  name: 'review',
  type: 'document',
  title: 'Review',
  description: 'Student reviews about teachers',
  fields: [
    {
      name: 'author',
      type: 'string',
      title: 'Author',
      description: 'Review author',
    },
    {
      name: 'position',
      type: 'string',
      title: 'Position',
      description: 'Author position (student, parent of student, etc...)',
    },
    {
      name: 'content',
      type: 'text',
      title: 'Content (review)',
    },
    {
      name: 'tutor',
      title: 'Tutor',
      type: 'reference',
      to: { type: 'tutor' },
    },
  ],
}
