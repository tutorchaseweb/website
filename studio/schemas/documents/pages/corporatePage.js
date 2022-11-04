export default {
  name: 'corporate-page',
  type: 'document',
  title: 'Corporate page',
  fieldsets: [
    { name: 'seo', title: 'Fields for SEO' },
    { name: 'screen', title: 'Second screen' },
    { name: 'contacts', title: 'Section with contacts' },
  ],
  fields: [
    {
      name: 'firstScreen',
      type: 'pageHead',
      title: 'First section on tutors page',
    },
    {
      name: 'firstSection',
      type: 'smallSection',
      title: 'Small section on first screen',
    },
    {
      name: 'blueCard',
      type: 'blueCardWithLogo',
      title: 'Blue card on tutors page',
    },
    {
      name: 'secondScreenTitle',
      type: 'string',
      fieldset: 'screen',
      title: 'Section screen title',
      description: '(required field)',
      validation: (Rule) => Rule.error('The title is required').required(),
    },
    {
      name: 'secondScreenCards',
      type: 'array',
      fieldset: 'screen',
      of: [
        {
          name: 'secondScreenItem',
          type: 'object',
          title: 'Card with text and image',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Section image',
              description: '(required field)',
              validation: (Rule) => Rule.error('The image is required').required(),
            },
            {
              name: 'description',
              type: 'simpleContent',
              title: 'Description',
              description: '(optional field)',
            },
          ],
          preview: {
            select: {
              image: 'image.asset',
              blocks: 'description',
            },
            prepare({ image, blocks }) {
              const block = (blocks || []).find((block) => block._type === 'block')
              return {
                media: image,
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
      options: {
        layout: 'secondScreenCards',
      },
      title: 'Second screen cards',
      description: '(required field)',
      validation: (Rule) => Rule.error('The field is required').required().min(2),
    },
    {
      name: 'reviewBlock',
      type: 'reviewBlock',
      title: 'Review block (one review)',
    },
    {
      name: 'secondScreenPart',
      type: 'sectionWithList',
      title: 'Second section',
    },
    {
      name: 'faqSection',
      type: 'faqSection',
      title: 'FAQ',
    },
    {
      name: 'contactTitle',
      type: 'string',
      fieldset: 'contacts',
      title: 'Section title',
    },
    {
      name: 'contactDescription',
      type: 'text',
      fieldset: 'contacts',
      title: 'Section description',
    },
    {
      name: 'seoTitle',
      type: 'string',
      fieldset: 'seo',
      title: 'Page title',
      description: 'Title for your site, search engines and social media (required field).',
      validation: (Rule) => Rule.error('The title is required').required(),
    },
    {
      name: 'seoDescription',
      type: 'text',
      fieldset: 'seo',
      title: 'Description',
      description: 'Describe your site for search engines and social media (required field).',
      validation: (Rule) => Rule.error('The description is required').required(),
    },
  ],
}
