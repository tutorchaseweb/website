import sanityClient from 'part:@sanity/base/client'

function getUnitedSlug(level, subject) {
  const query = `
    *[_type in ['level', 'subject']] {
      _type == 'level' && _id == $level && !(_id in path("drafts.**")) => {
        ...,
      },
      _type == 'subject' && _id == $subject && !(_id in path("drafts.**")) => {
        ...,
      },
    }
  `
  const params = { level: level._ref, subject: subject._ref }
  return sanityClient.fetch(query, params).then((data) => {
    const level = data.filter((item) => item._type === 'level')[0]
    const subject = data.filter((item) => item._type === 'subject')[0]
    return `${level.slug.current}_${subject.slug.current}`
  })
}

export default {
  name: 'subject-page',
  type: 'document',
  title: 'Subject or level page',
  fieldsets: [{ name: 'seo', title: 'Fields for SEO' }],
  fields: [
    {
      name: 'level',
      type: 'reference',
      to: { type: 'level' },
      title: 'Level',
      description: '(required field)',
      validation: (Rule) => Rule.error('The level is required').required(),
    },
    {
      name: 'subject',
      type: 'reference',
      to: { type: 'subject' },
      title: 'Subject',
      description: '(required field)',
      validation: (Rule) => Rule.error('The subject is required').required(),
    },
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
      description: 'Click "Generate" button (required field)',
      options: {
        source: async ({ level, subject }) => {
          return await getUnitedSlug(level, subject)
        },
        maxLength: 96,
      },
      validation: (Rule) => Rule.error('The slug is required').required(),
    },
    {
      name: 'firstScreen',
      type: 'pageHeadImage',
      title: 'First section on page',
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
