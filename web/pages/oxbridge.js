import { useEffect, useState } from 'react'
import Head from 'next/head'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { useGlobalState } from '~/utils/state'
import { getQueryForTutors } from '~/utils/helpers'
import { OxbridgePage } from '~/scenes/pages/Oxbridge'

export const Oxbridge = ({ data }) => {
  const [page] = data
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
        <title>Oxbridge</title>
      </Head>
      <OxbridgePage page={page} tutors={tutors} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const QUERY = groq`
    *[_type == 'oxbridge-page'] {
      ...,
    }
  `
  const data = await client.fetch(QUERY)

  return {
    props: {
      data,
    },
  }
}

export default Oxbridge
