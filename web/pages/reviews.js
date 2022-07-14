import Head from 'next/head'
import { Layout } from '~/components/Layout'
import { ReviewsPage } from '~/scenes/pages/Reviews'

export const Reviews = () => {
  return (
    <Layout>
      <Head>
        <title>Reviews</title>
      </Head>
      <ReviewsPage />
    </Layout>
  )
}

export default Reviews
