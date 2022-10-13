import { PortableText } from '@portabletext/react'
import styles from './style.module.scss'

export const BlueCardBlock = ({ title = '', content = [], image = {}, className = '' }) => {
  return (
    <div className={`card mx-auto rounded-small flex ${styles.card} ${className}`}>
      <img src={image?.src} alt="photo of a woman" className={styles.card_logo} />
      <h2 className="section-title fw-600 mb-2x w-full w-1/2_lg">{title}</h2>
      <div className="content w-full w-1/2_lg">
        <PortableText value={content} />
      </div>
    </div>
  )
}

export default BlueCardBlock
