import Link from 'next/link'

export const ALevelPage = () => {
  return (
    <section>
      <div className="container">
        <h1 className="text-center">A-Level</h1>
        <ul>
          <li>
            <Link href={'/a-lvl/maths'}>
              <a className="fw-600">Maths Tutors</a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ALevelPage
