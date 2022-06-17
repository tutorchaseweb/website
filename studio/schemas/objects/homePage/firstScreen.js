export default {
  name: 'firstScreen',
  type: 'object',
  title: 'First Screen',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'universities',
      type: 'simpleContent',
      title: 'Universities description',
    },
  ],
}
