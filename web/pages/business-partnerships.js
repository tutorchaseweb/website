import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { BusinessPartnershipsPage } from '~/scenes/pages'
import MetaTags from '~/components/MetaTags'

export const BusinessPartnerships = ({ page }) => {
  return (
    <Layout>
      <MetaTags title={page.seoTitle} description={page.seoDescription} />
      <BusinessPartnershipsPage page={page} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const QUERY = groq`
    *[_type == 'partnerships-page'][0] {
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

export default BusinessPartnerships
