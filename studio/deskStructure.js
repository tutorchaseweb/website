import S from '@sanity/desk-tool/structure-builder'
import {
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlineUser,
  BsBook,
  BsBarChart,
  BsGear,
  BsJournalBookmark,
  BsStarHalf,
  FaUniversity,
  FaWpforms,
  GiTeacher,
  IoAppsOutline,
  IoNewspaperOutline,
  IoSchoolOutline,
  MdOutlineFormatListNumbered,
  MdOutlinePolicy,
  IoIosPeople,
  ImBooks,
  SiOpenaccess,
  FaHandshake,
  IoIosSchool,
  CgTemplate,
  BiCodeBlock,
  FaQuestionCircle,
} from 'react-icons/all'

// We filter document types defined in structure to prevent them from being listed twice
const hiddenDocTypes = (listItem) =>
  ![
    'site-config',
    'custom-page',
    'access-page',
    'home-page',
    'oxbridge-page',
    'subject-page',
    'partnerships-page',
    'tutors-page',
    'admissions-page',
    'blog-page',
    'reviews-page',
    'applications-page',
    'category',
    'author',
    'post',
    'tutor',
    'review',
    'subject',
    'level',
    'test',
    'hireForm',
    'applyForm',
    'university',
    'termAndConditions',
    'privacyPolicy',
    'safeguardingPolicy',
    'faq',
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Posts')
        .icon(IoNewspaperOutline)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Post')),
      S.listItem()
        .title('Tutors')
        .icon(AiOutlineTeam)
        .schemaType('tutor')
        .child(S.documentTypeList('tutor').title('Tutor')),
      S.listItem()
        .title('Reviews')
        .icon(BsStarHalf)
        .schemaType('review')
        .child(S.documentTypeList('review').title('Review')),
      S.listItem()
        .title('Requests (forms)')
        .icon(FaWpforms)
        .child(
          S.list()
            .title('Choose the type')
            .items([
              S.listItem()
                .title('Hire a tutor queries')
                .icon(IoSchoolOutline)
                .child(S.documentTypeList('hireForm').title('Hire a tutor')),
              S.listItem()
                .title('Apply form for tutors')
                .icon(GiTeacher)
                .child(S.documentTypeList('applyForm').title('Apply form')),
            ])
        ),
      S.listItem()
        .title('Pages')
        .icon(BsBook)
        .child(
          S.list()
            .title('Site pages')
            .items([
              S.listItem()
                .title('Home page')
                .icon(AiOutlineHome)
                .child(S.document().schemaType('home-page').documentId('home-page')),
              S.listItem()
                .title('Tutors page')
                .icon(IoIosPeople)
                .child(S.document().schemaType('tutors-page').documentId('tutors-page')),
              S.listItem()
                .title('Oxbridge page')
                .icon(FaUniversity)
                .child(S.document().schemaType('oxbridge-page').documentId('oxbridge-page')),
              S.listItem()
                .title('US Admissions page')
                .icon(FaUniversity)
                .child(S.document().schemaType('admissions-page').documentId('admissions-page')),
              S.listItem()
                .title('Subject pages')
                .icon(IoIosSchool)
                .schemaType('subject-page')
                .child(S.documentTypeList('subject-page').title('Subject page')),
              S.listItem()
                .title('Reviews page')
                .icon(BsStarHalf)
                .child(S.document().schemaType('reviews-page').documentId('reviews-page')),
              S.listItem()
                .title('Access page')
                .icon(SiOpenaccess)
                .child(S.document().schemaType('access-page').documentId('access-page')),
              S.listItem()
                .title('Partnerships page')
                .icon(FaHandshake)
                .child(
                  S.document().schemaType('partnerships-page').documentId('partnerships-page')
                ),
              S.listItem()
                .title('Tutor applications page')
                .icon(BsBook)
                .child(
                  S.document().schemaType('applications-page').documentId('applications-page')
                ),
              S.listItem()
                .title('Blog page')
                .icon(IoNewspaperOutline)
                .child(S.document().schemaType('blog-page').documentId('blog-page')),
              S.listItem()
                .title('Terms and conditions')
                .icon(MdOutlinePolicy)
                .child(
                  S.document().schemaType('termAndConditions').documentId('termAndConditions')
                ),
              S.listItem()
                .title('Privacy policy')
                .icon(MdOutlinePolicy)
                .child(S.document().schemaType('privacyPolicy').documentId('privacyPolicy')),
              S.listItem()
                .title('Safeguarding policy')
                .icon(MdOutlinePolicy)
                .child(
                  S.document().schemaType('safeguardingPolicy').documentId('safeguardingPolicy')
                ),
              S.listItem()
                .title('Custom pages')
                .icon(CgTemplate)
                .schemaType('custom-page')
                .child(S.documentTypeList('custom-page').title('Custom page')),
            ])
        ),
      // S.listItem()
      //   .title('Sections')
      //   .icon(BiCodeBlock)
      //   .child(
      //     S.list()
      //       .title('Site sections')
      //       .items([
      //         S.listItem()
      //           .title('FAQ section')
      //           .icon(FaQuestionCircle)
      //           .child(S.document().schemaType('faq').documentId('faq')),
      //       ])
      //   ),
      S.listItem()
        .title('Subjects')
        .icon(BsJournalBookmark)
        .schemaType('subject')
        .child(S.documentTypeList('subject').title('Subject')),
      S.listItem()
        .title('Levels')
        .icon(BsBarChart)
        .schemaType('level')
        .child(S.documentTypeList('level').title('Level')),
      S.listItem()
        .title('Tests')
        .icon(MdOutlineFormatListNumbered)
        .schemaType('test')
        .child(S.documentTypeList('test').title('Test')),
      S.listItem()
        .title('Universities')
        .icon(FaUniversity)
        .schemaType('university')
        .child(S.documentTypeList('university').title('University')),
      S.listItem()
        .title('Categories')
        .icon(IoAppsOutline)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Category')),
      S.listItem()
        .title('Authors')
        .icon(AiOutlineUser)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Author')),
      S.listItem()
        .title('Site config')
        .icon(BsGear)
        .child(S.editor().id('config').schemaType('site-config').documentId('global-config')),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
