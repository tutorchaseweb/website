export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fieldsets: [{ name: 'additional', title: 'Additional description' }],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'featured',
      title: 'Featured article',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'reading',
      title: 'Reading time',
      description: 'Estimated time to read the article (in minutes)',
      type: 'number',
      initialValue: 3,
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'description',
      type: 'simpleContent',
      title: 'Intro text',
      description: 'Short introductory text for cards and article page',
      validation: (Rule) => Rule.error('The description is required').required(),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'additionalTitle',
      type: 'string',
      title: 'Title',
      fieldset: 'additional',
    },
    {
      name: 'additionalDescription',
      type: 'simpleContent',
      title: 'Description',
      fieldset: 'additional',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
