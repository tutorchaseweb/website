export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fieldsets: [
    { name: 'additional', title: 'Additional description' },
    { name: 'seo', title: 'Fields for SEO' },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: '(required field)',
      validation: (Rule) => Rule.error('The title is required').required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: '(required field)',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.error('The slug is required').required(),
    },
    {
      name: 'featured',
      type: 'boolean',
      initialValue: false,
      title: 'Featured article',
    },
    {
      name: 'reading',
      type: 'number',
      initialValue: 3,
      title: 'Reading time',
      description: 'Estimated time to read the article (in minutes)',
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image',
      description: '(required field)',
      validation: (Rule) => Rule.error('The image is required').required(),
    },
    {
      name: 'author',
      type: 'reference',
      to: { type: 'author' },
      title: 'Author',
      description: '(optional field)',
    },
    {
      name: 'categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      title: 'Categories',
      description: '(optional field)',
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: '(required field)',
      validation: (Rule) => Rule.error('The field is required').required(),
    },
    {
      name: 'description',
      type: 'simpleContent',
      title: 'Intro text',
      description: 'Short introductory text for cards and article page (required field)',
      validation: (Rule) => Rule.error('The description is required').required(),
    },
    {
      name: 'body',
      type: 'blockContent',
      title: 'Body',
      description: '(required field)',
      validation: (Rule) => Rule.error('The content is required').required(),
    },
    {
      name: 'additionalTitle',
      type: 'string',
      fieldset: 'additional',
      title: 'Title',
      description: '(required field)',
      validation: (Rule) => Rule.error('The additional title is required').required(),
    },
    {
      name: 'additionalDescription',
      type: 'simpleContent',
      fieldset: 'additional',
      title: 'Description',
      description: '(required field)',
      validation: (Rule) => Rule.error('The additional description is required').required(),
    },
    {
      name: 'relatedPosts',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'post' } }],
      title: 'Related Posts',
      description: 'Choose from 1 to 3 related posts for this article (optional field)',
      validation: (Rule) => Rule.max(3),
    },
    {
      name: 'seoTitle',
      type: 'string',
      fieldset: 'seo',
      title: 'Page title',
      description: 'Title for your site, search engines and social media (required field).',
    },
    {
      name: 'seoDescription',
      type: 'text',
      fieldset: 'seo',
      title: 'Description',
      description: 'Describe your site for search engines and social media (required field).',
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
