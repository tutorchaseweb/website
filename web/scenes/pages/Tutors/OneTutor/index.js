import Link from 'next/link'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { getImageUrl } from '~/utils/helpers'
import { Color, TUTOR_REVIEW_ITEMS } from '~/utils/constants'
import SVG from '~/components/SVG'
import { star, reviewsBlue, studyHat, videoCam, smallArrowRight } from '~/utils/svgImages'
import { HireFormBlock } from '~/scenes/sections'

import groupImg from '~/assets/images/group-427319714.png'
import ControlPanel from '~/assets/images/Control_Panel.png'
import styles from './style.module.scss'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useGlobalState } from '~/utils/state'

export const TutorPage = ({ tutor }) => {
  const router = useRouter()
  const { title, list } = tutor.reviews || {}
  const [firtsNumber, setFirstNumber] = useState(0)
  let lastNumber = firtsNumber + TUTOR_REVIEW_ITEMS
  const [reviewsList, setReviewsList] = useState(list?.slice(0, TUTOR_REVIEW_ITEMS))
  const [subjectQuery, setSubjectQuery] = useGlobalState('subjectQuery', null)

  useEffect(() => {
    createReviewsList()
  }, [firtsNumber])

  const createReviewBlock = (review, index) => {
    return (
      <div
        key={review._key + index}
        className="pt-3x pt-4x_lg pb-3x pb-4x_lg"
        style={{ borderTop: `1px solid ${index !== 0 ? '#E1E7ED' : 'transparent'}` }}
      >
        <div className="content mb-3x l-height-1/4">
          <PortableText value={review?.content} />
        </div>
        <p className="flex flex-wrap items-center">
          <span className="fw-700">{review?.author}</span>
          {review?.position ? (
            <>
              <span className="ml-1x mr-1x">|</span>
              {review?.position}
            </>
          ) : (
            ''
          )}
          <span className={`stars l-height-1 ${review?.position ? 'ml-2x_lg' : 'ml-3x_lg'}`}>
            <SVG content={star()} size={20} />
            <SVG content={star()} size={20} />
            <SVG content={star()} size={20} />
            <SVG content={star()} size={20} />
            <SVG content={star()} size={20} />
          </span>
        </p>
      </div>
    )
  }

  const createReviewsList = () => {
    return reviewsList?.map((item, index) => {
      return createReviewBlock(item, index)
    })
  }

  const onClick = () => {
    const newList = reviewsList.concat(list?.slice(firtsNumber, lastNumber))
    setFirstNumber(firtsNumber + TUTOR_REVIEW_ITEMS)
    setReviewsList(newList)
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(e.target.href)
    setSubjectQuery(null)
  }

  const redirectRules = (slug) => {
    if (slug === 'epq') return 'a-level/epq'
    else if (slug === 'extended-essay') return 'ib/extended-essay'
    else if (slug === 'tok') return 'ib/tok'
    else if (slug === 'ess') return 'ib/ess'
    else if (slug === 'business-management') return 'ib/business-management'
    else return slug
  }

  return (
    <>
      <section className={`pt-20x relative bg-lightGray ${styles.section}`}>
        <div className="container mb-7x">
          <nav aria-label="breadcrumbs">
            <ol className="breadcrumb flex fw-600">
              <li>
                <Link href="/tutors">
                  <a className="color-blue">Tutors</a>
                </Link>
              </li>
              <li>
                <SVG content={smallArrowRight()} size={10} className="ml-1x" />
                <span>Tutor Profile</span>
              </li>
            </ol>
          </nav>
        </div>
        <div className="container narrow">
          <div className={`bg-white rounded-rem flex items-center mb-4x ${styles.mainInfo}`}>
            <div className="avatar relative overflow-hidden rounded-small">
              <Image
                src={`${getImageUrl(tutor.image.asset._ref)}`}
                alt={tutor.name}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="content flex-1">
              <div className="wrap flex justify-between mb-3x pt-2x_lg">
                <h1 className="name fw-600 color-blue mb-1x mb-0x_lg">{tutor.name}</h1>
                <p className="rating flex items-center">
                  <span className="stars l-height-1 mr-1x">
                    <SVG content={star()} size={20} />
                    <SVG content={star()} size={20} />
                    <SVG content={star()} size={20} />
                    <SVG content={star()} size={20} />
                    <SVG content={star()} size={20} />
                  </span>
                  <Link href={'/reviews'}>
                    <a className="fw-600 ml-1x">Reviews</a>
                  </Link>
                </p>
              </div>
              <p className="fz-18p fw-600 flex items-center mb-2x">
                <SVG content={studyHat()} size={24} className="mr-1x studyHat" />
                {tutor.education}
              </p>
              <p className="description mb-4x">{tutor.description}</p>
              <p>
                <span className="fz-18p fw-600">Teaches:</span>
                {tutor.teaches.map((teach) => (
                  <a
                    key={teach._id}
                    href={`/${redirectRules(teach?.slug?.current)}`}
                    onClick={handleClick}
                    className="teach fz-14p fw-500 color-blue ml-1x mb-1x"
                  >
                    {teach.title}
                  </a>
                ))}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mb-4x rounded-rem overflow-hidden">
            <div className="w-full w-1/2_lg bg-white pt-4x pt-7x_lg pb-4x pb-8x_lg pl-3x pl-8x_lg pr-3x pr-8x_lg">
              <h3 className="fz-20p fw-600 mb-4x">Qualifications</h3>
              {tutor.qualifications.map((qualification, i) => {
                return (
                  <p key={qualification._key} className={`card ${i === 0 ? '' : 'mt-2x'}`}>
                    <span className="fw-600 color-blue mr-1x">{qualification.title}:</span>
                    {qualification.description}
                  </p>
                )
              })}
            </div>
            <div
              className={`w-full w-1/2_lg pt-4x pt-7x_lg pb-4x pb-8x_lg pl-3x pl-8x_lg pr-3x pr-8x_lg ${styles.vettedTutor}`}
            >
              <p className="fz-20p fw-600 color-blue flex items-center justify-between mb-5x">
                <span>Vetted Tutor</span>
                <SVG content={reviewsBlue()} size={24} />
              </p>
              <h3 className="medium-title fw-600 l-height-1 mb-3x color-orange">
                {tutor.position}
              </h3>
              <div>
                <PortableText value={tutor.vettedDescription} />
              </div>
            </div>
          </div>
          <div className="bg-white pt-4x pb-4x pl-3x pr-3x p-8x_lg mb-4x rounded-rem">
            <h3 className="fz-20p fw-600 mb-2x">Tutoring Experience</h3>
            <PortableText value={tutor.tutoringExperience} />
            <h3 className="fz-20p fw-600 mt-6x mb-2x">Tutoring Approach</h3>
            <PortableText value={tutor.tutoringApproach} />
          </div>
          <div
            className={`card pt-4x pt-5x_lg pb-10x pb-6x_lg pl-3x pl-8x_lg pr-3x pr-8x_lg rounded-rem mb-4x ${styles.experience}`}
          >
            <h3 className="fz-20p fw-600 mb-3x">Extracurricular Activities</h3>
            <div className="flex flex-wrap gap-2">
              {tutor.extracurricularActivities.map((activity, idx) => (
                <span key={idx} className="activity bg-white fw-500 l-height-1/4 rounded-xSmall">
                  {activity}
                </span>
              ))}
            </div>
          </div>
          {Boolean(list?.length > 0) && (
            <div
              className={`bg-white pt-4x pt-7x_lg pb-4x pl-3x pl-8x_lg pr-3x pr-8x_lg rounded-rem ${styles.reviews}`}
            >
              <h2 className="medium-title fw-600 ">{title}</h2>
              {createReviewsList(list)}
              {list?.length > TUTOR_REVIEW_ITEMS && lastNumber < list?.length && (
                <button className="reviewsLink color-blue fz-18p fw-600" onClick={onClick}>
                  Show more reviews
                </button>
              )}
            </div>
          )}
          <div className="mb-8x mb-15x_lg" />
          <div className={`flex items-center justify-between gap-8 mb-8x_lg ${styles.findTutor}`}>
            <div className="card bg-white rounded-small relative p-2x p-8x_lg">
              <div className="avatar relative rounded-xSmall overflow-hidden">
                <Image
                  src={groupImg.src}
                  alt={tutor.name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="flexible absolute p-1x pt-2x_lg pb-2x_lg pl-2x pl-3x_lg pr-2x pr-3x_lg rounded-small bg-white l-height-1/4">
                <SVG content={videoCam(Color.Orange)} size={28} />
                <p className="mt-2x_lg">
                  Flexible online tutoring to fit <b>around your schedule</b>
                </p>
              </div>
              <img src={ControlPanel.src} alt="Control Panel" className="controlPanel absolute" />
            </div>
            <div className="text">
              <p className="before-title fw-600 l-height-1 uppercase color-lightGray mb-3x">
                Study With Our Tutors
              </p>
              <h2 className="medium-title fw-600 l-height-1 mb-7x">
                Hire a tutor like {tutor.name}
              </h2>
              <Link href="#hireFormBlock">
                <a className="btn btn-blue">Enquire Now</a>
              </Link>
            </div>
          </div>
        </div>
        <HireFormBlock />
      </section>
    </>
  )
}

export default TutorPage
