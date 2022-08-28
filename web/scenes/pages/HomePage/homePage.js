import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import client from '~/utils/sanity-client'
import { getImageUrl, hireTutor, useWindowSize } from '~/utils/helpers'
import { MOBILE_BREAKPOINT } from '~/utils/constants'
import SVG from '~/components/SVG'
import {
  ReviewBlock,
  BlueCardBlock,
  OurServiceBlock,
  PartOfSection,
  HireFormBlock,
  RatedBlock,
  InteractiveBlock,
  BasedReviews,
} from '~/scenes/sections'
import { FlexibleCard } from '~/scenes/elements'
import {
  bookFull,
  openedBook,
  arrowTopRight,
  checkCircle,
  globe,
  videoCam,
} from '~/utils/svgImages'

import text from '~/assets/text-content/en/static.json'
import styles from './style.module.scss'

// all used images
import tutorImg from '~/assets/images/frame_48095504.png'
import tutor2Img from '~/assets/images/frame_480955042.png'
import avatarsImg from '~/assets/images/avatars.png'
import oxfordSmallLogo from '~/assets/images/oxford_logo.png'
import image_591 from '~/assets/images/image_591.png'
import image_592 from '~/assets/images/image_592.png'
import image_810 from '~/assets/images/image_810.png'
import image_811 from '~/assets/images/image_811.png'
import image_812 from '~/assets/images/image_812.png'
import image_813 from '~/assets/images/image_813.png'

const TutorCard = ({ tutor }) => {
  const university = tutor.universities[0]

  return (
    <Link key={tutor._id} href={`/tutors/${tutor.slug.current}`}>
      <a className="card block relative transition flex-1 border-light pt-6x pb-6x pl-3x pr-3x">
        <span className="arrow absolute transition top-0 right-0 flex items-center justify-center border-light">
          <SVG content={arrowTopRight()} size={20} />
        </span>
        <p className="avatar color-blue border border-round relative mx-auto overflow-hidden">
          <span className="relative block w-full h-full border-round overflow-hidden">
            <Image
              src={`${getImageUrl(tutor.image.asset._ref).width(300).height(300)}`}
              alt={tutor.name}
              className="block"
              layout="fill"
              objectFit="cover"
            />
          </span>
        </p>
        <p className="fz-18p fw-700 mb-1x">{tutor.name}</p>
        <p className="fw-600 l-height-1 color-lightGray mb-3x">{tutor.position}</p>
        <img
          src={`${getImageUrl(university.logo.asset._ref)}`}
          alt={university.title}
          style={{ height: '24px' }}
          className="mx-auto"
        />
      </a>
    </Link>
  )
}

