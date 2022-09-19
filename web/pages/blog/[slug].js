import client from '../../utils/sanity-client'
import { Layout } from '~/components/Layout'
import { ArticlePage } from '~/scenes/pages/Blog/Article'
import MetaTags from '~/components/MetaTags'

export const Post = ({ post }) => {
  return (
    <Layout>
      <MetaTags title={post?.seoTitle ?? post?.title} description={post?.seoDescription} />
      <ArticlePage article={post} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { slug = '' } = context.params
  const post = await client.fetch(
    `
    *[_type == 'post' && slug.current == $slug][0]
  `,
    { slug }
  )
  return {
    props: {
      post,
    },
  }
}

export default Post
