export default {
  name: 'home-page',
  type: 'document',
  title: 'Home page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page title',
      description: 'Title for your site, search engines and social media.',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your site for search engines and social media.',
    },
    {
      name: 'firstScreen',
      type: 'firstScreen',
      title: 'First section on main page',
    },
  ],
}
