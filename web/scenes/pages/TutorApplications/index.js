import Link from 'next/link'
import SVG from '~/components/SVG'
import { star } from '~/utils/svgImages'
import { ApplyForm } from './components/ApplyForm'

import styles from './style.module.scss'

export const TutorApplicationsPage = () => {
  return (
    <>
      <section className={`pt-20x pb-18x ${styles.firstScreen}`}>
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="text-wrapper">
              <p className="rating flex items-center justify-center mb-2x">
                <span className="stars l-height-1 mr-1x">
                  <SVG content={star()} size={20} />
                  <SVG content={star()} size={20} />
                  <SVG content={star()} size={20} />
                  <SVG content={star()} size={20} />
                  <SVG content={star()} size={20} />
                </span>
                4.92/5 based on
                <Link href={'/reviews'}>
                  <a className="fw-600 ml-1x">214 reviews</a>
                </Link>
              </p>
              <h1 className="fz-64p fw-700 l-height-1 mb-4x">
                Become an <strong>Online Tutor</strong>
              </h1>
              <ol>
                <li>Recruiting the world's best tutors</li>
                <li>Flexible part-time tutoring</li>
                <li>Tutor online from your own home</li>
              </ol>
            </div>
            <ApplyForm />
          </div>
        </div>
      </section>
      <section className={`pt-18x`}>
        <div className="container">
          <div className="flex">
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h2>Flexibility</h2>
              <p>
                TutorChase provides online tuition to students around the world. We operate by
                maintaining a team of tutors whom we match students with.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h2>Convenient schedule</h2>
              <p>
                Tutors are free to take on as many students as they want, whether that be just one
                or over a dozen. Tutoring jobs range from lasting for only a few lessons for
                students who want short-term help, to over a year for students looking for long-term
                support.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h2>Qualifications</h2>
              <p>
                We are currently recruiting tutors for all subjects and admissions tests, and in
                particular tutors who can teach UK and US curriculums and assist with university
                applications and admissions tests.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TutorApplicationsPage
