import Head from 'next/head'
import { Layout } from '~/components/Layout'

export const TermsAndConditions = () => {
  return (
    <Layout>
      <Head>
        <title>Terms And Conditions</title>
      </Head>
      <section className="pt-20x">
        <div className="container">
          <h1>Terms And Conditions page</h1>
        </div>
      </section>
    </Layout>
  )
}

export default TermsAndConditions
