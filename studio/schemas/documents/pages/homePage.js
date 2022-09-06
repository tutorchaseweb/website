export default {
  name: 'home-page',
  type: 'document',
  title: 'Home page',
  fieldsets: [{ name: 'seo', title: 'Fields for SEO' }],
  fields: [
    {
      name: 'firstScreen',
      type: 'firstScreen',
      title: 'First section on main page',
    },
    {
      name: 'secondScreen',
      type: 'partOfSection',
      title: 'Second section on main page',
    },
    {
      name: 'studyCards',
      type: 'studyCards',
      title: 'Study cards on second section',
    },
    {
      name: 'reviewBlockFirst',
      type: 'reviewBlock',
      title: 'Review block (one review)',
    },
    {
      name: 'tutorsList',
      type: 'sectionHead',
      title: 'Tutors list on main page',
    },
    {
      name: 'fourthScreen',
      type: 'partOfSection',
      title: 'Second section on main page',
    },
    {
      name: 'reviewBlockSecond',
      type: 'reviewBlock',
      title: 'Review block (one review)',
    },
    {
      name: 'globallyTutoring',
      type: 'sectionHead',
      title: 'Trusted globally on main page',
    },
    {
      name: 'blueCard',
      type: 'blueCard',
      title: 'Blue card on main page',
    },
    {
      name: 'interactivePlatform',
      type: 'sectionHead',
      title: 'Seventh section on main page',
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
