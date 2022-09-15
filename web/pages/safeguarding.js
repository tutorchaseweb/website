import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { PolicyPage } from '~/scenes/pages'
import MetaTags from '~/components/MetaTags'

export const Safeguarding = ({ page }) => {
  return (
    <Layout>
      <MetaTags title={page?.seoTitle} description={page?.seoDescription} />
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
