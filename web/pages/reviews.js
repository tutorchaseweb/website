import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { ReviewsPage } from '~/scenes/pages'
import MetaTags from '~/components/MetaTags'

export const Reviews = ({ page }) => {
  return (
    <Layout>
      <MetaTags title={page.seoTitle} description={page.seoDescription} />
      <ReviewsPage page={page} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const QUERY = groq`
    *[_type == 'reviews-page'][0] {
      ...,
    }
  `
  const page = await client.fetch(QUERY)

  return {
    props: {
      page,
    },
  }
}

export default Reviews
