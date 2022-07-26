import Head from 'next/head'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { PolicyPage } from '~/scenes/pages/PolicyPage'

export const Safeguarding = ({ page }) => {
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
  const page = await client.fetch(`*[_type == 'safeguardingPolicy'][0]`)
  return {
    props: {
      page,
    },
  }
}

export default Safeguarding
