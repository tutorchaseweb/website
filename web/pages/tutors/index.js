import { useState, useEffect } from 'react'
import Head from 'next/head'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { useGlobalState } from '~/utils/state'
import { getQueryForTutors } from '~/utils/helpers'
import { TutorsPage } from '~/scenes/pages'

export const Tutors = ({ page }) => {
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
        <title>{page.seoTitle}</title>
        <meta name="description" content={page.seoDescription} />
      </Head>
      <TutorsPage page={page} tutors={tutors} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const QUERY = groq`
    *[_type == 'tutors-page'][0] {
      ...,
    }
  `
  const page = await client.fetch(QUERY)

  return {
    props: {
      page,
    },
  }
}

export default Tutors
