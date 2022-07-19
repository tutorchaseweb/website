export default {
  name: 'university',
  type: 'document',
  title: 'University',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'logo',
      title: 'University logo',
      type: 'image',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
  ],
}
