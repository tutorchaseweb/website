import Head from 'next/head'
import { Layout } from '~/components/Layout'
import { AccessProgrammePage } from '~/scenes/pages/AccessProgramme'

export const AccessProgramme = () => {
  return (
    <Layout>
      <Head>
        <title>TutorChase Access</title>
      </Head>
      <AccessProgrammePage />
    </Layout>
  )
}

export default AccessProgramme
