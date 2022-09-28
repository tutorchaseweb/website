import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { OxbridgePage } from '~/scenes/pages/Oxbridge'
import MetaTags from '~/components/MetaTags'

export const Oxbridge = ({ data }) => {
  const { page, tutors } = data

  return (
    <Layout>
      <MetaTags title={page?.seoTitle} description={page?.seoDescription} />
      <OxbridgePage page={page} tutors={tutors} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const QUERY = groq`{
    'page': *[_type == 'oxbridge-page'][0] {
      ...,
      admissionsTests{
        ...,
        tests[] ->
      }
    },
    'tutors': *[_type == 'tutor' && !(_id in path("drafts.**")) && showOnOxbridge == true] {
      ...,
      'teaches': *[_type == 'subject' && references(^._id)] {
        _id,
        _createdAt,
        title,
        slug,
      },
    }
  }`
  const data = await client.fetch(QUERY)

  return {
    props: {
      data,
    },
  }
}

export default Oxbridge
