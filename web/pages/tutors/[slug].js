import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { TutorPage } from '~/scenes/pages/Tutors/OneTutor'
import MetaTags from '~/components/MetaTags'

export const Post = ({ tutor }) => {
  return (
    <Layout>
      <MetaTags title={tutor?.seoTitle ?? tutor?.name} description={tutor?.seoDescription} />
      <TutorPage tutor={tutor} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { slug = '' } = context.params
  const tutor = await client.fetch(
    `
    *[_type == 'tutor' && slug.current == $slug][0] {
      ...,
      'teaches': *[_type == 'subject' && references(^._id)] {
        _id,
        _createdAt,
        title,
        slug,
      },
      'reviews': {
        'title': tutoringReviews.title,
        'list': tutoringReviews.reviews,
      }
    }
  `,
    { slug }
  )

  return {
    props: {
      tutor,
    },
  }
}

export default Post
