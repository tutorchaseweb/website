export default {
  title: 'Block Content',
  name: 'simpleContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      marks: {
        decorators: [{ title: 'Strong', value: 'strong' }],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'link',
              },
            ],
          },
        ],
      },
    },
  ],
}
