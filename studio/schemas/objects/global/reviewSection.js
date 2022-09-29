export default {
  name: 'reviewSection',
  type: 'document',
  title: 'Reviews',
  description: 'Reviews block',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of Review section',
    },
    {
      name: 'reviews',
      type: 'array',
      of: [
        {
          name: 'reviewBlock',
          type: 'object',
          title: 'Review block',
          fields: [
            {
              name: 'author',
              type: 'string',
              title: 'Author',
              description: 'Review author (optional field)',
            },
            {
              name: 'content',
              type: 'simpleContent',
              title: 'Review content',
              description: '(required field)',
              validation: (Rule) => Rule.error('The content is required').required(),
            },
          ],
        },
      ],
      title: 'Review item',
      description: '(required field)',
      validation: (Rule) => Rule.error('The field is required').required(),
    },
  ],
}
