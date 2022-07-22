import Head from 'next/head'
import { Layout } from '~/components/Layout'
import { OxbridgePage } from '~/scenes/pages/Oxbridge'

export const Oxbridge = () => {
  return (
    <Layout>
      <Head>
        <title>Oxbridge</title>
      </Head>
      <OxbridgePage />
    </Layout>
  )
}

export default Oxbridge
