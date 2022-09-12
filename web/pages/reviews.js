import Head from 'next/head'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { ReviewsPage } from '~/scenes/pages'

export const Reviews = ({ page }) => {
  return (
    <Layout>
      <Head>
        <title>{page.seoTitle}</title>
        <meta name="description" content={page.seoDescription} />
      </Head>
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
