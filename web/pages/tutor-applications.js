import Head from 'next/head'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { TutorApplicationsPage } from '~/scenes/pages'

export const TutorApplications = () => {
  return (
    <Layout>
      <Head>
        <title>Tutor Applications</title>
      </Head>
      <TutorApplicationsPage />
    </Layout>
  )
}

// export async function getServerSideProps() {
//   const QUERY = groq`
//     *[_type == 'applications-page'][0] {
//       ...,
//     }
//   `
//   const page = await client.fetch(QUERY)
//
//   return {
//     props: {
//       page,
//     },
//   }
// }

export default TutorApplications
