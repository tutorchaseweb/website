import SVG from '~/components/SVG'
import { videoCam } from '~/utils/svgImages'
import { Color } from '~/utils/constants'

import styles from './style.module.scss'

export const FlexibleCard = ({ color = Color.LightBlue }) => {
  return (
    <div className={`card bg-white absolute p-3x rounded-small ${styles.card}`}>
      <SVG content={videoCam(color)} size={28} className="mb-1x" />
      <p className="l-height-1/4">
        Flexible online tutoring to fit <b>around your schedule</b>
      </p>
    </div>
  )
}

export default FlexibleCard