export const HomePage = ({ page }) => {
  const [tutors, setTutors] = useState([])
  const [universities, setUniversities] = useState([])
  const getElectedTutors = `
      *[_type == 'tutor' && !(_id in path("drafts.**")) && elected==true][0...5] {
        ...,
        universities[]->
      }
    `
  const getUniversities = `
      *[_type == 'university' && !(_id in path("drafts.**"))] {
        ...,
      }
    `
  useEffect(async () => {
    setTutors(await client.fetch(getElectedTutors))
    setUniversities(await client.fetch(getUniversities))
  }, [])

  const window = useWindowSize()

  const {
    firstScreen,
    secondScreen,
    studyCards,
    reviewBlockFirst,
    tutorsList,
    fourthScreen,
    reviewBlockSecond,
    globallyTutoring,
    blueCard,
    seventhScreen,
    allReviewsBlock,
    servicesBlock,
  } = page

  console.log(blueCard)

  return (
    <>
      <section className={`first-screen pt-13x pt-19x_lg ${styles.firstScreen}`}>
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="text-wrapper pb-9x pb-0x_xl">
              {Boolean(firstScreen.title) && (
                <h1 className="main-title home fw-700 fz-40p mb-3x">
                  <PortableText value={firstScreen.title} />
                </h1>
              )}
              {Boolean(firstScreen.description) && (
                <div className="description mb-5x mb-7x_lg">
                  <PortableText value={firstScreen.description} />
                </div>
              )}
              <div className="buttons flex items-center">
                <Link href="/tutors">
                  <a className="btn btn-blue">{text.form.btnHireTutor}</a>
                </Link>
                <div className="rating">
                  <BasedReviews />
                </div>
              </div>
            </div>
            <div className="image-wrapper relative">
              <div className="blue-book absolute round bg-white flex items-center justify-center">
                <SVG content={bookFull()} size={32} />
              </div>
              <div className="lesson1 bg-white text-center absolute rounded-small">
                <div className="play bg-orange round relative mx-auto flex items-center justify-center mb-1x" />
                <p className="fw-700">Lesson 1</p>
                <p className="fz-12p">Trigonometry and graphs</p>
              </div>
              <div className="tutor absolute bg-white rounded-small">
                <div className="flex items-center">
                  <img src={tutorImg.src} alt="tutor" />
                  <p className="fz-14p fw-600 ml-2x">Tutors for any level</p>
                </div>
                <span className="wrap">
                  <span className="line bg-orange"></span>
                  <span className="line bg-orange"></span>
                  <span className="line bg-orange"></span>
                  <span className="line bg-orange"></span>
                </span>
                <span className="fz-14p fw-800 ml-1x">A/A+</span>
              </div>
              {Boolean(firstScreen.image) && (
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
            </div>
          </div>
        </div>
      </section>
      <section className={`universities bg-lightGray pt-5x pb-5x ${styles.universities}`}>
        <div className="container">
          <div className="partners-line flex flex-wrap gap-8 items-center justify-between">
            <div className="intro uppercase color-lightGray fw-500">
              {Boolean(firstScreen.universities) && (
                <PortableText value={firstScreen.universities} />
              )}
            </div>
            <div className="logos flex flex-wrap items-center justify-center">
              {Boolean(universities.length) &&
                universities.map((university) => {
                  return (
                    <img
                      key={university._id}
                      src={`${getImageUrl(university.logo.asset._ref)}`}
                      alt={university.title}
                      style={{ height: '35px' }}
                      className="mx-auto"
                    />
                  )
                })}
            </div>
          </div>
        </div>
      </section>
      <section className={`study ${styles.study}`}>
        <div className="container">
          {Boolean(secondScreen) && <PartOfSection section={secondScreen} />}
          <div className="cards-wrapper flex gap-8">
            <div className="card card-1 bg-blue rounded-small p-4x">
              <div className="flex items-center justify-between mb-4x">
                {Boolean(studyCards?.firstTitle) && (
                  <>
                    <p className="preTitle fw-600 uppercase">{studyCards.firstTitle}</p>
                    <SVG content={globe()} size={window.width < MOBILE_BREAKPOINT ? 20 : 28} />
                  </>
                )}
              </div>
              {Boolean(studyCards?.firstDescription) && (
                <h4 className="title fw-600 mb-5x">{studyCards.firstDescription}</h4>
              )}
              <p className="foot flex flex-wrap items-center">
                <img src={avatarsImg.src} alt="avatars" className="block mr-2x" />
                1000+ Satisfied Students
              </p>
            </div>
            <div className="card card-2 bg-lightGray rounded-small p-4x flex flex-col">
              <div className="flex items-center justify-between mb-4x">
                {Boolean(studyCards?.secondTitle) && (
                  <>
                    <p className="preTitle fw-600 uppercase">{studyCards.secondTitle}</p>
                    <SVG
                      content={checkCircle()}
                      size={window.width < MOBILE_BREAKPOINT ? 20 : 28}
                    />
                  </>
                )}
              </div>
              <div className="flex flex-col center justify-between flex-1">
                {Boolean(studyCards?.secondDescription) && (
                  <>
                    <h4 className="title fw-600">{studyCards.secondDescription}</h4>
                    <p className="logo">
                      <img
                        src={oxfordSmallLogo.src}
                        alt="Oxford Logo"
                        className="block"
                        width="68"
                      />
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="card card-3 bg-white rounded-small p-4x border-light">
              <div className="flex items-center justify-between mb-4x">
                {Boolean(studyCards?.thirdTitle) && (
                  <>
                    <p className="preTitle fw-600 uppercase">{studyCards.thirdTitle}</p>
                    <SVG content={openedBook()} size={window.width < MOBILE_BREAKPOINT ? 20 : 28} />
                  </>
                )}
              </div>
              {Boolean(studyCards?.thirdDescription) && (
                <h4 className="title fw-600 mb-3x">{studyCards.thirdDescription}</h4>
              )}
              <p className="color-blue fz-14p fw-600">
                {Boolean(studyCards?.thirdCardTags?.length) &&
                  studyCards.thirdCardTags.map((tag, idx) => (
                    <span key={idx} className="tag">
                      {tag}
                    </span>
                  ))}
              </p>
            </div>
          </div>
        </div>
      </section>
      <ReviewBlock {...reviewBlockFirst} />
      <section className={`tutors pt-5x pt-15x_lg pb-5x pb-15x_lg text-center ${styles.tutors}`}>
        <div className="container">
          {Boolean(tutorsList?.preTitle) && (
            <p className="before-title fw-600 uppercase color-lightGray mb-2x mb-3x_lg">
              {tutorsList.preTitle}
            </p>
          )}
          {Boolean(tutorsList?.title) && (
            <h2 className="section-title fw-600 mb-4x mb-6x_lg">{tutorsList.title}</h2>
          )}
          <div className="flex flex-wrap">
            {Boolean(tutors.length) &&
              tutors.map((tutor) => <TutorCard key={tutor._id} tutor={tutor} />)}
          </div>
        </div>
      </section>
      <section className={`premium pt-5x pb-10x pb-18x_lg ${styles.premium}`}>
        <div className="container">
          <div className="wrapper flex flex-wrap items-center">
            <div className="w-full w-1/2_lg relative">
              <FlexibleCard />
              {/*<div className="card absolute bg-white rounded-small p-3x">*/}
              {/*  <SVG content={videoCam()} size={32} className="mb-2x" />*/}
              {/*  <p className="fz-18p">*/}
              {/*    Flexible online tutoring to fit <b>around your schedule</b>*/}
              {/*  </p>*/}
              {/*</div>*/}
              {Boolean(fourthScreen.image) && (
                <img
                  src={`${getImageUrl(fourthScreen.image.asset._ref)}`}
                  alt="Premium Tutor"
                  className="block"
                />
              )}
              <div className="check-book absolute round bg-white flex items-center justify-center">
                <SVG content={checkCircle()} size={28} />
              </div>
            </div>
            <div className="text-wrap w-full w-1/2_lg mt-6x mt-0x_lg pl-10x_lg">
              <div className="flex items-center justify-between mb-6x">
                {Boolean(fourthScreen?.title) && (
                  <h2 className="medium-title fw-600">{fourthScreen.title}</h2>
                )}
                {window.width > MOBILE_BREAKPOINT && (
                  <a href="#hireFormBlock" className="btn btn-blue ml-5x" onClick={hireTutor}>
                    {text.form.btnHireTutor}
                  </a>
                )}
              </div>
              {Boolean(fourthScreen?.list.length) && (
                <ul className="ordered-list">
                  {fourthScreen.list.map((text, idx) => (
                    <li key={idx}>{text}</li>
                  ))}
                </ul>
              )}
              {window.width < MOBILE_BREAKPOINT && (
                <a href="#hireFormBlock" className="btn btn-blue mt-5x" onClick={hireTutor}>
                  {text.form.btnHireTutor}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
      <ReviewBlock {...reviewBlockSecond} />
      <section className={`globally pt-6x pt-15x_lg ${styles.globally}`}>
        <div className="container text-center">
          {Boolean(globallyTutoring?.preTitle) && (
            <p className="before-title fw-600 uppercase color-lightGray mb-3x">
              {globallyTutoring.preTitle}
            </p>
          )}
          {Boolean(globallyTutoring?.title) && (
            <h2 className="section-title fw-600 mb-6x mx-auto">{globallyTutoring.title}</h2>
          )}
        </div>
        <div className="map flex pt-2x pt-6x_lg pb-2x pb-15x_lg mb-7x mb-10x_lg">
          <div className="container relative">
            <p className="avatar logo_1 border border-round absolute mx-auto">
              <img
                src={image_810.src}
                alt="User photo"
                className="absolute inset-0 w-full h-full border-round"
              />
            </p>
            <p className="avatar logo_2 border border-round absolute mx-auto">
              <img
                src={image_811.src}
                alt="User photo"
                className="absolute inset-0 w-full h-full border-round"
              />
            </p>
            <p className="avatar logo_3 border border-round absolute mx-auto">
              <img
                src={image_812.src}
                alt="User photo"
                className="absolute inset-0 w-full h-full border-round"
              />
            </p>
            <p className="avatar logo_4 border border-round absolute mx-auto">
              <img
                src={image_591.src}
                alt="User photo"
                className="absolute inset-0 w-full h-full border-round"
              />
            </p>
            <p className="avatar logo_5 border border-round absolute mx-auto">
              <img
                src={image_592.src}
                alt="User photo"
                className="absolute inset-0 w-full h-full border-round"
              />
            </p>
            <p className="avatar logo_6 border border-round absolute mx-auto">
              <img
                src={image_813.src}
                alt="User photo"
                className="absolute inset-0 w-full h-full border-round"
              />
            </p>
            <p className="card_1 absolute rounded-small bg-white flex items-center">
              <span className="fz-18p fw-600 l-height-1/4 flex-1 pr-2x">
                Students in 70+ countries
              </span>
              <SVG content={checkCircle()} size={24} />
            </p>
            <p className="card_2 absolute rounded-small bg-white p-2x flex items-center">
              <span className="play bg-white round relative mx-auto flex items-center justify-center" />
              <span className="text ml-2x l-height-1/4">
                <span className="block fw-700">Lesson 2</span>
                <span className="block fz-14p">1h 30m</span>
              </span>
            </p>
            <p className="card_3 absolute rounded-small bg-white flex items-center p-2x">
              <img src={tutor2Img.src} alt="Tutor" />
              <span className="ml-2x fz-18p l-height-1/4">
                <span className="block fw-600">Tutors fit to your schedule</span>
                <span className="block fw-800">in your time zone</span>
              </span>
            </p>
          </div>
        </div>
        <div className="container narrow">
          <BlueCardBlock
            title={blueCard.title}
            content={blueCard.description}
            hireButton={blueCard.withButton}
          />
        </div>
      </section>
      <InteractiveBlock />
      <RatedBlock />
      <OurServiceBlock className="pt-8x pt-15x_lg pb-4x_lg" />
      <HireFormBlock />
    </>
  )
}

export default HomePage
