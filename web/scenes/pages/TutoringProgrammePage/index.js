import SVG from '~/components/SVG'
import { Circle } from '~/components/Circle'
import { academy, planet, like, checkCircle } from '~/utils/svgImages'
import { Color } from '~/utils/constants'
import { FlexibleCard, TextComponent } from '~/scenes/elements'
import { BlueCardBlock } from './components/BlueCardBlock'
import logoNTP from '~/assets/images/logo_NTP.png'
import styles from './style.module.scss'

import { PortableText } from '@portabletext/react'
import { FAQ, HireFormBlock, RatedBlock, ReviewBlock } from '~/scenes/sections'
import { getImageUrl } from '~/utils/helpers'
import ILink from '~/components/Link'

export const TutoringProgrammePage = ({ page }) => {
  const {
    firstScreen,
    firstSection,
    blueCard,
    secondScreenTitle,
    secondScreenCards,
    reviewBlock,
    secondScreenPart,
    faqSection,
    contactTitle,
    contactDescription,
  } = page || {}

  return (
    <>
      <section className={`pt-20x_lg pt-13x pb-14x_lg pb-5x ${styles.firstScreen}`}>
        <div className="container">
          {Boolean(firstScreen?.title) && (
            <h1
              className="main-title fw-700 l-height-1 mb-2x mx-auto"
              style={{ maxWidth: '62.5rem' }}
            >
              <PortableText value={firstScreen.title} />
            </h1>
          )}
          {Boolean(firstScreen?.description) && (
            <div
              className="fz-20p_lg fz-16p fw-500 l-height-1/4 mb-4x description"
              style={{ maxWidth: '41rem' }}
            >
              <PortableText value={firstScreen.description} />
            </div>
          )}
          {Boolean(firstScreen?.withButton) && (
            <a
              href="https://www.reviews.co.uk/company-reviews/store/tutorchase"
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-blue"
            >
              Enquire Now
            </a>
          )}
          <div className="left-card bg-white">
            <Circle size={56} color={Color.Melrose} classList="circle absolute">
              <SVG content={planet()} size={24} />
            </Circle>
            <p>
              Online{' '}
              <b>
                tutoring for
                <br /> schools
              </b>
            </p>
          </div>
          <SVG content={academy(Color.Melrose)} size={56} display="" className="absolute academy" />
          <div className="right-card bg-white">
            <SVG content={academy(Color.Melrose)} size={24} />
            <p>
              <b>High-quality subsidised tuition</b> through the NTA
            </p>
          </div>
        </div>
      </section>
      <section className={`pt-10x pb-10x pt-18x_lg pb-18x_lg ${styles.content}`}>
        <div className="container narrow">
          <div className="flex items-center justify-between gap-12">
            <div className="relative w-1/2_lg">
              {Boolean(firstSection?.image) && (
                <>
                  <FlexibleCard
                    color={Color.Orange}
                    text={
                      <TextComponent>
                        Flexible online tutoring <b>around the UK and beyond</b>
                      </TextComponent>
                    }
                  />
                  <div className="image-wrap mx-auto">
                    <Circle size={64} color={Color.Melrose} classList="absolute">
                      <SVG content={like()} size={24} />
                    </Circle>
                    <img
                      src={`${getImageUrl(firstSection?.image.asset._ref)}`}
                      alt="photo of a woman"
                    />
                  </div>
                  <div className="absolute bg-white p-2x flex items-center rounded-xSmall exams">
                    <SVG content={checkCircle()} size={28} />
                    <span className="fz-14p l-height-1/2">
                      Vetted <b>elite tutors</b>
                    </span>
                  </div>
                </>
              )}
            </div>
            <div className="text-wrap w-1/2_lg">
              {Boolean(firstSection?.title) && (
                <h2 className="fz-48p_lg fz-26p fw-600 l-height-1 mb-4x_lg mb-2x">
                  {firstSection?.title}
                </h2>
              )}
              {Boolean(firstSection?.description) && (
                <div className="fz-18p_lg fz-16p l-height-1/5">
                  <PortableText value={firstSection?.description} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="pb-10x pb-18x_lg">
        <div className="container large">
          <BlueCardBlock title={blueCard?.title} content={blueCard?.description} image={logoNTP} />
        </div>
      </section>
      <section className={`pt-13x_lg pt-5x pb-10x bg-white ${styles.flexibility}`}>
        <div className="container narrow">
          <div className="text-center">
            <h2 className="fz-26p fz-48p_lg fw-600 l-height-1 mb-5x mb-10x_lg">
              {secondScreenTitle}
            </h2>
          </div>
          {secondScreenCards?.map((card, index) => {
            return (
              <div
                className={`section-row flex flex-wrap mt-5x mt-12x_lg gap-12_lg ${
                  index % 2 !== 0 ? 'reverse_lg' : ''
                }`}
                key={card?._key}
              >
                <div className="image-wrap">
                  <img src={`${getImageUrl(card?.image.asset._ref)}`} alt="illustration" />
                </div>
                <div className="text-wrap limit">
                  <div className="fz-18p_lg fz-16p l-height-1/4">
                    <PortableText value={card?.description} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <ReviewBlock {...reviewBlock} className={styles.reviews} />
      <RatedBlock className="mt-10x mt-18x_lg" />
      <section className={`bg-white pt-18x_lg pt-10x  ${styles.contentList}`}>
        <div className="container large">
          <div
            className="section-row flex flex-wrap items-center"
            style={{ flexDirection: 'row-reverse' }}
          >
            <div className="image-wrap relative">
              <div className="tutor absolute bg-white rounded-small">
                <div className="flex">
                  <p className="fz-14p_lg fz-12p l-height-1/4">
                    Professionals at <br />
                    <b>all levels</b>
                  </p>
                </div>
                <span className="wrap">
                  <span className="line bg-orange"></span>
                  <span className="line bg-orange"></span>
                  <span className="line bg-orange"></span>
                  <span className="line bg-orange"></span>
                </span>
                <span className="fz-14p_lg fz-12p fw-800 ml-1x">A/A+</span>
              </div>
              <div className="statement absolute bg-white rounded-xSmall p-2x_lg p-1x l-height-1/2 flex gap-2 items-center">
                <SVG content={checkCircle(Color.White)} size={28} />
                <p>
                  <span className="fz-14p_lg fz-12p block">
                    Only{' '}
                    <b>
                      qualified <br />
                      tutors
                    </b>
                  </span>
                </p>
              </div>
              <img src={`${getImageUrl(secondScreenPart?.image.asset._ref)}`} alt="illustration" />
            </div>
            <div className="text-wrap">
              {Boolean(secondScreenPart?.preTitle) && (
                <p className="before-title fw-600 uppercase color-lightGray mb-2x mb-3x_lg">
                  {secondScreenPart.preTitle}
                </p>
              )}
              <h4 className="fz-48p_lg fz-26p fw-600 l-height-1/1 mb-4x_lg mb-3x">
                {secondScreenPart?.title}
              </h4>
              {Boolean(secondScreenPart?.list) ? (
                <ul className="ordered-list blue fz-18p_lg fz-16p">
                  {secondScreenPart?.list.map((item, index) => {
                    return <li key={index + 1}>{item}</li>
                  })}
                </ul>
              ) : (
                <div className="fz-18p">
                  <PortableText value={secondScreenPart?.description} />
                </div>
              )}
              {Boolean(secondScreenPart?.button) && (
                <ILink link={secondScreenPart.button} className="btn btn-blue mt-4x" />
              )}
            </div>
          </div>
        </div>
      </section>
      <FAQ faqSection={faqSection} />
      <HireFormBlock
        onlyContacts={true}
        className={`pt-15x_lg pt-10x ${styles.contacts}`}
        title={contactTitle}
        description={contactDescription}
      />
    </>
  )
}

export default TutoringProgrammePage
