import SVG from '~/components/SVG'
import { star } from '~/utils/svgImages'
import styles from './style.module.scss'

export const ReviewBlock = ({ content = '', author = '', position = '' }) => {
  return (
    <section className={`reviews relative pt-9x ${styles.reviews}`}>
      <div className="container">
        <div className="card bg-white rounded-small p-8x mx-auto">
          <div className="content text-center mx-auto">
            <div
              className="pseudo fz-22p l-height-1/5 mb-4x"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <p className="mb-2x">
              <SVG content={star()} size={24} />
              <SVG content={star()} size={24} />
              <SVG content={star()} size={24} />
              <SVG content={star()} size={24} />
              <SVG content={star()} size={24} />
            </p>
            <p className="l-height-1/5">
              <span className="fw-600">{author}</span> | {position}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewBlock
