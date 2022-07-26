import { useState } from 'react'
import Link from 'next/link'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { useRouter } from 'next/router'

export const Tutors = (props) => {
  const router = useRouter()
  const [data, setData] = useState([])
  // console.log(router.query)
  // console.log(router.query.level)
  // console.log(router.query.subject)
  // console.log(props.tutors)

  const query = `
    *[_type  in ['level', 'subject', 'tutor']] {
      _type == 'level' && slug.current == $level => {
        ...,
      },
      _type == 'subject' && slug.current == $subject => {
        ...,
      },
      _type == 'tutor' => {
        ...,
      },
    }
  `
  // const query = `*[_type == 'tutor'] { ..., }`
  const params = { level: router.query.level, subject: router.query.subject }
  console.log(params)
  client.fetch(query, params).then((data) => {
    console.log(data)
    return data
  })
  // console.log(data)
  // data.then(console.log())
  console.log('data')

  return (
    <Layout>
      <div className="container pt-20x">
        <h1>Tutors list</h1>
        <ul>
          {props.tutors.map((tutor) => {
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

export async function getServerSideProps() {
  const QUERY = groq`
    *[_type in ['level', 'subject', 'tutor', 'review']] {
      _type == 'level' => {
        ...,
      },
      _type == 'subject' => {
        ...,
      },
      _type == 'tutor' => {
        ...,
      },
      _type == 'review' => {
        ...,
      }
    }
  `
  const data = await client.fetch(QUERY)

  const levels = data.filter((item) => item._type === 'level')
  const subjects = data.filter((item) => item._type === 'subject')
  const tutors = data.filter((item) => item._type === 'tutor')
  const reviews = data.filter((item) => item._type === 'review')

  return {
    props: {
      levels,
      subjects,
      tutors,
      reviews,
    },
  }
}

export default Tutors
