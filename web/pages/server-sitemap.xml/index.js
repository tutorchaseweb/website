import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { getServerSideSitemap } from 'next-sitemap'

export const getServerSideProps = async (ctx) => {
  const QUERY = groq`
  *[_type == 'post' || _type == 'subject-page' || _type == 'tutor' || _type == 'custom-page' && !(_id in path("drafts.**"))] {
      ...,
    }
  `
  const pages = await client.fetch(QUERY)

  const newsSitemaps = pages.map((item) => ({
    loc: `${process.env.NEXT_PUBLIC_BASE_URL}/${
      item?._type === 'post'
        ? 'blog/'
        : item?._type === 'tutor'
        ? 'tutors/'
        : item?._type === 'custom-page'
        ? 'page/'
        : ''
    }${
      item?._type === 'subject-page' ? (item?.slug?.current).replace(/_/, '/') : item?.slug?.current
    }`,
    lastmod: new Date().toISOString(),
  }))

  const fields = [...newsSitemaps]

  return getServerSideSitemap(ctx, fields)
}

export default function Site() {}
