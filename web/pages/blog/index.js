import { useEffect } from 'react'
import Head from 'next/head'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { useGlobalState } from '~/utils/state'
import { Layout } from '~/components/Layout'
import { BlogPage } from '~/scenes/pages/Blog'

export const Blog = ({ page }) => {
  const [, setPostsStart] = useGlobalState('postsStart', 0)
  useEffect(() => setPostsStart(0), [])

  return (
    <Layout>
      <Head>
        <title>{page.seoTitle}</title>
        <meta name="description" content={page.seoDescription} />
        <meta property="og:title" content={page.seoTitle} key="title" />
        <meta property="og:description" content={page.seoDescription} key="description" />
        {typeof window !== 'undefined' && (
          <meta property="og:url" content={window.location.href} key="url" />
        )}
      </Head>
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
