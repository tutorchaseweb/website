export default {
  name: 'tutor',
  type: 'document',
  title: 'Tutor',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Tutor name',
    },
    {
      name: 'image',
      title: 'Tutor photo',
      type: 'image',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: ({ name }) => {
          const index = Math.floor(Math.random() * 100000)
          return `${name.replace(' ', '-')}-${index}`
        },
        maxLength: 96,
      },
    },
    {
      name: 'position',
      type: 'string',
      title: 'Tutor position',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Intro description for preview and cards',
    },
    {
      name: 'teaches',
      type: 'array',
      title: 'Teaches',
      description: 'Add subjects taught by the tutor.',
      of: [{ type: 'reference', to: { type: 'subject' } }],
    },
    {
      name: 'levels',
      type: 'array',
      title: 'Levels',
      description: 'Add level of the tutor.',
      of: [{ type: 'reference', to: { type: 'level' } }],
    },
    {
      name: 'universities',
      type: 'array',
      title: 'Universities',
      description: 'Add universities of the tutor.',
      of: [{ type: 'reference', to: { type: 'university' } }],
    },
    {
      name: 'education',
      title: 'Basic education',
      type: 'string',
    },
    {
      name: 'qualifications',
      type: 'array',
      title: 'Qualifications',
      of: [{ type: 'qualification' }],
    },
    {
      name: 'vettedDescription',
      type: 'simpleContent',
      title: 'Vetted tutor description',
    },
    {
      name: 'tutoringExperience',
      type: 'simpleContent',
      title: 'Tutoring Experience',
    },
    {
      name: 'tutoringApproach',
      type: 'simpleContent',
      title: 'Tutoring Approach',
    },
    {
      name: 'extracurricularActivities',
      type: 'array',
      title: 'Extracurricular Activities',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'elected',
      type: 'boolean',
      title: 'Elected',
      description: 'Enable this option to display the tutor on the main page',
      initialValue: false,
    },
    {
      name: 'sortingRating',
      title: 'Sorting rating',
      description:
        'Specify the rating of the teacher (from 1 to 100) to sort in the search results',
      type: 'number',
      initialValue: 1,
      validation: (Rule) => Rule.error('Enter a number from 1 to 100').min(1).max(100),
    },
  ],
}
