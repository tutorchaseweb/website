import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'

export const Subject = ({ level, subject }) => {
  return (
    <Layout>
      <div className="container pt-20x">
        <h1>Subject {subject?.title}</h1>
        <h3>Level {level?.title}</h3>
      </div>
    </Layout>
  )
}

// export async function getStaticPaths() {
//   const types = await client.fetch(`*[_type in ['level', 'subject']]`)
//   const levels = types.filter((item) => item._type === 'level')
//   const subjects = types.filter((item) => item._type === 'subject')
//
//   const paths = levels.map((level) => {
//     return subjects.map((subject) => {
//       return `/${level.slug.current}/${subject.slug.current}`
//     })
//   })
//
//   return {
//     paths: paths.flat(),
//     fallback: true,
//   }
// }

export async function getServerSideProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
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
