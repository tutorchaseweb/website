import { PortableText } from '@portabletext/react'
import SVG from '~/components/SVG'
import { Circle } from '~/components/Circle'
import { starRotate, verifiedUser } from '~/utils/svgImages'
import { Color, MOBILE_BREAKPOINT } from '~/utils/constants'
import { getReadableDate, useWindowSize } from '~/utils/helpers'
import styles from './style.module.scss'

export const PolicyPage = ({ page }) => {
  const window = useWindowSize()

  return (
    <>
      <section className={`pt-20x pb-18x ${styles.firstScreen}`}>
        <div className="container narrow text-center">
          <p className="date fz-14p  l-height-1/4 mx-auto mb-2x">
            Last Update: {getReadableDate(page?._updatedAt ? page._updatedAt : new Date())}
            <span className="fw-500"></span>
          </p>
          <div className="wrapper relative mx-auto">
            <div className="left-card absolute">
              <Circle
                size={window.width < MOBILE_BREAKPOINT ? 40 : 72}
                color={Color.White}
                classList="circle shadow-medium"
              >
                <SVG content={starRotate()} size={window.width < MOBILE_BREAKPOINT ? 18 : 38} />
              </Circle>
            </div>
            <h1 className="main-title fw-700 mx-auto">
              {page?.title ? <PortableText value={page.title} /> : 'Page not loaded'}
            </h1>
            <div className="right-card absolute">
              <Circle
                size={window.width < MOBILE_BREAKPOINT ? 56 : 72}
                color={Color.White}
                classList="circle shadow-medium"
              >
                <SVG
                  content={verifiedUser('#4053B0')}
                  size={window.width < MOBILE_BREAKPOINT ? 24 : 40}
                />
              </Circle>
            </div>
          </div>
        </div>
      </section>
      <section className={`content pt-12x pb-18x ${styles.content}`}>
        <div className="container narrow">
          {page?.content && <PortableText value={page.content} />}
        </div>
      </section>
    </>
  )
}

export default PolicyPage
