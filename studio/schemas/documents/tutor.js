export default {
  name: 'tutor',
  type: 'document',
  title: 'Tutor',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Tutor name',
      description: '(required field)',
      validation: (Rule) => Rule.error('The name is required').required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Tutor photo',
      description: '(required field)',
      validation: (Rule) => Rule.error('The image is required').required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: '(required field)',
      options: {
        source: ({ name }) => {
          const index = Math.floor(Math.random() * 100000)
          return `${name.replace(' ', '-')}-${index}`
        },
        maxLength: 96,
      },
      validation: (Rule) => Rule.error('The slug is required').required(),
    },
    {
      name: 'position',
      type: 'string',
      title: 'Tutor position',
      description: '(required field)',
      validation: (Rule) => Rule.error('The position is required').required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Intro description for preview and cards',
      description: '(required field)',
      validation: (Rule) => Rule.error('The description is required').required(),
    },
    {
      name: 'universities',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'university' } }],
      title: 'Universities',
      description: 'Add universities of the tutor (add at least one university).',
    },
    {
      name: 'education',
      type: 'string',
      title: 'Basic education',
      description: 'Indicate the name of the university and the faculty which is the main',
      validation: (Rule) => Rule.error('The education is required').required(),
    },
    {
      name: 'qualifications',
      type: 'array',
      of: [{ type: 'qualification' }],
      title: 'Qualifications',
      description:
        'Consists of pairs: name - value (for example "University of Oxford: BA Mathematics")',
      validation: (Rule) => Rule.error('The qualifications is required').required(),
    },
    {
      name: 'vettedDescription',
      type: 'simpleContent',
      title: 'Vetted tutor description',
      description: '(required field)',
      validation: (Rule) => Rule.error('The field is required').required(),
    },
    {
      name: 'tutoringExperience',
      type: 'simpleContent',
      title: 'Tutoring Experience',
      description: '(required field)',
      validation: (Rule) => Rule.error('The field is required').required(),
    },
    {
      name: 'tutoringApproach',
      type: 'simpleContent',
      title: 'Tutoring Approach',
      description: '(required field)',
      validation: (Rule) => Rule.error('The field is required').required(),
    },
    {
      name: 'extracurricularActivities',
      type: 'array',
      of: [{ type: 'string' }],
      title: 'Extracurricular Activities',
      description: '(required field)',
      options: {
        layout: 'tags',
      },
      validation: (Rule) => Rule.error('The field is required').required(),
    },
    {
      name: 'elected',
      type: 'boolean',
      title: 'Elected',
      description: 'Enable this option to display the tutor on the main page',
      initialValue: false,
    },
  ],
}
