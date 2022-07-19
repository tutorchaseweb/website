import Link from 'next/link'
import SVG from '~/components/SVG'
import { star } from '~/utils/svgImages'
import { ApplyForm } from './components/ApplyForm'
import { HireFormBlock } from '~/scenes/sections'
import illustration7 from '~/assets/images/illustration-7.png'
import illustration8 from '~/assets/images/illustration-8.png'
import illustration9 from '~/assets/images/illustration-9.png'

import styles from './style.module.scss'

export const TutorApplicationsPage = () => {
  return (
    <>
      <section className={`pt-16x pb-6x ${styles.firstScreen}`}>
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="text-wrapper mb-6x">
              <p className="rating flex items-center mb-2x">
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
              <ol className="ordered-list blue">
                <li>Recruiting the world's best tutors</li>
                <li>Flexible part-time tutoring</li>
                <li>Tutor online from your own home</li>
              </ol>
            </div>
            <ApplyForm />
          </div>
        </div>
      </section>
      <section className={`pt-18x pb-18x ${styles.content}`}>
        <div className="container narrow">
          <div className="flex items-center justify-between gap-8">
            <div className="relative">
              <img src={illustration7.src} alt="illustration7" />
              <div className="tutor absolute bg-white rounded-small">
                <div className="flex items-center">
                  <p className="fz-14p fw-600">Tutors for any level</p>
                </div>
                <span className="wrap">
                  <span className="line bg-orange"></span>
                  <span className="line bg-orange"></span>
                  <span className="line bg-orange"></span>
                  <span className="line bg-orange"></span>
                </span>
                <span className="fz-14p fw-800 ml-1x">A/A+</span>
              </div>
            </div>
            <div className="text-wrap">
              <h2 className="fz-48p fw-600 l-height-1 mb-3x">Flexibility</h2>
              <p className="fz-18p">
                TutorChase provides online tuition to students around the world. We operate by
                maintaining a team of tutors whom we match students with.
              </p>
            </div>
          </div>
          <div
            className="flex items-center justify-between gap-8 mt-12x"
            style={{ flexDirection: 'row-reverse' }}
          >
            <div>
              <img src={illustration8.src} alt="illustration8" />
            </div>
            <div className="text-wrap">
              <h2 className="fz-48p fw-600 l-height-1 mb-3x">Convenient schedule</h2>
              <p className="fz-18p">
                Tutors are free to take on as many students as they want, whether that be just one
                or over a dozen. Tutoring jobs range from lasting for only a few lessons for
                students who want short-term help, to over a year for students looking for long-term
                support.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-8 mt-12x">
            <div>
              <img src={illustration9.src} alt="illustration9" />
            </div>
            <div className="text-wrap">
              <h2 className="fz-48p fw-600 l-height-1 mb-3x">Qualifications</h2>
              <p className="fz-18p">
                We are currently recruiting tutors for all subjects and admissions tests, and in
                particular tutors who can teach UK and US curriculums and assist with university
                applications and admissions tests.
              </p>
            </div>
          </div>
        </div>
      </section>
      <HireFormBlock onlyContacts={true} />
    </>
  )
}

export default TutorApplicationsPage
