import Head from 'next/head'
import { Layout } from '~/components/Layout'
import { ALevelPage } from '~/scenes/pages/aLevel'

export const ALevel = () => {
  return (
    <Layout>
      <Head>
        <title>A-Level</title>
      </Head>
      <ALevelPage />
    </Layout>
  )
}

export default ALevel
