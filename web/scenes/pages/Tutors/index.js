import { useGlobalState } from '~/utils/state'
import {
  BasedReviews,
  BlueCardBlock,
  FAQ,
  HireFormBlock,
  InteractiveBlock,
  OurServiceBlock,
  RatedBlock,
  ReviewBlock,
  SubjectsFilter,
  TutorsList,
} from '~/scenes/sections'

import styles from './style.module.scss'

export const TutorsPage = ({ tutors }) => {
  const [levelQuery] = useGlobalState('levelQuery', null)
  const [subjectQuery] = useGlobalState('subjectQuery', null)

  return (
    <>
      <section
        className={`first-screen text-center pt-12x pt-20x_lg pb-8x pb-19x_lg ${styles.firstScreen}`}
      >
        <div className="container">
          <BasedReviews center={true} />
          <h1 className="main-title fw-700 l-height-1 mb-3x mx-auto">
            {`Online ${levelQuery?.title ? levelQuery.title : ''} ${
              subjectQuery?.title ? subjectQuery.title : ''
            } Tutors`}
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
      <SubjectsFilter />
      <section className={`tutors-list pt-11x pb-19x ${styles.tutorsList}`}>
        <div className="container medium">
          <h2 className="section-title fw-600 l-height-1/4 mb-2x">
            {`${levelQuery?.title ? levelQuery.title : ''} ${
              subjectQuery?.title ? subjectQuery.title : ''
            } Tutor Spotlight`}
          </h2>
          <p className="description fz-18p mb-3x">
            Our{' '}
            {`${levelQuery?.title ? levelQuery.title : ''} ${
              subjectQuery?.title ? subjectQuery.title : ''
            }`}{' '}
            tutors have all studied at the UK's top universities, achieved A* grades, and have
            extensive tutoring experience.{' '}
            <strong>We'll find the perfect tutor for you based on your requirements!</strong>
          </p>
          <TutorsList tutors={tutors} />
        </div>
      </section>
      <section>
        <div className="container medium">
          <BlueCardBlock
            title={'Our academic consultants will find the perfect tutor for you!'}
            content={
              "Looking for something specific? Get in touch with us now and we'll find the best tutor for you."
            }
          />
        </div>
      </section>
      <InteractiveBlock />
      <ReviewBlock
        content={
          'My Son had an excellent tutor who helped him in preparing for his STEP exam. Her teaching style was very good, allowing him to solve the Maths problem by himself with a little hint, rather than helping him with the answer. Highly recommend Tutor Chase, they helped me to find the right Tutor within our Budget and the tutor was a Cambridge Mathematics Graduate, which we were looking for.'
        }
        author={'Elizabeth'}
        position={'Parent of English student'}
      />
      <OurServiceBlock />
      <div className="pt-15x"></div>
      <RatedBlock />
      <FAQ />
      <HireFormBlock />
    </>
  )
}

export default TutorsPage
