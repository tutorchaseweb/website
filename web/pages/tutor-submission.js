import Head from 'next/head'
import { useRouter } from 'next/router'
import { Layout } from '~/components/Layout'
import { TutorSubmissionPage } from '~/scenes/pages/TutorSubmission'

export const TutorSubmission = () => {
  const router = useRouter()
  const homeUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const canonicalUrl = (homeUrl + (router.asPath === '/' ? '' : router.asPath)).split('?')[0]

  return (
    <Layout>
      <Head>
        <title>Tutor Submission</title>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <TutorSubmissionPage />
    </Layout>
  )
}

export default TutorSubmission
