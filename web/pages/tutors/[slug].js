import Head from 'next/head'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { TutorPage } from '~/scenes/pages/Tutors/OneTutor'

export const Post = ({ tutor }) => {
  return (
    <Layout>
      <Head>
        <title>{tutor?.name}</title>
      </Head>
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
