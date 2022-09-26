import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { HomePage } from '~/scenes/pages'
import MetaTags from '~/components/MetaTags'

export const Home = ({ page }) => {
  console.log(page)
  return (
    <Layout>
      <MetaTags title={page?.seoTitle} description={page?.seoDescription} />
      <HomePage page={page} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const QUERY = groq`
    *[_type == 'home-page'][0] {
      ...,
      secondScreen{
        ...,
        file{
          _type,
          asset->
        }
      }
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
