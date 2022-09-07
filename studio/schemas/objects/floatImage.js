export default {
  name: 'floatImage',
  type: 'image',
  title: 'Float image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: 'Put on the right? (default is on the left)',
      name: 'floatRight',
      type: 'boolean',
      initialValue: false,
    },
  ],
}
