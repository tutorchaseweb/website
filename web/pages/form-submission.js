import Head from 'next/head'
import { useRouter } from 'next/router'
import { Layout } from '~/components/Layout'
import { FormSubmissionPage } from '~/scenes/pages'

export const FormSubmission = () => {
  const router = useRouter()
  const homeUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const canonicalUrl = (homeUrl + (router.asPath === '/' ? '' : router.asPath)).split('?')[0]

  return (
    <Layout>
      <Head>
        <title>Form Submission</title>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <FormSubmissionPage />
    </Layout>
  )
}

export default FormSubmission
