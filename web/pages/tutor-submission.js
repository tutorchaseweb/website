import Head from 'next/head'
import { Layout } from '~/components/Layout'
import { TutorSubmissionPage } from '~/scenes/pages/TutorSubmission'

export const TutorSubmission = () => {
  return (
    <Layout>
      <Head>
        <title>Tutor Submission</title>
      </Head>
      <TutorSubmissionPage />
    </Layout>
  )
}

export default TutorSubmission
