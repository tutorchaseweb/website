import { useState, useEffect } from 'react'
import Head from 'next/head'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { useGlobalState } from '~/utils/state'
import { getQueryForTutors } from '~/utils/helpers'
import { TutorsPage } from '~/scenes/pages/Tutors'

export const Tutors = () => {
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
        <title>Online Tutors</title>
      </Head>
      <TutorsPage tutors={tutors} />
    </Layout>
  )
}

export default Tutors
