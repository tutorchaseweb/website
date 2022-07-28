import Head from 'next/head'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { PolicyPage } from '~/scenes/pages/PolicyPage'

export const TermsAndConditions = ({ page }) => {
  return (
    <Layout>
      <Head>
        <title>{page?.seoTitle ? page.seoTitle : 'Terms and Conditions'}</title>
        <meta
          name="description"
          content={page?.seoDescription ? page.seoDescription : 'Terms and Conditions'}
        />
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
