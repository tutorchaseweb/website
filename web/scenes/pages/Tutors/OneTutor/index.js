import Link from 'next/link'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { getImageUrl } from '~/utils/helpers'
import SVG from '~/components/SVG'
import { HireFormBlock } from '~/scenes/sections'
import { star, reviewsBlue, studyHat, videoCam } from '~/utils/svgImages'

import ControlPanel from '~/assets/images/Control_Panel.png'
import styles from './style.module.scss'

export const TutorPage = ({ tutor }) => {
  return (
    <>
      <section className={`pt-20x relative bg-lightGray ${styles.section}`}>
        <div className="container narrow">
          <div className={`bg-white rounded-rem pt-7x pb-8x pl-8x pr-8x mb-4x ${styles.mainInfo}`}>
            <div className="flex items-center">
              <div className="avatar relative">
                <Image
                  src={`${getImageUrl(tutor.image.asset._ref)}`}
                  alt={tutor.name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="content flex-1 pl-6x">
                <div className="flex items-center justify-between mb-3x">
                  <h1 className="fz-36p fw-600 color-blue">{tutor.name}</h1>
                  <p className="rating flex items-center justify-center">
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
                  <SVG content={studyHat()} size={24} className="mr-1x" />
                  {tutor.education}
                </p>
                <p className="description mb-4x">{tutor.description}</p>
                <p>
                  <span className="fz-18p fw-600">Teaches:</span>
                  {tutor.teaches.map((teach) => (
                    <span className="teach fz-14p color-blue ml-1x mb-1x">{teach.title}</span>
                  ))}
                </p>
              </div>
            </div>
          </div>
          <div className="flex mb-4x rounded-rem overflow-hidden">
            <div className="w-1/2_lg bg-white pt-7x pb-8x pl-8x pr-8x">
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
            <div className={`w-1/2_lg pt-7x pb-8x pl-8x pr-8x ${styles.vettedTutor}`}>
              <p className="fz-20p fw-600 color-blue flex items-center justify-between mb-5x">
                <span>Vetted Tutor</span>
                <SVG content={reviewsBlue()} size={24} />
              </p>
              <h3 className="title fz-32p fw-600 l-height-1 mb-3x">
                {tutor.position} by <span className="color-orange">TutorChase</span>
              </h3>
              <div>
                <PortableText value={tutor.vettedDescription} />
              </div>
            </div>
          </div>
          <div className="bg-white p-8x mb-4x rounded-rem">
            <h3 className="fz-20p fw-600 mb-2x">Tutoring Experience</h3>
            <PortableText value={tutor.tutoringExperience} />
            <h3 className="fz-20p fw-600 mt-6x mb-2x">Tutoring Approach</h3>
            <PortableText value={tutor.tutoringApproach} />
          </div>
          <div className={`card pt-5x pb-6x pl-8x pt-8x rounded-rem mb-4x ${styles.experience}`}>
            <h3 className="fz-20p fw-600 mb-3x">Extracurricular Activities</h3>
            {tutor.extracurricularActivities.map((activity) => (
              <span className="activity bg-white fw-500 l-height-1/4 rounded-xSmall">
                {activity}
              </span>
            ))}
          </div>
          <div className="bg-white pt-7x pb-4x pl-8x pr-8x mb-15x rounded-rem">
            <h2 className="fz-36p fw-600 ">Tutor reviews</h2>
            {tutor.reviews.map((review, idx) => {
              return (
                <div
                  key={review._id}
                  className="pt-4x pb-4x"
                  style={{ borderTop: `1px solid ${idx !== 0 ? '#E1E7ED' : 'transparent'}` }}
                >
                  <p className="fz-18p mb-3x">{review.content}</p>
                  <p className="flex items-center">
                    <span className="fw-700">{review.author}</span>
                    <span className="ml-1x mr-1x">|</span>
                    {review.position}
                    <span className="stars l-height-1 ml-2x">
                      <SVG content={star()} size={20} />
                      <SVG content={star()} size={20} />
                      <SVG content={star()} size={20} />
                      <SVG content={star()} size={20} />
                      <SVG content={star()} size={20} />
                    </span>
                  </p>
                </div>
              )
            })}
          </div>
          <div className={`flex items-center justify-between gap-8 mb-8x ${styles.findTutor}`}>
            <div className="card bg-white rounded-small relative p-8x">
              <div className="avatar relative rounded-xSmall overflow-hidden">
                <span className="live absolute bg-white color-blue fw-700 l-height-1">Live</span>
                <Image
                  src={`${getImageUrl(tutor.image.asset._ref)}`}
                  alt={tutor.name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="flexible absolute pt-2x pb-2x pl-3x pr-3x rounded-small bg-white">
                <SVG content={videoCam()} size={28} />
                <p className="mt-2x">
                  Flexible online tutoring to fit <b>around your schedule</b>
                </p>
              </div>
              <img src={ControlPanel.src} alt="Control Panel" className="controlPanel absolute" />
            </div>
            <div className="text">
              <p className="fz-18p fw-600 l-height-1 uppercase color-lightGray mb-3x">
                Study With Our Tutors
              </p>
              <h2 className="fz-36p fw-600 l-height-1 mb-7x">Find a tutor like {tutor.name}</h2>
              <a href="#" className="btn btn-blue">
                Go Explore
              </a>
            </div>
          </div>
        </div>
        <HireFormBlock />
      </section>
    </>
  )
}

export default TutorPage
