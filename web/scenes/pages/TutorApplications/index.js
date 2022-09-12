import { useState } from 'react'
import { getImageUrl, useWindowSize } from '~/utils/helpers'
import { MOBILE_BREAKPOINT } from '~/utils/constants'
import { ApplyForm } from './components/ApplyForm'
import { HireFormBlock, BasedReviews } from '~/scenes/sections'

import styles from './style.module.scss'
import { PortableText } from '@portabletext/react'

export const TutorApplicationsPage = ({ page }) => {
  const {
    title,
    descriptionList,
    secondScreenPartOne,
    secondScreenPartTwo,
    secondScreenPartThree,
  } = page || {}
  const [activePopup, setActivePopup] = useState(false)
  const pageSize = useWindowSize()

  const handler = () => {
    if (typeof window !== 'undefined') {
      const body = document.querySelector('body')
      activePopup ? body.classList.remove('openMenu') : body.classList.add('openMenu')
      setActivePopup(!activePopup)
    }
  }

  return (
    <>
      <section className={`pt-16x pb-6x ${styles.firstScreen}`}>
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="text-wrapper mb-6x">
              <BasedReviews />
              <h1 className="main-title fw-700 l-height-1 mb-4x">
                <PortableText value={title} />
              </h1>
              <ol className="ordered-list blue">
                {descriptionList?.map((item, index) => {
                  return <li key={index + 1}>{item}</li>
                })}
              </ol>
              {pageSize.width < MOBILE_BREAKPOINT && (
                <button className="btn btn-blue mt-5x" onClick={handler}>
                  Apply Now
                </button>
              )}
            </div>
            {pageSize.width > MOBILE_BREAKPOINT && <ApplyForm />}
          </div>
        </div>
      </section>
      <section className={`pt-10x pb-10x pt-18x_lg pb-18x_lg ${styles.content}`}>
        <div className="container narrow">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="relative w-1/2_lg">
              <img
                src={`${getImageUrl(secondScreenPartOne?.image.asset._ref)}`}
                alt="illustration7"
              />
              <div className="tutor absolute bg-white rounded-small">
                <div className="flex items-center">
                  <p className="fz-14p fw-600">Tutors for any level</p>
                </div>
                <span className="wrap">
                  <span className="line bg-orange"></span>
                  <span className="line bg-orange"></span>
                  <span className="line bg-orange"></span>
                  <span className="line bg-orange"></span>
                </span>
                <span className="fz-14p fw-800 ml-1x">A/A+</span>
              </div>
            </div>
            <div className="text-wrap w-1/2_lg">
              <h2 className="fz-48p fw-600 l-height-1 mb-3x">{secondScreenPartOne?.title}</h2>
              <div className="fz-18p">
                <PortableText value={secondScreenPartOne?.description} />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-8 mt-12x reverse_lg">
            <div className="relative w-1/2_lg">
              <img
                src={`${getImageUrl(secondScreenPartTwo?.image.asset._ref)}`}
                alt="illustration8"
              />
            </div>
            <div className="text-wrap w-1/2_lg">
              <h2 className="fz-48p fw-600 l-height-1 mb-3x">{secondScreenPartTwo?.title}</h2>
              <div className="fz-18p">
                <PortableText value={secondScreenPartTwo?.description} />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-8 mt-12x">
            <div className="relative w-1/2_lg">
              <img
                src={`${getImageUrl(secondScreenPartThree?.image.asset._ref)}`}
                alt="illustration9"
              />
            </div>
            <div className="text-wrap w-1/2_lg">
              <h2 className="fz-48p fw-600 l-height-1 mb-3x">{secondScreenPartThree?.title}</h2>
              <div className="fz-18p">
                <PortableText value={secondScreenPartThree?.description} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <HireFormBlock onlyContacts={true} />
      {pageSize.width < MOBILE_BREAKPOINT && (
        <div className={`popup-wrapper ${activePopup ? 'block' : 'hidden'} ${styles.popupWrapper}`}>
          <span className="close" onClick={handler}>
            &times;
          </span>
          <ApplyForm />
        </div>
      )}
    </>
  )
}

export default TutorApplicationsPage
