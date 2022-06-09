import Head from 'next/head'
import { Layout } from '~/components/Layout'
import { MathsPage } from '~/scenes/pages/aLevel/MathsPage'

export const Maths = () => {
  return (
    <Layout>
      <Head>
        <title>Maths</title>
      </Head>
      <MathsPage />
    </Layout>
  )
}

export default Maths
