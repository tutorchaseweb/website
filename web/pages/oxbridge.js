import Head from 'next/head'
import { Layout } from '~/components/Layout'
import { OxbridgePage } from '~/scenes/pages/Oxbridge'
import { useEffect, useState } from 'react'
import { useGlobalState } from '~/utils/state'
import client from '~/utils/sanity-client'

export const Oxbridge = () => {
  const [tutors, setTutors] = useState([])
  const [levelQuery] = useGlobalState('levelQuery', false)
  const [subjectQuery] = useGlobalState('subjectQuery', false)

  let query = ''
  if (levelQuery && subjectQuery) {
    query = `
      *[_type == 'tutor' && references($level) && references($subject)] {
        ...,
        levels[]->,
        teaches[]->,
        universities[]->
      }
    `
  } else if (levelQuery && !subjectQuery) {
    query = `
      *[_type == 'tutor' && references($level)] {
        ...,
        levels[]->,
        teaches[]->,
        universities[]->
      }
    `
  } else if (subjectQuery && !levelQuery) {
    query = `
      *[_type == 'tutor' && references($subject)] {
        ...,
        levels[]->,
        teaches[]->,
        universities[]->
      }
    `
  } else {
    query = `*[_type == 'tutor'] {
      ...,
      levels[]->,
      teaches[]->,
      universities[]->
    }`
  }
  const params = { level: levelQuery?._id || '*', subject: subjectQuery?._id || '*' }
  useEffect(() => {
    client.fetch(query, params).then((data) => {
      setTutors(data)
      // console.log(data)
    })
  }, [levelQuery, subjectQuery])

  return (
    <Layout>
      <Head>
        <title>Oxbridge</title>
      </Head>
      <OxbridgePage tutors={tutors} />
    </Layout>
  )
}

export default Oxbridge
