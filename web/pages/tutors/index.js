import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { TutorsPage } from '~/scenes/pages'
import MetaTags from '~/components/MetaTags'

export const Tutors = ({ page }) => {
  return (
    <Layout>
      <MetaTags title={page?.seoTitle} description={page?.seoDescription} />
      <TutorsPage page={page} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const QUERY = groq`
    *[_type == 'tutors-page'][0] {
      ...,
      tutorsSection {
        ...,
        tutorsList[]-> {
          ...,
          'teaches': *[_type == 'subject' && references(^._id)] {
            _id,
            _createdAt,
            title,
            slug,
          },
        }
      }
    }
  `
  const page = await client.fetch(QUERY)

  return {
    props: {
      page,
    },
  }
}

export default Tutors
