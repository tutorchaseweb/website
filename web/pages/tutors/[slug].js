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

export async function getStaticPaths() {
  const paths = await client.fetch(`*[_type == 'tutor' && defined(slug.current)][].slug.current`)

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params
  const tutor = await client.fetch(
    `
    *[_type == 'tutor' && slug.current == $slug][0] {
      ...,
      levels[]->,
      teaches[]->,
      qualifications[] {
        ...,
        levels->
      },
      'reviews': *[_type == 'review' && references(^._id)]
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
