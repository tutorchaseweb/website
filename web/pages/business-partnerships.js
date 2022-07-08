import Head from 'next/head'
import { Layout } from '~/components/Layout'
import { BusinessPartnershipsPage } from '~/scenes/pages/BusinessPartnerships'

export const BusinessPartnerships = () => {
  return (
    <Layout>
      <Head>
        <title>Business Partnerships</title>
      </Head>
      <BusinessPartnershipsPage />
    </Layout>
  )
}

export default BusinessPartnerships
