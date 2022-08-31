import Head from 'next/head'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { AccessProgrammePage } from '~/scenes/pages'

export const AccessProgramme = ({ page }) => {
  return (
    <Layout>
      <Head>
        <title>{page?.seoTitle ? page.seoTitle : 'Acces sProgramme'}</title>
        {Boolean(page?.seoDescription) && <meta name="description" content={page.seoDescription} />}
        {Boolean(page?.seoTitle) && (
          <meta property="og:title" content={page.seoTitle} key="title" />
        )}
        {Boolean(page?.seoDescription) && (
          <meta property="og:description" content={page.seoDescription} key="description" />
        )}
        {typeof window !== 'undefined' && (
          <meta property="og:url" content={window.location.href} key="url" />
        )}
      </Head>
      <AccessProgrammePage page={page} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const QUERY = groq`
    *[_type == 'access-page'][0] {
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

export default AccessProgramme
