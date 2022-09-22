import SVG from '~/components/SVG'
import { Circle } from '~/components/Circle'
import { globe, studyHat, email, phone, academy, handshake } from '~/utils/svgImages'
import { Color } from '~/utils/constants'
import { BasedReviews, BlueCardBlock } from '~/scenes/sections'
import { ConfigContext } from '~/components/Layout'

import text from '~/assets/text-content/en/static.json'
import styles from './style.module.scss'
import { PortableText } from '@portabletext/react'
import { getImageUrl } from '~/utils/helpers'

export const BusinessPartnershipsPage = ({ page }) => {
  const { firstScreen, secondScreen, secondScreenPartOne, secondScreenPartTwo, blueCard } = page

  return (
    <>
      <section className={`pt-20x pb-18x ${styles.firstScreen}`}>
        <div className="container text-center">
          <div className="mb-3x mb-4x_lg">
            <BasedReviews center={true} />
          </div>
          <h1 className="main-title fw-700 l-height-1 mb-3x">
            <PortableText value={firstScreen?.title} />
          </h1>
          <div className="fz-20p fw-500 l-height-1/4 mx-auto" style={{ maxWidth: '22rem' }}>
            <PortableText value={firstScreen?.description} />
          </div>
          <div className="left-card bg-white">
            <SVG content={academy()} size={24} />
            <p>
              We cooperate with the best <b>universities and schools</b>
            </p>
          </div>
          <div className="right-card bg-white">
            <Circle size={56} color={Color.LightBlue} classList="circle absolute">
              <SVG content={handshake()} size={24} />
            </Circle>
            <p>
              <b>Over 50</b>
              <br />
              partners <br />
              trust us
            </p>
          </div>
          <Circle size={72} color={Color.LightBlue} classList="circle absolute handshake">
            <SVG content={handshake()} size={24} />
          </Circle>
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
          <div className="section-row flex flex-wrap items-center" style={{ gap: '6rem' }}>
            <div className="image-wrap">
              <img
                src={`${getImageUrl(secondScreenPartOne?.image.asset._ref)}`}
                alt="illustration"
              />
            </div>
            <div className="text-wrap">
              <span className="square flex items-center justify-center mb-3x">
                <SVG content={globe(Color.Orange)} size={28} />
              </span>
              <h3 className="fz-32p fw-600 l-height-1/4 mb-3x">{secondScreenPartOne?.title}</h3>
              <div className="fz-18p">
                <PortableText value={secondScreenPartOne?.description} />
              </div>
            </div>
          </div>
          <div
            className="section-row flex flex-wrap items-center mt-12x reverse_lg"
            style={{ gap: '6rem' }}
          >
            <div className="image-wrap">
              <img
                src={`${getImageUrl(secondScreenPartTwo?.image.asset._ref)}`}
                alt="illustration"
              />
            </div>
            <div className="text-wrap">
              <span className="square flex items-center justify-center mb-3x">
                <SVG content={studyHat(Color.Orange)} size={28} />
              </span>
              <h3 className="fz-32p fw-600 l-height-1/4 mb-3x">{secondScreenPartTwo?.title}</h3>
              <div className="fz-18p">
                <PortableText value={secondScreenPartTwo?.description} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`pt-9x ${styles.contacts}`}>
        <div className="container narrow">
          <BlueCardBlock
            title={blueCard.title}
            content={blueCard.description}
            hireButton={blueCard.withButton}
          />

          <ConfigContext.Consumer>
            {(config) => {
              const { secondaryPhone = text.contacts.secondaryPhone, email: emailAddress } = config

              return (
                <div className="mt-15x mb-15x">
                  <h3 className="title fz-36p fw-600 text-center mx-auto mb-4x">
                    Still have questions? Let’s get in touch.
                  </h3>
                  <div className="links flex flex-wrap gap-4 items-center justify-between mx-auto fz-20p fw-600">
                    <a href={`mailto:${emailAddress}`} className="flex items-center">
                      <Circle size={32} color={Color.Blue} classList="mr-1x">
                        <SVG content={email()} />
                      </Circle>
                      {emailAddress}
                    </a>
                    <a href={`tel:${secondaryPhone}`} className="flex items-center">
                      <Circle size={32} color={Color.Blue} classList="mr-1x">
                        <SVG content={phone()} size={14} />
                      </Circle>
                      {secondaryPhone}
                    </a>
                  </div>
                </div>
              )
            }}
          </ConfigContext.Consumer>
        </div>
      </section>
    </>
  )
}

export default BusinessPartnershipsPage
