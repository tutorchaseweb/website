import { useEffect, useState } from 'react'
import Link from 'next/link'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { PortableText } from '@portabletext/react'
import { Circle } from '~/components/Circle'
import { Color, MOBILE_BREAKPOINT } from '~/utils/constants'
import { getImageUrl, hireTutor, useWindowSize } from '~/utils/helpers'
import { useGlobalState } from '~/utils/state'
import SVG from '~/components/SVG'
import { studyHat } from '~/utils/svgImages'
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
  InteractiveBlock,
} from '~/scenes/sections'

import oxford from '~/assets/images/oxford_logo2.png'
import illustration11 from '~/assets/images/illustration-11.png'
import illustration12 from '~/assets/images/illustration-12.png'
import illustration13 from '~/assets/images/illustration-13.png'
import illustration14 from '~/assets/images/illustration-14.png'
import styles from './style.module.scss'
import text from '~/assets/text-content/en/static.json'

export const AdditionalPage = ({ title = 'Oxbridge', page, tutors }) => {
  const { firstScreen } = page

  const [levelQuery] = useGlobalState('levelQuery', null)
  const [subjectQuery] = useGlobalState('subjectQuery', null)
  const window = useWindowSize()
  const [tests, setTests] = useState([])
  useEffect(async () => {
    const QUERY = groq`
        *[_type == 'test'] {
          ...,
        }
      `
    setTests(await client.fetch(QUERY))
  }, [])

  return (
    <>
      <section className={`pt-16x ${styles.firstScreen}`}>
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="text-wrapper mb-10x">
              <BasedReviews />
              <h1 className="main-title fw-700 l-height-1 mt-3x mb-3x">
                Online <span className="color-blue">{title}</span> Tutoring
              </h1>
              {Boolean(firstScreen.description) && (
                <div className="fz-20p fw-500 l-height-1/4 mb-3x">
                  <PortableText value={firstScreen.description} />
                </div>
              )}
              {Boolean(firstScreen.withButton) && (
                <a href="#hireFormBlock" className="btn btn-blue" onClick={hireTutor}>
                  {text.form.btnHireTutor}
                </a>
              )}
            </div>
            <div className="image-wrapper relative">
              <div className="left-card absolute bg-white rounded-xSmall p-3x flex">
                <p className="fz-18p fw-500 l-height-1/4 pr-3x">
                  Trusted by <span className="fw-600">Oxford University</span> as a tutoring partner
                </p>
                <SVG content={studyHat()} size={28} />
              </div>
              {Boolean(firstScreen.image) && window.width > MOBILE_BREAKPOINT && (
                <img
                  src={`${getImageUrl(firstScreen.image.asset._ref)}`}
                  alt="Elite Online Tutoring"
                  className="block"
                  style={{
                    maxWidth: '550px',
                    maxHeight: '650px',
                  }}
                />
              )}
              <div className="right-card absolute">
                <Circle
                  color={Color.White}
                  size={window.width < MOBILE_BREAKPOINT ? 76 : 88}
                  classList="pt-1x"
                >
                  <img
                    src={oxford.src}
                    alt="Oxford logo"
                    width={window.width < MOBILE_BREAKPOINT ? 42 : 48}
                  />
                </Circle>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SubjectsFilter />
      <section className={`bg-white pt-12x pb-18x ${styles.content}`}>
        <div className="container narrow">
          <div className="video-block flex flex-wrap mb-15x overflow-hidden rounded-rem">
            <div className="text bg-lightBlue pl-3x pl-8x_lg pr-3x pr-8x_lg pt-4x pt-10x_lg pb-4x pb-10x_lg w-1/2_lg">
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
            <div className="video w-1/2_lg">
              <img src={illustration11.src} alt="illustration" className="block" />
            </div>
          </div>
          <div className="text-center">
            <p className="fz-18p fw-600 uppercase color-lightGray mb-3x">Lorem ipsum</p>
            <h2 className="title fz-48p fw-600 mb-6x mx-auto">Flexibility</h2>
          </div>
          <div className="flex flex-wrap items-center" style={{ gap: '6rem' }}>
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
            className="flex flex-wrap items-center mt-15x"
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
          <div className="flex flex-wrap items-center mt-15x" style={{ gap: '6rem' }}>
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
            {Boolean(tests.length) && (
              <p className="flex flex-wrap gap-4 fw-500 l-height-1">
                {tests.map((test) => {
                  return (
                    <Link key={test._id} href={test.slug.current}>
                      <a className="tag bg-white pt-1x pb-1x pl-2x pr-2x rounded-xSmall">
                        {test.title}
                      </a>
                    </Link>
                  )
                })}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className={`tutors-list pt-11x pb-19x ${styles.tutorsList}`}>
        <div className="container">
          <h2 className="fz-36p fw-600 l-height-1/4 mb-2x">
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
        <div className="container narrow">
          <BlueCardBlock
            title="Our academic consultants will find the perfect tutor for you!"
            content="Looking for something specific? Get in touch with us now and we'll find the best tutor for you."
          />
        </div>
      </section>
      <InteractiveBlock className="bg-lightGray" />
      <ReviewBlock
        content={[
          {
            children: [
              {
                _key: '732f73c272500',
                _type: 'span',
                marks: [],
                text: '“My Son had an excellent tutor who helped him in preparing for his STEP exam. Her teaching style was very good, allowing him to solve the Maths problem by himself with a little hint, rather than helping him with the answer. ',
              },
              {
                _key: '6d7c9623776d',
                _type: 'span',
                marks: ['strong'],
                text: 'Highly recommend Tutor Chase, they helped me to find the right Tutor within our Budget and the tutor was a Cambridge Mathematics Graduate, which we were looking for."',
              },
            ],
            markDefs: [],
            style: 'normal',
            _key: '76caeeb6a572',
            _type: 'block',
          },
        ]}
        author={'Elizabeth'}
        position={'Parent of English student'}
      />
      <OurServiceBlock className="pt-8x pt-15x_lg pb-8x pb-18x_lg" />
      <RatedBlock />
      <FAQ />
      <HireFormBlock />
    </>
  )
}
export default AdditionalPage
