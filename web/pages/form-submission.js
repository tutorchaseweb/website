import Head from 'next/head'
import { Layout } from '~/components/Layout'
import { FormSubmissionPage } from '~/scenes/pages/FormSubmission'

export const FormSubmission = () => {
  return (
    <Layout>
      <Head>
        <title>Form Submission</title>
      </Head>
      <FormSubmissionPage />
    </Layout>
  )
}

export default FormSubmission
