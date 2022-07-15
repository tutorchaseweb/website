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
    </>
  )
}

export default TutorApplicationsPage
