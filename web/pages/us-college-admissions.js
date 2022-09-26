import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { OxbridgePage } from '~/scenes/pages'
import MetaTags from '~/components/MetaTags'

export const US_Admissions = ({ data }) => {
  const { page, tutors } = data

  return (
    <Layout>
      <MetaTags title={page.seoTitle} description={page.seoDescription} />
      <OxbridgePage page={page} tutors={tutors} type="admissions-page" />
    </Layout>
  )
}

export async function getServerSideProps() {
  const QUERY = groq`{
    'page': *[_type == 'admissions-page'][0] {
      ...,
      admissionsTests{
        ...,
        tests[] ->
      }
    },
    'tutors': *[_type == 'tutor' && !(_id in path("drafts.**")) && showOnAdmissions==true]
  }`
  const data = await client.fetch(QUERY)

  return {
    props: {
      data,
    },
  }
}

export default US_Admissions
