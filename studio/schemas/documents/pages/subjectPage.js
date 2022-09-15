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
  const params = { level: level?._ref ?? '', subject: subject?._ref ?? '' }

  return sanityClient.fetch(query, params).then((data) => {
    const level = data.filter((item) => item._type === 'level')[0]
    const subject = data.filter((item) => item._type === 'subject')[0]

    const newSlug = `${level?.slug.current ?? ''}${
      level !== undefined && subject !== undefined ? '_' : ''
    }${subject?.slug.current ?? ''}`

    return newSlug
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
    },
    {
      name: 'subject',
      type: 'reference',
      to: { type: 'subject' },
      title: 'Subject',
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
        source: async ({ level, subject, title }) => {
          return (await (level || subject)) ? getUnitedSlug(level, subject) : title
        },
        maxLength: 96,
      },
      validation: (Rule) => Rule.error('Please select a level or subject for the page').required(),
    },
    {
      name: 'firstScreen',
      type: 'pageHead',
      title: 'First section on tutors page',
    },
    {
      name: 'filterDescription',
      type: 'filterDescription',
      title: 'Filter description and price per hour',
    },
    {
      name: 'tutorsSection',
      type: 'sectionHead',
      title: 'Tutors list section head',
    },
    {
      name: 'blueCard',
      type: 'blueCard',
      title: 'Blue card on tutors page',
    },
    {
      name: 'interactivePlatform',
      type: 'sectionHead',
      title: 'Interactive platform content',
    },
    {
      name: 'reviewBlock',
      type: 'reviewBlock',
      title: 'Review block (one review)',
    },
    {
      name: 'faqSection',
      type: 'faqSection',
      title: 'FAQ',
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
