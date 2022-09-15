import { useEffect, useState } from 'react'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { Layout } from '~/components/Layout'
import { useGlobalState } from '~/utils/state'
import { getQueryForTutors } from '~/utils/helpers'
import { OxbridgePage } from '~/scenes/pages'
import MetaTags from '~/components/MetaTags'

export const US_Admissions = ({ page }) => {
  const [tutors, setTutors] = useState([])
  const [, setLevelQuery] = useGlobalState('levelQuery', null)
  const [, setSubjectQuery] = useGlobalState('subjectQuery', null)

  const query = getQueryForTutors(null, null)
  const params = { level: '*', subject: '*' }
  useEffect(() => {
    setLevelQuery(null)
    setSubjectQuery(null)

    client.fetch(query, params).then((data) => {
      setTutors(data)
    })
  }, [])

  return (
    <Layout>
      <MetaTags title={page.seoTitle} description={page.seoDescription} />
      <OxbridgePage page={page} tutors={tutors} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const QUERY = groq`
    *[_type == 'admissions-page'][0] {
      ...,
      admissionsTests{
        ...,
        tests[] ->
      }
    }
  `
  const page = await client.fetch(QUERY)

  return {
    props: {
      page,
    },
  }
}

export default US_Admissions
