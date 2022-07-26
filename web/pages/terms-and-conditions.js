import Head from 'next/head'
import { Layout } from '~/components/Layout'
import { PolicyPage } from '~/scenes/pages/PolicyPage'
import client from '~/utils/sanity-client'
import React from 'react'

export const TermsAndConditions = ({ page }) => {
  console.log(page)

  return (
    <Layout>
      <Head>
        <title>{page.seoTitle}</title>
        <meta name="description" content={page.seoDescription} />
      </Head>
      <PolicyPage page={page} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const page = await client.fetch(`*[_type == 'termAndConditions'][0]`)
  return {
    props: {
      page,
    },
  }
}

export default TermsAndConditions
