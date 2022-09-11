import { useEffect, useState } from 'react'
import Link from 'next/link'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { PortableText } from '@portabletext/react'
import { Circle } from '~/components/Circle'
import { Color, MOBILE_BREAKPOINT } from '~/utils/constants'
import { getImageUrl, hireTutor, useWindowSize } from '~/utils/helpers'
import SVG from '~/components/SVG'
import { studyHat, checkCircle, play, bookFull, handshake } from '~/utils/svgImages'
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
import styles from './style.module.scss'
import text from '~/assets/text-content/en/static.json'

export const OxbridgePage = ({ page, tutors }) => {
  const {
    firstScreen,
    filterDescription,
    firstSection,
    secondScreen,
    secondScreenPartOne,
    secondScreenPartThree,
    secondScreenPartTwo,
    admissionsTests,
    tutorsSection,
    blueCard,
    reviewBlock,
    faqSection,
  } = page
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
                <PortableText value={firstScreen?.title} />
              </h1>
              {Boolean(firstScreen?.description) && (
                <div className="fz-20p fw-500 l-height-1/4 mb-3x">
                  <PortableText value={firstScreen?.description} />
                </div>
              )}
              {Boolean(firstScreen?.withButton) && (
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
              {Boolean(firstScreen?.image) && window.width > MOBILE_BREAKPOINT && (
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
      <SubjectsFilter filterDescription={filterDescription} />
      <section className={`bg-white pt-12x pb-18x ${styles.content}`}>
        <div className="container narrow">
          <div className="video-block flex flex-wrap mb-15x overflow-hidden rounded-rem">
            <div className="text bg-lightBlue pl-3x pl-8x_lg pr-3x pr-8x_lg pt-4x pt-10x_lg pb-4x pb-10x_lg w-1/2_lg">
              <h4 className="fz-32p mb-3x">{firstSection?.title}</h4>
              <div className="l-height-1/4 mb-2x">
                <PortableText value={firstSection?.description} />
              </div>
            </div>
            <div className="video w-1/2_lg mx-auto">
              <img
                src={`${getImageUrl(firstSection?.image.asset._ref)}`}
                alt="illustration"
                className="block"
              />
            </div>
          </div>
          <div className="text-center">
            <p className="before-title fw-600 uppercase color-lightGray mb-3x">
              {secondScreen?.preTitle}
            </p>
            <h2 className="section-title fw-600 mb-6x mx-auto">{secondScreen?.title}</h2>
          </div>
          <div className="section-row flex flex-wrap items-center" style={{ gap: '6rem' }}>
            <div className="image-wrap relative">
              <div className="absolute bg-white p-2x flex gap-4 items-center rounded-xSmall exams">
                <span className="fz-18p fw-600 l-height-1/2">
                  School <br />
                  Exams
                </span>
                <SVG content={checkCircle()} size={28} />
              </div>
              <Circle
                color={Color.White}
                size={window.width < MOBILE_BREAKPOINT ? 44 : 74}
                classList="absolute studyHat"
              >
                <SVG content={studyHat(Color.Blue)} size={28} />
              </Circle>
              <div className="absolute lesson rounded-xSmall p-2x pr-3x flex items-center gap-4 color-white">
                <Circle color={Color.White} size={42}>
                  <SVG content={play()} size={24} />
                </Circle>
                <p>
                  <span className="block fw-700">Lesson 2</span>
                  <span className="fz-14p">1h 30m</span>
                </p>
              </div>
              <img
                src={`${getImageUrl(secondScreenPartOne?.image.asset._ref)}`}
                alt="illustration"
              />
            </div>
            <div className="text-wrap">
              <h4 className="fz-32p fw-600 l-height-1/4 mb-3x">{secondScreenPartOne?.title}</h4>
              <ul className="ordered-list fz-18p">
                {secondScreenPartOne?.list.map((item, index) => {
                  return <li key={index + 1}>{item}</li>
                })}
              </ul>
            </div>
          </div>
          <div
            className="section-row flex flex-wrap items-center mt-15x"
            style={{ gap: '6rem', flexDirection: 'row-reverse' }}
          >
            <div className="image-wrap relative">
              <div className="literature absolute bg-white rounded-xSmall px-3x py-2x">
                <SVG content={bookFull()} size={24} />
                <span className="block fw-600 l-height-1/2 mt-1x_lg">
                  List of required <br />
                  literature
                </span>
              </div>
              <div className="statement absolute bg-white rounded-xSmall p-3x pr-4x l-height-1/2 flex gap-4 items-center">
                <p>
                  <span className="fz-11p fw-600 block">Personal Statement</span>
                  <span>Of The Applicant</span>
                </p>
                <SVG content={checkCircle()} size={28} />
              </div>
              <img
                src={`${getImageUrl(secondScreenPartTwo?.image.asset._ref)}`}
                alt="illustration"
              />
            </div>
            <div className="text-wrap">
              <h4 className="fz-32p fw-600 l-height-1/4 mb-3x">{secondScreenPartTwo?.title}</h4>
              <ul className="ordered-list fz-18p">
                {secondScreenPartTwo?.list.map((item, index) => {
                  return <li key={index + 2}>{item}</li>
                })}
              </ul>
            </div>
          </div>
          <div className="section-row flex flex-wrap items-center mt-15x" style={{ gap: '6rem' }}>
            <div className="image-wrap relative">
              <Circle
                color={'#B1BFFF'}
                size={window.width < MOBILE_BREAKPOINT ? 56 : 96}
                classList="absolute handshake"
              >
                <SVG content={handshake()} size={window.width < MOBILE_BREAKPOINT ? 24 : 36} />
              </Circle>
              <div className="blank absolute bg-white rounded-xSmall p-2x">
                <p className="flex items-center justify-between">
                  <span className="fw-600">Blank</span>
                  <SVG content={checkCircle()} size={24} />
                </p>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
              <img
                src={`${getImageUrl(secondScreenPartThree?.image.asset._ref)}`}
                alt="illustration"
              />
            </div>
            <div className="text-wrap">
              <h4 className="fz-32p fw-600 l-height-1/4 mb-3x">{secondScreenPartThree?.title}</h4>
              <ul className="ordered-list fz-18p">
                {secondScreenPartThree?.list.map((item, index) => {
                  return <li key={index + 3}>{item}</li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container narrow">
          <div className="card bg-lightBlue pt-4x pb-4x pl-3x pr-3x p-8x_lg rounded-small">
            <h4 className="mb-2x">{admissionsTests?.title}</h4>
            <div className="fz-18p mb-4x">
              <PortableText value={admissionsTests?.description} />
            </div>
            {Boolean(tests.length) && (
              <p className="flex flex-wrap gap-4 fw-500 l-height-1">
                {admissionsTests?.tests.map((test) => {
                  return (
                    <Link
                      key={test._id}
                      href={test._type === 'subject' ? test.slug.current : '/tutors'}
                    >
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
          <h2 className="fz-36p fw-600 l-height-1/4 mb-2x">{tutorsSection?.title}</h2>
          <div className="description fz-18p mb-3x">
            <PortableText value={tutorsSection?.description} />
          </div>
          <TutorsList tutors={tutors} />
        </div>
      </section>
      <section>
        <div className="container narrow">
          <BlueCardBlock
            title={blueCard?.title}
            content={blueCard?.description}
            hireButton={blueCard?.withButton}
          />
        </div>
      </section>
      <InteractiveBlock className="bg-lightGray" />
      <ReviewBlock {...reviewBlock} />
      <OurServiceBlock className="pt-8x pt-15x_lg pb-8x pb-18x_lg" />
      <RatedBlock />
      <FAQ faqSection={faqSection} />
      <HireFormBlock />
    </>
  )
}
export default OxbridgePage
