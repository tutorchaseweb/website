import Head from 'next/head'
import { Layout } from '~/components/Layout'
import { TutorApplicationsPage } from '~/scenes/pages/TutorApplications'

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

export default TutorApplications
