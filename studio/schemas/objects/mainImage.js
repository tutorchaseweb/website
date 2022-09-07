export default {
  name: 'mainImage',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'Will be show in miniature.',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessibility.',
      options: {
        isHighlighted: true,
      },
    },
  ],
  validation: (Rule) => Rule.error('Please, select image').required(),
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
  },
}
