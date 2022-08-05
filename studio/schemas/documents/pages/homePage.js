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
    {
      name: 'secondScreen',
      type: 'partOfSection',
      title: 'Second section on main page',
    },
    {
      name: 'studyCards',
      type: 'studyCards',
      title: 'Study cards on second section',
    },
    {
      name: 'reviewBlockFirst',
      type: 'reviewBlock',
      title: 'Review block (one review)',
    },
    {
      name: 'tutorsList',
      type: 'sectionHead',
      title: 'Tutors list on main page',
    },
    {
      name: 'fourthScreen',
      type: 'partOfSection',
      title: 'Second section on main page',
    },
    {
      name: 'reviewBlockSecond',
      type: 'reviewBlock',
      title: 'Review block (one review)',
    },
    {
      name: 'globallyTutoring',
      type: 'sectionHead',
      title: 'Trusted globally on main page',
    },
    {
      name: 'blueCard',
      type: 'blueCard',
      title: 'Blue card on main page',
    },
    {
      name: 'seventhScreen',
      type: 'partOfSection',
      title: 'Seventh section on main page',
    },
    {
      name: 'allReviewsBlock',
      type: 'sectionHead',
      title: 'All reviews block on main page',
    },
    {
      name: 'servicesBlock',
      type: 'servicesBlock',
      title: 'Services block on main page',
    },
  ],
}
