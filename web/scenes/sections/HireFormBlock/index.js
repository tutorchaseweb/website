import SVG from '~/components/SVG'
import { Circle } from '~/components/Circle'
import { email, phone } from '~/utils/svgImages'
import { Color } from '~/utils/constants'
import styles from './style.module.scss'

export const HireFormBlock = () => {
  return (
    <section className={`block ${styles.block}`}>
      <div className="container">
        <div className={`card ${styles.card}`}>
          <form></form>
        </div>
      </div>
      <div className={`contacts pb-15x ${styles.contacts}`}>
        <div className="container">
          <h3 className="title fz-36p fw-600 text-center mx-auto mb-4x">
            Still have questions? Let’s get in touch.
          </h3>
          <div className="links flex items-center justify-between mx-auto fz-20p fw-600">
            <a href="mailto:info@tutorchase.com" className="flex items-center">
              <Circle size={32} color={Color.Blue} classList="mr-1x">
                <SVG content={email()} />
              </Circle>
              info@tutorchase.com
            </a>
            <a href="tel:+44(0)1865306636" className="flex items-center">
              <Circle size={32} color={Color.Blue} classList="mr-1x">
                <SVG content={phone()} size={14} />
              </Circle>
              +44(0)1865306636
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HireFormBlock
