import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { useGlobalState } from '~/utils/state'
import { getQueryForTutors } from '~/utils/helpers'
import { TutorsPage } from '~/scenes/pages/Tutors'
import { OxbridgePage } from '~/scenes/pages/Oxbridge'

export const Level = ({ current }) => {
  const router = useRouter()
  const [page, setPage] = useState(null)
  const [tutors, setTutors] = useState([])
  const [levelQuery, setLevelQuery] = useGlobalState('levelQuery', null)
  const [subjectQuery, setSubjectQuery] = useGlobalState('subjectQuery', null)

  useEffect(async () => {
    if (current._type === 'level') {
      !levelQuery && setLevelQuery(current)
      setSubjectQuery(null)
    } else if (current._type === 'subject') {
      !subjectQuery && setSubjectQuery(current)
      setLevelQuery(null)
    } else if (current._type === 'test') {
      setLevelQuery(null)
      setSubjectQuery(null)
      const QUERY = groq`
        *[_type == 'oxbridge-page'][0] {
          ...,
        }
      `
      setPage(await client.fetch(QUERY))
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
      {current._type === 'level' && <TutorsPage tutors={tutors} />}
      {current._type === 'subject' && <TutorsPage tutors={tutors} />}
      {current._type === 'test' && Boolean(page) && (
        <OxbridgePage title={current.title} page={page} tutors={tutors} />
      )}
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { level = '' } = context.params
  const data = await client.fetch(
    `
    *[_type in ['level', 'subject', 'test']] {
      _type == 'level' && !(_id in path("drafts.**")) => {
        ...,
      },
      _type == 'subject' && !(_id in path("drafts.**")) => {
        ...,
      },
      _type == 'test' && !(_id in path("drafts.**")) => {
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
