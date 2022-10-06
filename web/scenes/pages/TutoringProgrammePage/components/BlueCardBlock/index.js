import { PortableText } from '@portabletext/react'
import logoNTP from '~/assets/images/logo_NTP.svg'
import styles from './style.module.scss'

export const BlueCardBlock = ({ title = '', content = [], className = '' }) => {
  return (
    <div className={`card mx-auto rounded-small flex ${styles.card} ${className}`}>
      <img src={logoNTP.src} alt="photo of a woman" className={styles.card_logo} />
      <h2 className="section-title fw-600 mb-2x w-full w-1/2_lg">{title}</h2>
      <div className="content w-full w-1/2_lg">
        {/* <PortableText value={content} /> */}
        <p>
          <code>
            The National Tutoring Programme started back in 2020, created by the UK government to
            help schools and pupils that were most affected by the pandemic. This platform
            subsidises online tuition for schools around the UK, helping students connect with
            TutorChase’s top tutors that will guide them through their academic studies.
          </code>
        </p>
        <p>
          Within the NTP, schools can get over 70% of their online tutoring sessions subsidised by
          the UK government, helping their students thrive with premium GCSE and A-Level tuition.
          Since it was founded, the NTP has delivered over 1,500,000 online tutoring courses to
          students in need.
        </p>
      </div>
    </div>
  )
}

export default BlueCardBlock
