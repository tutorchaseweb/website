import { PortableText } from '@portabletext/react'
import { hireTutor } from '~/utils/helpers'
import text from '~/assets/text-content/en/static.json'
import styles from './style.module.scss'

export const BlueCardBlock = ({ title = '', content = [], hireButton = true, className = '' }) => {
  return (
    <div
      className={`card mx-auto text-center rounded-small pt-7x pb-7x pl-2x pr-2x ${styles.card} ${className}`}
    >
      <h2 className="medium-title fw-600 mb-2x mx-auto">{title}</h2>
      <div className="content fw-500 mx-auto">
        <PortableText value={content} />
      </div>
      {hireButton && (
        <a href="#hireFormBlock" className="mt-3x btn btn-white" onClick={hireTutor}>
          {text.form.btnHireTutor}
        </a>
      )}
    </div>
  )
}

export default BlueCardBlock
