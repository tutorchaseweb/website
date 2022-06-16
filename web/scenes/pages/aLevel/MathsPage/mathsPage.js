import Link from 'next/link'
import {
  ReviewBlock,
  BlueCardBlock,
  OurServiceBlock,
  HireFormBlock,
  RatedBlock,
} from '~/scenes/sections'
import SVG from '~/components/SVG'
import { star } from '~/utils/svgImages'
import tutors from '../data.json'
import styles from './style.module.scss'

export const MathsPage = () => {
  return (
    <>
      <section className={`first-screen text-center pt-20x pb-19x ${styles.firstScreen}`}>
        <div className="container">
          <p className="rating w-full flex items-center justify-center mb-4x">
            <span className="stars l-height-1 mr-1x">
              <SVG content={star()} size={20} />
              <SVG content={star()} size={20} />
              <SVG content={star()} size={20} />
              <SVG content={star()} size={20} />
              <SVG content={star()} size={20} />
            </span>
            4.92/5 based on{' '}
            <Link href={'/reviews'}>
              <a className="fw-600 ml-1x">214 reviews</a>
            </Link>
          </p>
          <h1 className="title fz-64p fw-700 l-height-1 mb-3x mx-auto">
            Online A-Level Maths Tutors
          </h1>
          <p className="description fz-20p l-height-1/4 mx-auto">
            Exam Preparation and Admissions Support. Delivered globally by the World's Top Tutors.
          </p>
          <div className="lesson-card w-full absolute bg-white rounded-small overflow-hidden">
            <p className="image"></p>
            <p className="text fw-700">Lesson 1</p>
          </div>
          <div className="play-card w-full absolute bg-white rounded-small">
            <span className="live fw-700 uppercase bg-orange color-white absolute rounded-xSmall">
              Live
            </span>
          </div>
        </div>
      </section>
      <section className={`filter pt-3x pb-3x ${styles.filter}`}>
        <div className="container">
          <div className="flex items-center justify-between">
            <form>
              <label className="mr-2x">
                <select>
                  <option value="unselected" selected disabled>
                    Select subject
                  </option>
                </select>
              </label>
              <label className="mr-2x">
                <select>
                  <option value="all-levels" selected>
                    All levels
                  </option>
                </select>
              </label>
            </form>
            <p className="fz-18p">
              Fully flexible pay-as-you-go tutoring |
              <span className="fz-20p fw-700 bg-blue color-white ml-1x">From £49/Hour</span>
            </p>
          </div>
        </div>
      </section>
      <section className={`tutors-list pt-11x ${styles.tutorsList}`}>
        <div className="container">
          <h2 className="fz-36p fw-600 l-height-1/4 mb-2x">A-Level Maths Tutor Spotlight</h2>
          <p className="description fz-18p mb-3x">
            Our A-Level Maths tutors have all studied at the UK's top universities, achieved A*
            grades, and have extensive tutoring experience.{' '}
            <strong>We'll find the perfect tutor for you based on your requirements!</strong>
          </p>
          <div className="flex flex-wrap gap-8">
            {tutors.map((tutor) => {
              return (
                <div key={tutor.id} className="tutors-card flex w-full border-light rounded-small">
                  <img src={tutor.avatar} alt={tutor.name} className="block" />
                  <div className="content">
                    <p>{tutor.description}</p>
                  </div>
                  <div className="actions">
                    <a href="#" onClick={(e) => console.log(e)}></a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <HireFormBlock />
    </>
  )
}

export default MathsPage
