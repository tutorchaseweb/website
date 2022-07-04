export default {
  name: 'tutor',
  type: 'document',
  title: 'Tutor',
  fieldsets: [
    { name: 'vettedTutor', title: 'Vetted Tutor' },
    { name: 'tutoringExperience', title: 'Tutoring Experience' },
    { name: 'tutoringApproach', title: 'Tutoring Approach' },
    { name: 'extracurricularActivities', title: 'Extracurricular Activities' },
  ],
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
        source: ({ name, _rev }) => `${name.replace(' ', '-')}-${_rev}`,
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
      name: 'vettedTitle',
      type: 'string',
      title: 'Title',
      fieldset: 'vettedTutor',
    },
    {
      name: 'vettedDescription',
      type: 'simpleContent',
      title: 'Description',
      fieldset: 'vettedTutor',
    },
    {
      name: 'tutoringExperience',
      type: 'simpleContent',
      title: 'Tutoring Experience',
      fieldset: 'tutoringExperience',
    },
    {
      name: 'tutoringApproach',
      type: 'simpleContent',
      title: 'Tutoring Approach',
      fieldset: 'tutoringApproach',
    },
    {
      name: 'extracurricularActivities',
      type: 'array',
      title: 'Extracurricular Activities',
      fieldset: 'extracurricularActivities',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
  ],
}
