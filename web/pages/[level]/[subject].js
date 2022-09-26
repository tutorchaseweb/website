import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { useGlobalState } from '~/utils/state'
import { TutorsPage } from '~/scenes/pages'
import MetaTags from '~/components/MetaTags'

export const Subject = ({ level, subject }) => {
  const router = useRouter()
  const [tutorsPage, setTutorsPage] = useState(null)
  const [subjectsPage, setSubjectsPage] = useState(null)
  const [levelQuery, setLevelQuery] = useGlobalState('levelQuery', null)
  const [subjectQuery, setSubjectQuery] = useGlobalState('subjectQuery', null)

  const currentLevel = level?.slug?.current
  const tutorsList = []

  subject?.tutors
    ?.sort((first, second) => second.rating - first.rating)
    .map((item) => {
      return item?.levels?.map((level) => {
        level?.slug?.current === currentLevel ? tutorsList.push(item.tutor) : false
      })
    })

  useEffect(() => {
    !levelQuery && setLevelQuery(level)
    !subjectQuery && setSubjectQuery(subject)
    if (!level && !subject) {
      typeof window !== 'undefined' && router.replace('/404')
    }
  }, [])

  useEffect(async () => {
    const query = groq`
      *[_type == 'subject-page' && slug.current == '${level.slug.current}_${subject.slug.current}'][0]`
    setSubjectsPage(await client.fetch(query))
  }, [level, subject])

  useEffect(async () => {
    const TutorsQUERY = groq`
        *[_type == 'tutors-page'][0] {
          ...,
        }
      `
    setTutorsPage(await client.fetch(TutorsQUERY))
  }, [level, subject])

  return (
    <Layout>
      {(Boolean(subjectsPage) || Boolean(tutorsPage)) && (
        <>
          <MetaTags
            title={subjectsPage ? subjectsPage?.seoTitle : tutorsPage?.seoTitle}
            description={subjectsPage ? subjectsPage?.seoDescription : tutorsPage?.seoDescription}
          />
          <TutorsPage page={subjectsPage ?? tutorsPage} tutors={tutorsList} />
        </>
      )}
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
        levels[]->,
        tutors[] {
          rating,
          levels[]->,
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
