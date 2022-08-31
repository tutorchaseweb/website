import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Layout } from '~/components/Layout'
import client from '~/utils/sanity-client'
import { OxbridgePage } from '~/scenes/pages'
import { getQueryForTutors } from '~/utils/helpers'
import { useGlobalState } from '~/utils/state'

export const AdditionalPage = ({ page }) => {
  const [tutors, setTutors] = useState([])
  const [, setLevelQuery] = useGlobalState('levelQuery', null)
  const [, setSubjectQuery] = useGlobalState('subjectQuery', null)

  const query = getQueryForTutors(null, null)
  const params = { level: '*', subject: '*' }

  useEffect(() => {
    setLevelQuery(null)
    setSubjectQuery(null)

    client.fetch(query, params).then((data) => {
      setTutors(data)
    })
  }, [])

  return (
    <Layout>
      <Head>
        <title>Additional Page</title>
      </Head>
      <div className="container pt-20x">
        <h1>Additional Page</h1>
      </div>
      <OxbridgePage title={page.title} page={page} tutors={tutors} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { slug = '' } = context.params
  const page = await client.fetch(
    `
    *[_type == 'custom-page' && slug.current == $slug][0]
  `,
    { slug }
  )
  return {
    props: {
      page,
    },
  }
}

export default AdditionalPage
