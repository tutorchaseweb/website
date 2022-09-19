import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { useRouter } from 'next/router'
import { Layout } from '~/components/Layout'
import { BlogPage } from '~/scenes/pages'
import MetaTags from '~/components/MetaTags'

export const BlogNav = ({ page }) => {
  const router = useRouter()

  return (
    <Layout>
      <MetaTags title={page?.seoTitle} description={page?.seoDescription} />
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
