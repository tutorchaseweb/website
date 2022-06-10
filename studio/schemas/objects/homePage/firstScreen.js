export default {
  name: 'firstScreen',
  type: 'object',
  title: 'First Screen',
  description: 'First section on main page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'First section title',
      description: 'Titles should be catchy, descriptive, and not too long',
      // options: {
      //   maxLength: 40,
      // },
      // validation: (Rule) => Rule.error('Title is required').required(),
    },
  ],
}
