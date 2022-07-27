import { useState, useEffect } from 'react'
import Link from 'next/link'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { SubjectsFilter } from '~/scenes/sections'
import { useGlobalState } from '~/utils/state'

export const Tutors = () => {
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
      console.log(data)
    })
  }, [levelQuery, subjectQuery])

  return (
    <Layout>
      <div className="container pt-20x">
        <h1>{`Online ${levelQuery?.title ? levelQuery.title : ''} ${
          subjectQuery?.title ? subjectQuery.title : ''
        } Tutors`}</h1>
        <SubjectsFilter />
        <ul>
          {tutors.map((tutor) => {
            return (
              <li key={tutor._id} className="fz-18p fw-500">
                <Link href={`/tutors/${tutor.slug.current}`}>
                  <a>{tutor.name}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default Tutors
