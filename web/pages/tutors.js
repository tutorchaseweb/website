import { useState, useEffect } from 'react'
import { Layout } from '~/components/Layout'

export const Tutors = () => {
  const [tutors, setTutors] = useState([])
  const ApiUrl = 'https://secure.tutorcruncher.com/api'
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'token bec0fb40c497a3247bb7f5385b55a3cdad29f0db',
  }

  useEffect(() => {
    fetch(`${ApiUrl}/contractors/`, { headers })
      .then((result) => result.json())
      .then((data) => {
        console.log(data)
        setTutors(data.results)
      })
  }, [])

  return (
    <Layout>
      <section>
        <div className="container">
          <h1>Tutors</h1>
          {Boolean(tutors.length) && (
            <ul>
              {tutors.map((tutor, idx) => {
                return <li key={idx}>{tutor.first_name}</li>
              })}
            </ul>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Tutors
