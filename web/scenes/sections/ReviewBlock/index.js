import { PortableText } from '@portabletext/react'
import SVG from '~/components/SVG'
import { star } from '~/utils/svgImages'
import styles from './style.module.scss'

export const ReviewBlock = ({ content = [], author = '', position = '', className = '' }) => {
  return (
    <section className={`reviews relative pt-9x ${styles.reviews} ${className}`}>
      <div className="container narrow">
        <div className="card bg-white rounded-small pt-5x pb-5x pl-2x pr-2x p-8x_lg mx-auto">
          <div className="content l-height-1/5 text-center mx-auto">
            <div className="pseudo mb-4x">
              <PortableText value={content} />
            </div>
            <p className="mb-2x">
              <SVG content={star()} size={24} />
              <SVG content={star()} size={24} />
              <SVG content={star()} size={24} />
              <SVG content={star()} size={24} />
              <SVG content={star()} size={24} />
            </p>
            <p>
              <span className="author fw-600">{author}</span> {position}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewBlock
