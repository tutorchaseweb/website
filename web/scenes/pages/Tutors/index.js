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

export const TutorsPage = ({ page, tutors }) => {
  const { blueCard, reviewBlock } = page
  const [levelQuery] = useGlobalState('levelQuery', null)
  const [subjectQuery] = useGlobalState('subjectQuery', null)
  console.log(page)

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
      <section className={`tutors-list pt-5x pt-11x_lg pb-10x pb-19x_lg ${styles.tutorsList}`}>
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
            title={blueCard.title}
            content={blueCard.description}
            hireButton={blueCard.withButton}
          />
        </div>
      </section>
      <InteractiveBlock />
      <ReviewBlock {...reviewBlock} />
      <OurServiceBlock className="pt-8x pt-15x_lg pb-8x pb-19x_lg" />
      <RatedBlock />
      <FAQ />
      <HireFormBlock />
    </>
  )
}

export default TutorsPage
