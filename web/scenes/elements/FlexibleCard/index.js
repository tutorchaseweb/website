import SVG from '~/components/SVG'
import { videoCam } from '~/utils/svgImages'
import { Color } from '~/utils/constants'
import { TextComponent } from '../TextComponent'

import styles from './style.module.scss'

export const FlexibleCard = ({
  color = Color.LightBlue,
  text = (
    <TextComponent>
      Flexible online tutoring to fit <b>around your schedule</b>
    </TextComponent>
  ),
}) => {
  return (
    <div className={`card bg-white absolute p-3x rounded-small ${styles.card}`}>
      <SVG content={videoCam(color)} size={28} className="mb-1x" />
      <p className="l-height-1/4">{text}</p>
    </div>
  )
}

export default FlexibleCard
