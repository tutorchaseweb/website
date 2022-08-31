import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SVG from '~/components/SVG'
import { awesomeStar, studyHat } from '~/utils/svgImages'
import { getImageUrl, useWindowSize } from '~/utils/helpers'
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT, TUTORS_LIST_STEP } from '~/utils/constants'
import styles from './style.module.scss'
import { useRouter } from 'next/router'

import text from '~/assets/text-content/en/static.json'

export const TutorsList = ({ tutors }) => {
  const [tutorsLimit, setTutorsLimit] = useState(TUTORS_LIST_STEP)
  const view = useWindowSize()
  const router = useRouter()
  const orderedTutors = tutors.sort((first, second) => second.sortingRating - first.sortingRating)

  const hireTutor = (event) => {
    event.preventDefault()
    const target = document.querySelector(event.target.hash)
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      })
    } else {
      router.push('/tutors')
    }
  }

  return (
    <div className="flex flex-wrap gap-8">
      {Boolean(tutors.length) ? (
        orderedTutors.slice(0, tutorsLimit).map((tutor) => {
          return (
            <div
              key={tutor._id}
              className={`tutor-card flex w-full flex-wrap border-light rounded-small overflow-hidden ${styles.card}`}
            >
              <div className="relative image-wrapper">
                <Image
                  src={`${getImageUrl(tutor.image.asset._ref).width(300).height(300)}`}
                  alt={tutor.name}
                  className="block"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              {view.width < TABLET_BREAKPOINT ? (
                <>
                  <div className="content w-full">
                    <p className="fw-600 mb-2x">{tutor.name}</p>
                    <SVG content={awesomeStar()} size={24} />
                    <p className="fz-14p fw-500">{tutor.position}</p>
                  </div>
                  <div className="description pt-3x pb-3x pl-2x pr-2x">
                    <p className="fw-500 mb-3x">{tutor.education}</p>
                    <p className="fz-14p fw-600 l-height-1/4">
                      <span className="mr-1x">Teaches:</span>
                      {tutor.teaches.map((teach) => (
                        <span key={teach._id} className="teach mr-1x mb-1x">
                          {teach.title}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div className="actions flex">
                    <Link href={`/tutors/${tutor.slug.current}`}>
                      <a className="btn btn-white w-full">View profile</a>
                    </Link>
                    <a href="#hireFormBlock" className="btn btn-blue w-full" onClick={hireTutor}>
                      {text.form.btnHireTutor}
                    </a>
                  </div>
                </>
              ) : view.width < MOBILE_BREAKPOINT ? (
                <>
                  <div className="content w-full">
                    <p className="fw-600 mb-2x">{tutor.name}</p>
                    <SVG content={awesomeStar()} size={24} />
                    <p className="fz-14p fw-500">{tutor.position}</p>
                    <div className="description pt-3x">
                      <p className="fw-500 mb-3x">{tutor.education}</p>
                      <p className="fz-14p fw-600 l-height-1/4">
                        <span className="mr-1x">Teaches:</span>
                        {tutor.teaches.map((teach) => (
                          <span key={teach._id} className="teach mr-1x mb-1x">
                            {teach.title}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                  <div className="actions flex">
                    <Link href={`/tutors/${tutor.slug.current}`}>
                      <a className="btn btn-white w-full">View profile</a>
                    </Link>
                    <a href="#hireFormBlock" className="btn btn-blue w-full" onClick={hireTutor}>
                      {text.form.btnHireTutor}
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div className="content w-full flex-1">
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
                  <div className="actions flex">
                    <p className="fz-14p fw-600 l-height-1/4 pt-4x pb-4x pl-3x pr-3x flex-1">
                      <span className="mr-1x">Teaches:</span>
                      {tutor.teaches.map((teach) => (
                        <span key={teach._id} className="teach mr-1x mb-1x">
                          {teach.title}
                        </span>
                      ))}
                    </p>
                    <Link href={`/tutors/${tutor.slug.current}`}>
                      <a className="btn btn-white w-full">View profile</a>
                    </Link>
                    <a href="#hireFormBlock" className="btn btn-blue w-full" onClick={hireTutor}>
                      {text.form.btnHireTutor}
                    </a>
                  </div>
                </>
              )}
            </div>
          )
        })
      ) : (
        <p className="medium-title fw-500">Tutors not found for this query</p>
      )}
      {tutors.length > tutorsLimit ? (
        <button
          className="btn btn-blue"
          onClick={() => setTutorsLimit(tutorsLimit + TUTORS_LIST_STEP)}
        >
          Show more
        </button>
      ) : (
        router.route !== '/tutors' && (
          <Link href="/tutors">
            <a className="btn btn-blue">All tutors</a>
          </Link>
        )
      )}
    </div>
  )
}

export default TutorsList
