import React from 'react'
import Head from 'next/head'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { HomePage } from '~/scenes/pages/HomePage'

export const Home = ({ data }) => {
  const [page] = data

  return (
    <Layout>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <meta property="og:title" content={page.title} key="title" />
        <meta property="og:description" content={page.description} key="description" />
        {typeof window !== 'undefined' && (
          <meta property="og:url" content={window.location.href} key="url" />
        )}
      </Head>
      <HomePage page={page} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const QUERY = groq`
    *[_type == 'home-page'] {
      ...,
    }
  `
  const data = await client.fetch(QUERY)

  return {
    props: {
      data,
    },
  }
}

export default Home
