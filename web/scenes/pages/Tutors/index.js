import { PortableText } from '@portabletext/react'
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
  const { firstScreen, filterDescription, tutorsSection, blueCard, reviewBlock, faqSection } = page

  return (
    <>
      <section
        className={`first-screen text-center pt-12x pt-20x_lg pb-8x pb-19x_lg ${styles.firstScreen}`}
      >
        <div className="container">
          <BasedReviews center={true} />
          <h1 className="main-title fw-700 l-height-1 mb-3x mx-auto">
            <PortableText value={firstScreen?.title} />
          </h1>
          <div className="description fz-20p l-height-1/4 mx-auto">
            <PortableText value={firstScreen?.description} />
          </div>
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
      <SubjectsFilter filterDescription={filterDescription} />
      <section className={`tutors-list pt-5x pt-11x_lg pb-10x pb-19x_lg ${styles.tutorsList}`}>
        <div className="container medium">
          <h2 className="section-title fw-600 l-height-1/4 mb-2x">{tutorsSection?.title}</h2>
          <div className="description fz-18p mb-3x">
            <PortableText value={tutorsSection?.description} />
          </div>
          <TutorsList tutors={tutors} />
        </div>
      </section>
      <section>
        <div className="container medium">
          <BlueCardBlock
            title={blueCard?.title}
            content={blueCard?.description}
            hireButton={blueCard?.withButton}
          />
        </div>
      </section>
      <InteractiveBlock />
      <ReviewBlock {...reviewBlock} />
      <OurServiceBlock className="pt-8x pt-15x_lg pb-8x pb-19x_lg" />
      <RatedBlock />
      <FAQ faqSection={faqSection} />
      <HireFormBlock />
    </>
  )
}

export default TutorsPage
