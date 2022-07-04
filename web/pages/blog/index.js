import { groq } from 'next-sanity'
import client from '../../utils/sanity-client'
import { Layout } from '~/components/Layout'
import { BlogPage } from '~/scenes/pages/Blog'

export const Blog = ({ page, posts }) => {
  return (
    <Layout>
      <BlogPage page={page} posts={posts} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const QUERY = groq`
    *[_type in ['blog-page', 'post']] {
      _type == 'blog-page' => {
        ...,
      },
      _type == 'post' => {
        ...,
      }
    }
  `
  const data = await client.fetch(QUERY)

  const page = data.filter((item) => item._type === 'blog-page')[0]
  const posts = data.filter((item) => item._type === 'post')

  return {
    props: {
      page,
      posts,
    },
  }
}

export default Blog
