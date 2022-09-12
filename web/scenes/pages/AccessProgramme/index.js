import SVG from '~/components/SVG'
import { Circle } from '~/components/Circle'
import { paid, studyHat, email, phone, volunteerActivism, videoCam } from '~/utils/svgImages'
import { Color } from '~/utils/constants'
import { BasedReviews, BlueCardBlock } from '~/scenes/sections'
import illustration4 from '~/assets/images/illustration-4.png'
import illustration5 from '~/assets/images/illustration-5.png'
import illustration6 from '~/assets/images/illustration-6.png'
import lgk_I8kY from '~/assets/images/lgk_I8kY_3.png'
import text from '~/assets/text-content/en/static.json'
import styles from './style.module.scss'
import { PortableText } from '@portabletext/react'
import { getImageUrl } from '~/utils/helpers'

export const AccessProgrammePage = ({ page }) => {
  const {
    firstScreen,
    secondScreen,
    secondScreenPartOne,
    secondScreenPartTwo,
    secondScreenPartThree,
    blueCard,
    lastScreen,
  } = page
  return (
    <>
      <section className={`pt-20x pb-18x ${styles.firstScreen}`}>
        <div className="container text-center">
          <BasedReviews center={true} />
          <h1 className="main-title fw-700 l-height-1 mb-3x">
            <PortableText value={firstScreen?.title} />
          </h1>
          <div className="fz-20p fw-500 l-height-1/4 mx-auto" style={{ maxWidth: '22rem' }}>
            <PortableText value={firstScreen?.description} />
          </div>
          <div className="left-card bg-white">
            <SVG content={volunteerActivism()} size={24} />
            <p className="l-height-1/4">
              As part of the Access programme, we provide <b>free tuition in Tutorchase</b>
            </p>
            <div className="play bg-orange round relative mx-auto flex items-center justify-center mb-1x" />
          </div>
          <div className="lesson1 bg-white text-center absolute rounded-small">
            <div className="play bg-orange round relative mx-auto flex items-center justify-center mb-1x" />
            <p className="fw-700">Lesson 1</p>
            <p className="fz-12p">Trigonometry and graphs</p>
          </div>
        </div>
      </section>
      <section className={`pt-13x pb-10x bg-white ${styles.flexibility}`}>
        <div className="container narrow">
          <div className="text-center">
            <p className="fz-18p fw-600 l-height-1 color-lightGray mb-2x">
              {secondScreen?.preTitle}
            </p>
            <h2 className="fz-48p fw-600 l-height-1 mb-10x">{secondScreen?.title}</h2>
          </div>
          <div className="section-row flex flex-wrap items-center justify-between gap-8">
            <div className="image-wrap">
              <img
                src={`${getImageUrl(secondScreenPartOne?.image.asset._ref)}`}
                alt="illustration"
              />
            </div>
            <div className="text-wrap limit">
              <span className="square flex items-center justify-center mb-3x">
                <SVG content={volunteerActivism(Color.Orange)} size={28} />
              </span>
              <h3 className="fz-32p fw-600 l-height-1/4 mb-3x">{secondScreenPartOne?.title}</h3>
              <div className="fz-18p l-height-1/4">
                <PortableText value={secondScreenPartOne?.description} />
              </div>
            </div>
          </div>
          <div className="section-row flex flex-wrap items-center justify-between gap-8 mt-12x reverse_lg">
            <div className="image-wrap">
              <img
                src={`${getImageUrl(secondScreenPartTwo?.image.asset._ref)}`}
                alt="illustration"
              />
            </div>
            <div className="text-wrap limit">
              <span className="square flex items-center justify-center mb-3x">
                <SVG content={studyHat(Color.Orange)} size={28} />
              </span>
              <h3 className="fz-32p fw-600 l-height-1/4 mb-3x">{secondScreenPartTwo?.title}</h3>
              <div className="fz-18p l-height-1/4">
                <PortableText value={secondScreenPartTwo?.description} />
              </div>
            </div>
          </div>
          <div className="section-row flex flex-wrap items-center justify-between gap-8 mt-15x">
            <div className="image-wrap">
              <img
                src={`${getImageUrl(secondScreenPartThree?.image.asset._ref)}`}
                alt="illustration"
              />
            </div>
            <div className="text-wrap limit">
              <span className="square flex items-center justify-center mb-3x">
                <SVG content={paid(Color.Orange)} size={28} />
              </span>
              <h3 className="fz-32p fw-600 l-height-1/4 mb-3x">{secondScreenPartThree?.title}</h3>
              <div className="fz-18p l-height-1/4">
                <PortableText value={secondScreenPartThree?.description} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container narrow pt-9x">
        <BlueCardBlock
          title={blueCard.title}
          content={blueCard.description}
          hireButton={blueCard.withButton}
        />
      </div>
      <section className={` ${styles.contacts}`}>
        <div className="container narrow">
          <div className="flex flex-wrap items-center gap-8 justify-between mt-19x reverse_lg">
            <div className="relative">
              <div className="card bg-white absolute">
                <SVG content={videoCam(Color.LightBlue)} size={28} className="mb-1x" />
                <p className="l-height-1/4">
                  Flexible online tutoring to fit <b>around your schedule</b>
                </p>
              </div>
              <img src={lgk_I8kY.src} alt="image" />
            </div>
            <div className="text-wrap">
              <h3 className="fz-32p fw-600 l-height-1 mb-4x ">{lastScreen?.title}</h3>
              <ul className="ordered-list mb-10x mb-0x_lg">
                {lastScreen?.list.map((item, index) => {
                  return <li key={index + 1}>{item}</li>
                })}
              </ul>
            </div>
          </div>
          <div className="mt-15x mb-15x">
            <h3 className="title fz-36p fw-600 text-center mx-auto mb-4x">
              Still have questions? Let’s get in touch.
            </h3>
            <div className="links flex flex-wrap gap-4 items-center justify-between mx-auto fz-20p fw-600">
              <a href={`mailto:${text.contacts.email}`} className="flex items-center">
                <Circle size={32} color={Color.Blue} classList="mr-1x">
                  <SVG content={email()} />
                </Circle>
                {text.contacts.email}
              </a>
              <a href={`tel:${text.contacts.primaryPhone}`} className="flex items-center">
                <Circle size={32} color={Color.Blue} classList="mr-1x">
                  <SVG content={phone()} size={14} />
                </Circle>
                {text.contacts.primaryPhone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AccessProgrammePage
