import Head from 'next/head'
import { Layout } from '~/components/Layout'

export const PrivacyPolicy = () => {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <section className="pt-20x">
        <div className="container">
          <h1>Privacy Policy page</h1>
        </div>
      </section>
    </Layout>
  )
}

export default PrivacyPolicy
