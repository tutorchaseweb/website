import { groq } from 'next-sanity'
import client from '../../utils/sanity-client'
import { Layout } from '~/components/Layout'

export const Blog = ({ posts }) => {
  return (
    <Layout>
      <h1>Blog</h1>
      <ul>
        {posts.map(post => {
          return (
            <li key={post._id}>
              <a href={`/blog/${post.slug.current}`}>{post.title}</a>
            </li>
          )
        })}
      </ul>
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
      posts: data
    },
  }
}

export default Blog