import Link from 'next/link'
import { Circle } from '~/components/Circle'
import { Color } from '~/utils/constants'
import SVG from '~/components/SVG'
import { awesomeStar, studyHat } from '~/utils/svgImages'
import {
  BasedReviews,
  SubjectsFilter,
  HireFormBlock,
  FAQ,
  RatedBlock,
  OurServiceBlock,
  ReviewBlock,
  BlueCardBlock,
  TutorsList,
} from '~/scenes/sections'
import tutors from '~/scenes/pages/aLevel/data.json'
import girl from '~/assets/images/girl-2.png'
import oxford from '~/assets/images/oxford_logo2.png'
import illustration11 from '~/assets/images/illustration-11.png'
import illustration12 from '~/assets/images/illustration-12.png'
import illustration13 from '~/assets/images/illustration-13.png'
import illustration14 from '~/assets/images/illustration-14.png'
import styles from './style.module.scss'

export const OxbridgePage = () => {
  return (
    <>
      <section className={`pt-16x ${styles.firstScreen}`}>
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="text-wrapper mb-10x">
              <BasedReviews />
              <h1 className="fz-64p fw-700 l-height-1 mt-3x mb-3x">
                Online <strong>Oxbridge</strong> Tutoring
              </h1>
              <p className="fz-20p fw-500 l-height-1/4 mb-3x">
                Delivered Globally by the UK's Best Tutors
              </p>
              <Link href="/tutors">
                <a className="btn btn-blue">Hire a Tutor</a>
              </Link>
            </div>
            <div className="image-wrapper relative">
              <div className="left-card absolute bg-white rounded-xSmall p-3x flex">
                <p className="fz-18p fw-500 l-height-1/4 pr-3x">
                  Trusted by <span className="fw-600">Oxford University</span> as a tutoring partner
                </p>
                <SVG content={studyHat()} size={28} />
              </div>
              <img src={girl.src} alt="Employer" className="block" />
              <div className="right-card absolute">
                <Circle color={Color.White} size={88} classList="pt-1x">
                  <img src={oxford.src} alt="Oxford logo" />
                </Circle>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SubjectsFilter />
      <section className={`bg-white pt-12x pb-18x ${styles.content}`}>
        <div className="container narrow">
          <div className="video-block flex mb-15x">
            <div className="text bg-lightBlue pl-8x pr-8x pt-10x pb-10x w-1/2">
              <h4>Lorem ipsum dolor</h4>
              <p className="l-height-1/4">
                We provide online tutoring to support students applying to{' '}
                <span className="fw-600">Oxford and Cambridge University.</span>
              </p>
              <p className="l-height-1/4">
                We match students with a highly selective group of accomplished tutors who have
                studied the{' '}
                <span className="fw-600">applicant's chosen subject at Oxford or Cambridge.</span>
              </p>
            </div>
            <div className="video w-1/2">
              <img src={illustration11.src} alt="illustration" className="block" />
            </div>
          </div>
          <div className="text-center">
            <p className="fz-18p fw-600 uppercase color-lightGray mb-3x">Lorem ipsum</p>
            <h2 className="title fz-48p fw-600 mb-6x mx-auto">Flexibility</h2>
          </div>
          <div className="flex items-center" style={{ gap: '6rem' }}>
            <img src={illustration12.src} alt="illustration" />
            <div className="flex-1">
              <h4 className="fz-32p fw-600 l-height-1/4 mb-3x">Premium UK and US Tutors</h4>
              <ul className="ordered-list fz-18p">
                <li>
                  Our tutors teach applicants the subject material required for their particular
                  admissions test
                </li>
                <li>
                  They instruct applicants in the necessary exam techniques to perform to the best
                  of their abilities
                </li>
                <li>Past papers are covered to familiarise students with the test</li>
              </ul>
            </div>
          </div>
          <div
            className="flex items-center mt-15x"
            style={{ gap: '6rem', flexDirection: 'row-reverse' }}
          >
            <img src={illustration13.src} alt="illustration" />
            <div className="flex-1">
              <h4 className="fz-32p fw-600 l-height-1/4 mb-3x">Personal Statement Guidance</h4>
              <ul className="ordered-list fz-18p">
                <li>
                  The applicant can write their personal statement under the supervision of a tutor
                </li>
                <li>
                  The tutor will suggest further reading which the student can mention in their
                  statement
                </li>
                <li>
                  The structure and content of the personal statement will be reviewed by the tutor
                  before being submitted
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center mt-15x" style={{ gap: '6rem' }}>
            <img src={illustration14.src} alt="illustration" />
            <div className="flex-1">
              <h4 className="fz-32p fw-600 l-height-1/4 mb-3x">Interview Preparation</h4>
              <ul className="ordered-list fz-18p">
                <li>
                  The applicant is taught how to effectively answer questions and communicate well
                  in an interview
                </li>
                <li>
                  The applicant and tutor will run through a bank of past and potential interview
                  questions
                </li>
                <li>
                  Mock interviews are given to simulate the real conditions of an Oxbridge interview
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container narrow">
          <div className="card bg-lightBlue p-8x rounded-small">
            <h4 className="mb-2x">Admissions Tests</h4>
            <p className="fz-18p mb-4x">
              We offer tuition for all the Oxford and Cambridge University admissions tests:
            </p>
            <p className="flex flex-wrap gap-4 fw-500 l-height-1">
              <span className="tag bg-white pt-1x pb-1x pl-2x pr-2x rounded-xSmall">MAT</span>
              <span className="tag bg-white pt-1x pb-1x pl-2x pr-2x rounded-xSmall">TSA</span>
              <span className="tag bg-white pt-1x pb-1x pl-2x pr-2x rounded-xSmall">HAT</span>
              <span className="tag bg-white pt-1x pb-1x pl-2x pr-2x rounded-xSmall">OLAT</span>
              <span className="tag bg-white pt-1x pb-1x pl-2x pr-2x rounded-xSmall">PAT</span>
              <span className="tag bg-white pt-1x pb-1x pl-2x pr-2x rounded-xSmall">ELAT</span>
              <span className="tag bg-white pt-1x pb-1x pl-2x pr-2x rounded-xSmall">MLAT</span>
              <span className="tag bg-white pt-1x pb-1x pl-2x pr-2x rounded-xSmall">
                Philosophy Test
              </span>
            </p>
          </div>
        </div>
      </section>
      {/*<TutorsList tutors={tutors} />*/}
      <section className={`tutors-list pt-11x pb-19x ${styles.tutorsList}`}>
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
                <div key={tutor.id} className="tutor-card flex w-full border-light rounded-small">
                  <img src={tutor.avatar} alt={tutor.name} className="block" />
                  <div className="content p-4x">
                    <p className="flex items-center mb-4x">
                      <span className="fz-22p fw-600 mr-3x">{tutor.name}</span>
                      <SVG content={awesomeStar()} size={24} />
                      <span className="fz-14p fw-500 ml-1x">{tutor.position}</span>
                    </p>
                    <p className="flex items-center fw-500 mb-2x">
                      <SVG content={studyHat()} size={24} className="mr-1x" />
                      {tutor.education}
                    </p>
                    <p className="l-height-1/5">{tutor.description}</p>
                  </div>
                  <div className="actions">
                    <p className="fz-14p fw-600 l-height-1/4 pt-4x pb-4x pl-3x pr-3x">
                      <span className="mr-1x">Teaches:</span>
                      {tutor.teaches.map((teach) => (
                        <span className="teach mr-1x mb-1x">{teach}</span>
                      ))}
                    </p>
                    <a href="" className="btn btn-white w-full">
                      View profile
                    </a>
                    <a href="" className="btn btn-blue w-full">
                      Hire a tutor
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="pb-15x">
        <div className="container narrow">
          <BlueCardBlock
            title="Our academic consultants will find the perfect tutor for you!"
            content="Looking for something specific? Get in touch with us now and we'll find the best tutor for you."
          />
        </div>
      </section>
      <ReviewBlock
        content={`My Son had an excellent tutor who helped him in preparing for his STEP exam. Her
          teaching style was very good, allowing him to solve the Maths problem by himself
          with a little hint, rather than helping him with the answer. <b> Highly recommend 
          Tutor Chase, they helped me to find the right Tutor within our Budget and the tutor 
          was a Cambridge Mathematics Graduate, which we were looking for.</b>`}
        author={'Elizabeth'}
        position={'Parent of English student'}
      />
      <OurServiceBlock />
      <RatedBlock />
      <FAQ />
      <HireFormBlock />
    </>
  )
}
export default OxbridgePage
