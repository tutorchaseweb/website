import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { AccessProgrammePage } from '~/scenes/pages'
import MetaTags from '~/components/MetaTags'

export const AccessProgramme = ({ page }) => {
  return (
    <Layout>
      <MetaTags title={page.seoTitle} description={page.seoDescription} />
      <AccessProgrammePage page={page} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const QUERY = groq`
    *[_type == 'access-page'][0] {
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

export default AccessProgramme
