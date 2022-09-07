export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: '(required field)',
      validation: (Rule) => Rule.error('The name is required').required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: '(required field)',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.error('The slug is required').required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      description: '(required field)',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.error('The image is required').required(),
    },
    {
      name: 'bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
      title: 'Bio',
      description: '(optional field)',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
