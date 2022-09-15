import { useEffect } from 'react'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { useGlobalState } from '~/utils/state'
import { Layout } from '~/components/Layout'
import { BlogPage } from '~/scenes/pages'
import MetaTags from '~/components/MetaTags'

export const Blog = ({ page }) => {
  const [, setPostsStart] = useGlobalState('postsStart', 0)
  useEffect(() => setPostsStart(0), [])

  return (
    <Layout>
      <MetaTags title={page.seoTitle} description={page.seoDescription} />
      <BlogPage page={page} start={0} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const QUERY = groq`
    *[_type == 'blog-page'][0] {
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

export default Blog
