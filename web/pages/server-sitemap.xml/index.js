import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { getServerSideSitemap } from 'next-sitemap'

export const getServerSideProps = async (ctx) => {
  const QUERY = groq`
  *[_type == 'post' || _type == 'subject-page' || _type == 'tutor' || _type == 'custom-page' && !(_id in path("drafts.**"))] {
      ...,
    }
  `
  const posts = await client.fetch(QUERY)

  const newsSitemaps = posts.map((item) => ({
    loc: `${process.env.NEXT_PUBLIC_BASE_URL}/${item?.slug?.current}`,
    lastmod: new Date().toISOString(),
  }))

  const fields = [...newsSitemaps]

  return getServerSideSitemap(ctx, fields)
}

export default function Site() {}
