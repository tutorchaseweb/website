export default {
  name: 'site-config',
  type: 'document',
  title: 'Site configuration',
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  __experimental_actions: ['create', 'delete', 'update', 'publish'],
  fieldsets: [
    { name: 'contacts', title: 'Contacts' },
    { name: 'footerMenu', title: 'Footer Menus' },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site title',
      description: '(required field)',
      validation: (Rule) => Rule.error('The title is required').required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your site for search engines and social media (required field)',
      validation: (Rule) => Rule.error('The description is required').required(),
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      description: 'The main site url. Used to create canonical url (required field)',
      validation: (Rule) => Rule.error('The url is required').required(),
    },
    {
      name: 'keywords',
      type: 'array',
      of: [{ type: 'string' }],
      title: 'Keywords',
      description: 'Add keywords that describes your site.',
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'logo',
      type: 'logo',
      title: 'Brand logo',
      description:
        'Best choice is to use an SVG where the color are set with currentColor (required field)',
      validation: (Rule) => Rule.error('The logo is required').required(),
    },
    {
      name: 'primaryPhone',
      type: 'string',
      fieldset: 'contacts',
      title: 'Primary phone',
      description: '(required field)',
      validation: (Rule) => Rule.error('The phone is required').required(),
    },
    {
      name: 'secondaryPhone',
      type: 'string',
      fieldset: 'contacts',
      title: 'Secondary phone',
      description: '(required field)',
      validation: (Rule) => Rule.error('The phone is required').required(),
    },
    {
      name: 'email',
      type: 'string',
      fieldset: 'contacts',
      title: 'Email',
      description: '(required field)',
      validation: (Rule) => Rule.error('The email is required').required(),
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
      fieldset: 'contacts',
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'url',
      fieldset: 'contacts',
    },
    {
      name: 'linkedIn',
      title: 'LinkedIn',
      type: 'url',
      fieldset: 'contacts',
    },
    {
      name: 'companyMenu',
      type: 'array',
      of: [{ type: 'menuItem' }],
      title: 'Company Information Menu',
      fieldset: 'footerMenu',
      description: '(required field)',
      validation: (Rule) => Rule.error('Add menu items').min(2),
    },
    {
      name: 'coursesMenu',
      type: 'array',
      of: [{ type: 'menuItem' }],
      title: 'Courses Information Menu',
      fieldset: 'footerMenu',
      description: '(required field)',
      validation: (Rule) => Rule.error('Add menu items').min(2),
    },
  ],
}
