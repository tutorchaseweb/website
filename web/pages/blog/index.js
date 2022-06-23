import { groq } from 'next-sanity'
import client from '../../utils/sanity-client'
import { Layout } from '~/components/Layout'
import { BlogPage } from '~/scenes/pages/Blog'

export const Blog = ({ posts }) => {
  return (
    <Layout>
      <BlogPage posts={posts} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const QUERY = groq`
    *[_type == "post"] {
      ...,
    }
  `
  const data = await client.fetch(QUERY)

  return {
    props: {
      posts: data,
    },
  }
}

export default Blog
