import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { useGlobalState } from '~/utils/state'
import { getQueryForTutors } from '~/utils/helpers'
import { TutorsPage } from '~/scenes/pages'

export const Subject = ({ level, subject }) => {
  const router = useRouter()
  const [tutors, setTutors] = useState([])
  const [tutorsPage, setTutorsPage] = useState(null)
  const [levelQuery, setLevelQuery] = useGlobalState('levelQuery', null)
  const [subjectQuery, setSubjectQuery] = useGlobalState('subjectQuery', null)

  useEffect(() => {
    !levelQuery && setLevelQuery(level)
    !subjectQuery && setSubjectQuery(subject)
    if (!level && !subject) {
      typeof window !== 'undefined' && router.replace('/404')
    }
  }, [])

  const query = getQueryForTutors(levelQuery, subjectQuery)
  const params = { level: levelQuery?._id || '*', subject: subjectQuery?._id || '*' }
  useEffect(() => {
    client.fetch(query, params).then((data) => {
      setTutors(data)
    })
  }, [level, subject])

  useEffect(async () => {
    const TutorsQUERY = groq`
        *[_type == 'tutors-page'][0] {
          ...,
        }
      `
    setTutorsPage(await client.fetch(TutorsQUERY))
  }, [])

  return (
    <Layout>
      <Head>
        <title>
          Online {level?.title} {subject?.title} Tutors
        </title>
      </Head>
      {Boolean(tutorsPage) && <TutorsPage page={tutorsPage} tutors={tutors} />}
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { level = '', subject = '' } = context.params
  const data = await client.fetch(
    `
    *[_type in ['level', 'subject']] {
      _type == 'level' && slug.current == $level => {
        ...,
      },
      _type == 'subject' && slug.current == $subject => {
        ...,
      }
    }
  `,
    { level, subject }
  )

  const levels = data.filter((item) => item._type === 'level')[0]
  const subjects = data.filter((item) => item._type === 'subject')[0]

  return {
    props: {
      level: levels,
      subject: subjects,
    },
  }
}

export default Subject
