import Link from 'next/link'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'

export const Tutors = (props) => {
  return (
    <Layout>
      <div className="container">
        <h1>Tutors</h1>
        <ul>
          {props.tutors.map((tutor) => {
            return (
              <li>
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

export async function getStaticProps() {
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
