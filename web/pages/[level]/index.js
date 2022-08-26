import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { useGlobalState } from '~/utils/state'
import { getQueryForTutors } from '~/utils/helpers'
import { TutorsPage, OxbridgePage } from '~/scenes/pages'

export const Level = ({ current }) => {
  const router = useRouter()
  const [oxbridgePage, setOxbridgePage] = useState(null)
  const [tutorsPage, setTutorsPage] = useState(null)
  const [tutors, setTutors] = useState([])
  const [levelQuery, setLevelQuery] = useGlobalState('levelQuery', null)
  const [subjectQuery, setSubjectQuery] = useGlobalState('subjectQuery', null)

  if (!current) {
    typeof window !== 'undefined' && router.replace('/404')
  }

  useEffect(async () => {
    if (current && current._type === 'level') {
      !levelQuery && setLevelQuery(current)
      setSubjectQuery(null)

      const TutorsQUERY = groq`
        *[_type == 'tutors-page'][0] {
          ...,
        }
      `
      setTutorsPage(await client.fetch(TutorsQUERY))
    } else if (current && current._type === 'subject') {
      !subjectQuery && setSubjectQuery(current)
      setLevelQuery(null)

      const TutorsQUERY = groq`
        *[_type == 'tutors-page'][0] {
          ...,
        }
      `
      setTutorsPage(await client.fetch(TutorsQUERY))
    } else if (current && current._type === 'test') {
      setLevelQuery(null)
      setSubjectQuery(null)
      const OxbridgeQUERY = groq`
        *[_type == 'oxbridge-page'][0] {
          ...,
        }
      `
      setOxbridgePage(await client.fetch(OxbridgeQUERY))
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
        <title>Online {current ? current.title : ''} Tutors</title>
      </Head>
      {current && current._type === 'level' && Boolean(tutorsPage) && (
        <TutorsPage page={tutorsPage} tutors={tutors} />
      )}
      {current && current._type === 'subject' && Boolean(tutorsPage) && (
        <TutorsPage page={tutorsPage} tutors={tutors} />
      )}
      {current && current._type === 'test' && Boolean(oxbridgePage) && (
        <OxbridgePage title={current.title} page={oxbridgePage} tutors={tutors} />
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
      current: current ? current : null,
    },
  }
}

export default Level
