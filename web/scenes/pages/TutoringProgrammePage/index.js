import SVG from '~/components/SVG'
import { Circle } from '~/components/Circle'
import { academy, planet, like, checkCircle } from '~/utils/svgImages'
import { Color } from '~/utils/constants'
import { FlexibleCard, TextComponent } from '~/scenes/elements'
import { BlueCardBlock } from './components/BlueCardBlock'
import styles from './style.module.scss'

import Photo from '~/assets/images/woman-photo.png'
import { PortableText } from '@portabletext/react'
import { FAQ, RatedBlock } from '~/scenes/sections'
import { getImageUrl } from '~/utils/helpers'

export const TutoringProgrammePage = ({ page }) => {
  const { firstScreen, firstSection, blueCard, reviewBlock, faqSection } = page || {}

  return (
    <>
      <section className={`pt-20x pb-14x ${styles.firstScreen}`}>
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
              className="fz-20p fw-500 l-height-1/4 mb-4x description"
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
                <h2 className="fz-48p fw-600 l-height-1 mb-4x">{firstSection?.title}</h2>
              )}
              {Boolean(firstSection?.description) && (
                <div className="fz-18p">
                  <PortableText value={firstSection?.description} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section class="pb-10x pb-18x_lg">
        <div className="container large">
          <BlueCardBlock title={blueCard?.title} content={blueCard?.description} />
        </div>
      </section>

      <RatedBlock />
      <FAQ faqSection={faqSection} />
    </>
  )
}

export default TutoringProgrammePage
