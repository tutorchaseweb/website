import Head from 'next/head'
import { Layout } from '~/components/Layout'

export const US_Admissions = () => {
  return (
    <Layout>
      <Head>
        <title>US Admissions</title>
      </Head>
      <section className="pt-20x">
        <div className="container">
          <h1>US Admissions page</h1>
        </div>
      </section>
    </Layout>
  )
}

export default US_Admissions
