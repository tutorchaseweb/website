import { PortableText } from '@portabletext/react'
import logoNTP from '~/assets/images/logo_NTP.svg'
import styles from './style.module.scss'

export const BlueCardBlock = ({ title = '', content = [], className = '' }) => {
  return (
    <div className={`card mx-auto rounded-small flex ${styles.card} ${className}`}>
      <img src={logoNTP.src} alt="photo of a woman" className={styles.card_logo} />
      <h2 className="section-title fw-600 mb-2x w-full w-1/2_lg">{title}</h2>
      <div className="content w-full w-1/2_lg">
        <PortableText value={content} />
      </div>
    </div>
  )
}

export default BlueCardBlock
