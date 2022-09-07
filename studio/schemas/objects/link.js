export default {
  title: 'Link',
  name: 'link',
  type: 'url',
  validation: (Rule) =>
    Rule.uri({
      scheme: ['http', 'https', 'mailto', 'tel'],
      allowRelative: true,
    }),
}
