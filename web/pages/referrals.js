import Head from 'next/head'
import { Layout } from '~/components/Layout'

export const Referrals = () => {
  return (
    <Layout>
      <Head>
        <title>Referrals</title>
      </Head>
      <section className="pt-20x">
        <div className="container">
          <h1>Referrals page</h1>
        </div>
      </section>
    </Layout>
  )
}

export default Referrals
