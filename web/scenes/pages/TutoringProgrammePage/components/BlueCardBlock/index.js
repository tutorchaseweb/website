import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { getImageUrl } from '~/utils/helpers'
import styles from './style.module.scss'

export const BlueCardBlock = ({ title = '', content = [], logo = '', className = '' }) => {
  return (
    <div className={`card mx-auto rounded-small flex ${styles.card} ${className}`}>
      <div className={styles.section_logo}>
        {logo?.asset?._ref && (
          <Image src={`${getImageUrl(logo?.asset?._ref)}`} layout="fill" alt="NTP logo" />
        )}
      </div>
      <h2 className="section-title fw-600 mb-2x w-full w-1/2_lg">{title}</h2>
      <div className="content w-full w-1/2_lg">
        <PortableText value={content} />
      </div>
    </div>
  )
}

export default BlueCardBlock
