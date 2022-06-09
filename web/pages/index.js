import Head from 'next/head'
import { Layout } from '~/components/Layout'
import { HomePage } from '~/scenes/pages/HomePage'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>TutorChase</title>
      </Head>
      <HomePage />
    </Layout>
  )
}
