import Head from 'next/head'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { useRouter } from 'next/router'
import { Layout } from '~/components/Layout'
import { BlogPage } from '~/scenes/pages'

export const BlogNav = ({ page }) => {
  const router = useRouter()

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
      <BlogPage page={page} start={(router.query.number - 1) * page.postsPerPage} />
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

export default BlogNav
