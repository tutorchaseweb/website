import Head from 'next/head'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { HomePage } from '~/scenes/pages'

export const Home = ({ page }) => {
  return (
    <Layout>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <meta property="og:title" content={page.title} key="title" />
        <meta property="og:description" content={page.description} key="description" />
        {typeof window !== 'undefined' && (
          <meta property="og:url" content={window.location.href} key="url" />
        )}
      </Head>
      <HomePage page={page} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const QUERY = groq`
    *[_type == 'home-page'][0] {
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

export default Home
