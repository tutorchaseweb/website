import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { TutoringProgrammePage } from '~/scenes/pages'
import MetaTags from '~/components/MetaTags'

export const CorporateTutoring = ({ page }) => {
  return (
    <Layout>
      <MetaTags title={page?.seoTitle} description={page?.seoDescription} />
      <TutoringProgrammePage page={page} layout="corporate" />
    </Layout>
  )
}

export async function getServerSideProps() {
  const QUERY = groq`
    *[_type == 'corporate-page'][0] {
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

export default CorporateTutoring
