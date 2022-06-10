import Head from 'next/head'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { HomePage } from '~/scenes/pages/HomePage'

export const Home = ({ data }) => {
  const [page] = data

  return (
    <Layout>
      <Head>
        <title>TutorChase</title>
      </Head>
      <HomePage page={page} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const QUERY = groq`
    *[_type == 'home-page'] {
      ...,
    }
  `
  const data = await client.fetch(QUERY)

  return {
    props: {
      data,
    },
  }
}

export default Home
