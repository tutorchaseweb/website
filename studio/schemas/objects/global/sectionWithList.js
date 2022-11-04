export default {
  name: 'sectionWithList',
  type: 'object',
  title: 'Universal part of a section',
  description: 'Image and title is required, other fields are optional',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Section image',
      description: '(required field)',
      validation: (Rule) => Rule.error('The image is required').required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Section title',
      description: '(required field)',
      validation: (Rule) => Rule.error('The title is required').required(),
    },
    {
      name: 'list',
      type: 'array',
      title: 'Ordered list',
      description: '(optional field)',
      of: [
        {
          title: 'Project Item',
          name: 'projectItem',
          type: 'object',
          fields: [
            {
              title: 'Content',
              name: 'content',
              type: 'blockContent',
            },
          ],
          preview: {
            select: {
              blocks: 'content',
            },
            prepare({ blocks }) {
              const block = (blocks || []).find((block) => block._type === 'block')
              return {
                title: block
                  ? block.children
                      .filter((child) => child._type === 'span')
                      .map((span) => span.text)
                      .join('')
                  : 'No title',
              }
            },
          },
        },
      ],
    },
  ],
}
