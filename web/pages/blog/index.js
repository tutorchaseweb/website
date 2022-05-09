import { groq } from 'next-sanity'

const Blog = (props) => {
  console.log(props);
  return (
    <article>
      <h1>Blog</h1>
    </article>
  )
}

// export async function getStaticPaths() {
//   const paths = await getClient()
//     .fetch(groq`*[_type == "post" && defined(slug.current)][].slug.current`)
//     .then((res) => {
//       return [...res]
//     })
//
//   return {
//     paths: paths.map((slug) => ({ params: { slug } })),
//     fallback: false,
//   }
// }

// export async function getServerSideProps({ params, preview = false }) {
//   const QUERY = groq`
//     *[_type == "post" && slug.current == $slug][0] {
//       ...,
//     }
//   `
//   const post = await getClient(preview).fetch(QUERY, {
//     slug: params.slug,
//   })
//
//   return {
//     props: {
//       preview,
//       data: { post },
//     },
//   }
// }