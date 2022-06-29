export default {
  name: 'tutor',
  type: 'document',
  title: 'Tutor',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Tutor name',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: ({ name, _rev }) => `${name.replace(' ', '-')}-${_rev}`,
        maxLength: 96,
      },
    },
    {
      name: 'position',
      type: 'string',
      title: 'Tutor position',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Intro description for preview and cards',
    },
    {
      name: 'teaches',
      type: 'array',
      title: 'Teaches',
      description: 'Add subjects taught by the tutor.',
      of: [{ type: 'reference', to: { type: 'subject' } }],
    },
    {
      name: 'levels',
      type: 'array',
      title: 'Levels',
      description: 'Add level of the tutor.',
      of: [{ type: 'reference', to: { type: 'level' } }],
    },
  ],
}
