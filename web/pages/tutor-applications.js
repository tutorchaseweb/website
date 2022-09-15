import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { TutorApplicationsPage } from '~/scenes/pages'
import MetaTags from '~/components/MetaTags'

export const TutorApplications = ({ page }) => {
  const { seoTitle, seoDescription } = page || {}

  return (
    <Layout>
      <MetaTags title={seoTitle} description={seoDescription} />
      <TutorApplicationsPage page={page} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const QUERY = groq`
    *[_type == 'applications-page'][0] {
      ...,
    }
  `
  const page = await client.fetch(QUERY)

  return {
    props: {
      page,
    },
  }
}

export default TutorApplications
