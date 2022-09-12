import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { useGlobalState } from '~/utils/state'
import { TutorsPage, OxbridgePage } from '~/scenes/pages'

export const Level = ({ current, subjectElements, level }) => {
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
    const SubjectsPageQUERY = groq`
    *[_type == 'subject-page' && slug.current == '${level}'][0] {
      ...,
    }
  `
    return setSubjectsPage(await client.fetch(SubjectsPageQUERY))
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

  useEffect(async () => {
    const levelTutors = subjectElements.map((item) => {
      return item.tutors.filter((tutor) => {
        return tutor?.level?.slug.current === level
      })
    })

    const tutorsList = []

    levelTutors.map((array) => {
      return array.length !== 0
        ? array.length === 1
          ? tutorsList.push(array[0].tutor)
          : array.map((item) => {
              return tutorsList.push(item.tutor)
            })
        : false
    })

    current &&
      current._type === 'subject' &&
      setTutors(
        current.tutors
          ?.sort((first, second) => second.rating - first.rating)
          .map((item) => item.tutor)
      )

    current &&
      current._type === 'level' &&
      setTutors(tutorsList?.sort((first, second) => second.rating - first.rating))?.map(
        (item) => item.tutor
      )
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
      {current &&
        (current._type === 'level' || current._type === 'subject') &&
        (Boolean(subjectsPage) || Boolean(tutorsPage)) && (
          <>
            <Head>
              <title>{!isEmpty ? subjectsPage?.seoTitle : tutorsPage?.seoTitle}</title>
              <meta
                name="description"
                content={!isEmpty ? subjectsPage?.seoDescription : tutorsPage?.seoDescription}
              />
            </Head>
            <TutorsPage page={!isEmpty ? subjectsPage : tutorsPage} tutors={tutors} />
          </>
        )}
      {current && current._type === 'test' && Boolean(oxbridgePage) && (
        <>
          <Head>
            <title>{oxbridgePage?.seoTitle}</title>
            <meta name="description" content={oxbridgePage?.seoDescription} />
          </Head>
          <OxbridgePage title={current.title} page={oxbridgePage} tutors={tutors} />
        </>
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
          },
          level->{
            title,
            slug
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
  const subjectElements = data.filter((item) => item._type && item._type === 'subject')

  return {
    props: {
      current: current ? current : null,
      subjectElements: subjectElements ? subjectElements : null,
      level,
    },
  }
}

export default Level
