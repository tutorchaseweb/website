import { useState } from 'react'
import { useWindowSize } from '~/utils/helpers'
import { MOBILE_BREAKPOINT } from '~/utils/constants'
import { ApplyForm } from './components/ApplyForm'
import { HireFormBlock, BasedReviews } from '~/scenes/sections'
import illustration7 from '~/assets/images/illustration-7.png'
import illustration8 from '~/assets/images/illustration-8.png'
import illustration9 from '~/assets/images/illustration-9.png'

import styles from './style.module.scss'

export const TutorApplicationsPage = () => {
  const [activePopup, setActivePopup] = useState(false)
  const page = useWindowSize()

  const handler = () => {
    if (typeof window !== 'undefined') {
      const body = document.querySelector('body')
      activePopup ? body.classList.remove('openMenu') : body.classList.add('openMenu')
      setActivePopup(!activePopup)
    }
  }

  return (
    <>
      <section className={`pt-16x pb-6x ${styles.firstScreen}`}>
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="text-wrapper mb-6x">
              <BasedReviews />
              <h1 className="main-title fw-700 l-height-1 mb-4x">
                Become an <code>Online Tutor</code>
              </h1>
              <ol className="ordered-list blue">
                <li>Recruiting the world's best tutors</li>
                <li>Flexible part-time tutoring</li>
                <li>Tutor online from your own home</li>
              </ol>
              {page.width < MOBILE_BREAKPOINT && (
                <button className="btn btn-blue mt-5x" onClick={handler}>
                  Apply Now
                </button>
              )}
            </div>
            {page.width > MOBILE_BREAKPOINT && <ApplyForm />}
          </div>
        </div>
      </section>
      <section className={`pt-10x pb-10x pt-18x_lg pb-18x_lg ${styles.content}`}>
        <div className="container narrow">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="relative w-1/2_lg">
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
            <div className="text-wrap w-1/2_lg">
              <h2 className="fz-48p fw-600 l-height-1 mb-3x">Flexibility</h2>
              <p className="fz-18p">
                TutorChase provides online tuition to students around the world. We operate by
                maintaining a team of tutors whom we match students with.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-8 mt-12x reverse_lg">
            <div className="relative w-1/2_lg">
              <img src={illustration8.src} alt="illustration8" />
            </div>
            <div className="text-wrap w-1/2_lg">
              <h2 className="fz-48p fw-600 l-height-1 mb-3x">Convenient schedule</h2>
              <p className="fz-18p">
                <strong>
                  Tutors are free to take on as many students as they want, whether that be just one
                  or over a dozen.
                </strong>{' '}
                Tutoring jobs range from lasting for only a few lessons for students who want
                short-term help, to over a year for students looking for long-term support.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-8 mt-12x">
            <div className="relative w-1/2_lg">
              <img src={illustration9.src} alt="illustration9" />
            </div>
            <div className="text-wrap w-1/2_lg">
              <h2 className="fz-48p fw-600 l-height-1 mb-3x">Qualifications</h2>
              <p className="fz-18p">
                We are currently recruiting tutors for all subjects and admissions tests,{' '}
                <strong>
                  and in particular tutors who can teach UK and US curriculums and assist with
                  university applications and admissions tests.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      <HireFormBlock onlyContacts={true} />
      {page.width < MOBILE_BREAKPOINT && (
        <div className={`popup-wrapper ${activePopup ? 'block' : 'hidden'} ${styles.popupWrapper}`}>
          <span className="close" onClick={handler}>
            &times;
          </span>
          <ApplyForm />
        </div>
      )}
    </>
  )
}

export default TutorApplicationsPage
