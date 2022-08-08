import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { useGlobalState } from '~/utils/state'
import { getQueryForTutors } from '~/utils/helpers'
import { TutorsPage } from '~/scenes/pages/Tutors'

export const Level = ({ current }) => {
  const router = useRouter()
  const [tutors, setTutors] = useState([])
  const [levelQuery, setLevelQuery] = useGlobalState('levelQuery', null)
  const [subjectQuery, setSubjectQuery] = useGlobalState('subjectQuery', null)

  useEffect(() => {
    if (current._type === 'level') {
      !levelQuery && setLevelQuery(current)
      setSubjectQuery(null)
    } else if (current._type === 'subject') {
      !subjectQuery && setSubjectQuery(current)
      setLevelQuery(null)
    } else {
      typeof window !== 'undefined' && router.replace('/404')
    }
  }, [])

  const query = getQueryForTutors(levelQuery, subjectQuery)
  const params = { level: levelQuery?._id || '*', subject: subjectQuery?._id || '*' }
  useEffect(() => {
    client.fetch(query, params).then((data) => {
      setTutors(data)
    })
  }, [current])

  return (
    <Layout>
      <Head>
        <title>Online {current.title} Tutors</title>
      </Head>
      <TutorsPage tutors={tutors} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { level = '' } = context.params
  const data = await client.fetch(
    `
    *[_type in ['level', 'subject']] {
      _type == 'level' => {
        ...,
      },
      _type == 'subject' => {
        ...,
      }
    }
  `,
    { level }
  )

  const current = data.filter((item) => item.slug && item.slug.current === level)[0]

  return {
    props: {
      current,
    },
  }
}

export default Level
