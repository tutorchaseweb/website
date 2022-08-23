export default {
  name: 'access-page',
  type: 'document',
  title: 'Access Programme page',
  fieldsets: [{ name: 'seo', title: 'Fields for SEO' }],
  fields: [
    {
      name: 'seoTitle',
      type: 'string',
      title: 'Page title',
      description: 'Title for your site, search engines and social media.',
      fieldset: 'seo',
    },
    {
      name: 'seoDescription',
      type: 'text',
      title: 'Description',
      description: 'Describe your site for search engines and social media.',
      fieldset: 'seo',
    },
    {
      name: 'firstScreen',
      type: 'pageHead',
      title: 'First section on access page',
    },
    {
      name: 'secondScreen',
      type: 'sectionHead',
      title: 'Head of second section',
    },
    {
      name: 'secondScreenPartOne',
      type: 'partOfSection',
      title: 'Second section (part 1)',
    },
    {
      name: 'secondScreenPartTwo',
      type: 'partOfSection',
      title: 'Second section (part 2)',
    },
    {
      name: 'secondScreenPartThree',
      type: 'partOfSection',
      title: 'Second section (part 3)',
    },
    {
      name: 'blueCard',
      type: 'blueCard',
      title: 'Blue card on access page',
    },
    {
      name: 'lastScreen',
      type: 'partOfSection',
      title: 'Last section',
    },
  ],
}
