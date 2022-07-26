import client from '../../utils/sanity-client'
import { Layout } from '~/components/Layout'
import { ArticlePage } from '~/scenes/pages/Blog/Article'

export const Post = ({ post }) => {
  return (
    <Layout>
      <ArticlePage article={post} />
    </Layout>
  )
}

// export async function getStaticPaths() {
//   const paths = await client.fetch(`*[_type == 'post' && defined(slug.current)][].slug.current`)
//
//   return {
//     paths: paths.map((slug) => ({ params: { slug } })),
//     fallback: true,
//   }
// }

export async function getServerSideProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
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
