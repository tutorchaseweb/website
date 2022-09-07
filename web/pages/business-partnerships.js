import Head from 'next/head'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { BusinessPartnershipsPage } from '~/scenes/pages'

export const BusinessPartnerships = ({ page }) => {
  return (
    <Layout>
      <Head>
        <title>Business Partnerships</title>
      </Head>
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
