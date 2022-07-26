import { PortableText } from '@portabletext/react'
import SVG from '~/components/SVG'
import { Circle } from '~/components/Circle'
import { starRotate, verifiedUser } from '~/utils/svgImages'
import { Color } from '~/utils/constants'
import { getReadableDate } from '~/utils/helpers'
import styles from './style.module.scss'

export const PolicyPage = ({ page }) => {
  return (
    <>
      <section className={`pt-20x pb-18x ${styles.firstScreen}`}>
        <div className="container narrow text-center">
          <p className="date fz-20p fw-500 l-height-1/4 mx-auto mb-4x">
            Last Update: {getReadableDate(page._updatedAt)}
          </p>
          <div className="wrapper relative mx-auto">
            <div className="left-card">
              <Circle size={72} color={Color.White} classList="circle shadow-medium">
                <SVG content={starRotate()} size={38} />
              </Circle>
            </div>
            <h1 className="title fz-64p fw-700 l-height-1 mb-3x mx-auto">
              <PortableText value={page.title} />
            </h1>
            <div className="right-card">
              <Circle size={72} color={Color.White} classList="circle shadow-medium">
                <SVG content={verifiedUser('#4053B0')} size={40} />
              </Circle>
            </div>
          </div>
        </div>
      </section>
      <section className={`content pt-12x pb-18x ${styles.content}`}>
        <div className="container narrow">
          <PortableText value={page.content} />
        </div>
      </section>
    </>
  )
}

export default PolicyPage
