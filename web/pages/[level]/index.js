import Link from 'next/link'
import { useRouter } from 'next/router'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'

export const Level = ({ level, subjects }) => {
  const router = useRouter()

  if (!level) {
    typeof window !== 'undefined' && router.replace('/404')
  }

  return (
    <Layout>
      {!!level && (
        <div className="container pt-20x">
          <h1>Level {level.title}</h1>
          <h3>Subjects</h3>
          <ul>
            {subjects.map((subject) => {
              return (
                <li key={subject._id}>
                  <Link href={`/${level.slug.current}/${subject.slug.current}`}>
                    <a>{subject.title}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(`*[_type == 'level' && defined(slug.current)][].slug.current`)

  return {
    paths: paths.map((level) => ({ params: { level } })),
    fallback: true,
  }
}

export async function getServerSideProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { level = '' } = context.params
  const data = await client.fetch(
    `
    *[_type in ['level', 'subject']] {
      _type == 'level' && slug.current == $level => {
        ...,
      },
      _type == 'subject' => {
        ...,
      }
    }
  `,
    { level }
  )

  const levels = data.filter((item) => item._type === 'level')[0]
  const subjects = data.filter((item) => item._type === 'subject')

  return {
    props: {
      level: levels,
      subjects,
    },
  }
}

export default Level
