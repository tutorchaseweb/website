export default {
  title: 'Block Content',
  name: 'simpleContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
  ],
}
