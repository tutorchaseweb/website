import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { useGlobalState } from '~/utils/state'
import { getQueryForTutors } from '~/utils/helpers'
import { TutorsPage, OxbridgePage } from '~/scenes/pages'

export const Level = ({ current, level }) => {
  const router = useRouter()
  const [oxbridgePage, setOxbridgePage] = useState(null)
  const [tutorsPage, setTutorsPage] = useState(null)
  const [subjectsPage, setSubjectsPage] = useState(null)
  const [tutors, setTutors] = useState([])
  const [levelQuery, setLevelQuery] = useGlobalState('levelQuery', null)
  const [subjectQuery, setSubjectQuery] = useGlobalState('subjectQuery', null)

  if (!current) {
    typeof window !== 'undefined' && router.replace('/404')
  }

  const getSubjectsData = async () => {
    const SubjectsQUERY = groq`
    *[_type == 'subject-page' && slug.current == '${level}'][0] {
      ...,
    }
  `
    return setSubjectsPage(await client.fetch(SubjectsQUERY))
  }

  useEffect(async () => {
    if (current && current._type === 'level') {
      !levelQuery && setLevelQuery(current)
      setSubjectQuery(null)

      getSubjectsData()
    } else if (current && current._type === 'subject') {
      !subjectQuery && setSubjectQuery(current)
      setLevelQuery(null)

      getSubjectsData()
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
  }, [level])

  const query = getQueryForTutors(levelQuery, subjectQuery)
  const params = { level: levelQuery?._id || '*', subject: subjectQuery?._id || '*' }
  useEffect(() => {
    client.fetch(query, params).then((data) => {
      setTutors(
        current && current._type === 'subject'
          ? current.tutors
              ?.sort((first, second) => second.rating - first.rating)
              .map((item) => item.tutor)
          : data
      )
    })
  }, [current, level])

  useEffect(async () => {
    const TutorsQUERY = groq`
        *[_type == 'tutors-page'][0] {
          ...,
        }
      `
    setTutorsPage(await client.fetch(TutorsQUERY))
  }, [level])

  const isEmpty = subjectsPage && Object.keys(subjectsPage).length === 0

  return (
    <Layout>
      <Head>
        <title>Online {current ? current.title : ''} Tutors</title>
      </Head>
      {current &&
        (current._type === 'level' || current._type === 'subject') &&
        (Boolean(subjectsPage) || Boolean(tutorsPage)) && (
          <TutorsPage page={!isEmpty ? subjectsPage : tutorsPage} tutors={tutors} />
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
        levels[]->,
        tutors[] {
          rating,
          tutor-> {
            _id,
            _rev,
            _type,
            _createdAt,
            _updatedAt,
            slug,
            image,
            name,
            description,
            education,
            position,
            elected,
            'teaches': *[_type == 'subject' && references(^._id)] {
              _id,
              _createdAt,
              title,
              slug,
            },
          }
        }
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
      level,
    },
  }
}

export default Level
