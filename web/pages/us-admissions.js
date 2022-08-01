import Head from 'next/head'
import { Layout } from '~/components/Layout'
import { RatedBlock } from '~/scenes/sections'

export const US_Admissions = () => {
  return (
    <Layout>
      <Head>
        <title>US Admissions</title>
      </Head>
      <section className="pt-20x">
        <div className="container">
          <h1 className="main-title mb-10x">US Admissions page</h1>
        </div>
        <RatedBlock />
      </section>
    </Layout>
  )
}

export default US_Admissions
