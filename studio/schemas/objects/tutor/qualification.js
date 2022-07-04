export default {
  name: 'qualification',
  type: 'object',
  title: 'Qualification',
  fields: [
    {
      name: 'university',
      type: 'string',
      title: 'University',
    },
    {
      name: 'specialized',
      type: 'string',
      title: 'University specialized',
    },
    {
      name: 'levels',
      type: 'reference',
      title: 'Levels',
      description: 'Add level of the tutor.',
      to: { type: 'level' },
    },
    {
      name: 'levelList',
      type: 'array',
      title: 'Level list',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'mat',
      type: 'string',
      title: 'MAT',
    },
  ],
}
