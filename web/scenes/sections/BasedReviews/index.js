import SVG from '~/components/SVG'
import { star } from '~/utils/svgImages'

export const BasedReviews = () => {
  return (
    <p className="rating flex flex-wrap items-center gap-4" style={{ gap: '0.5rem' }}>
      <span className="stars l-height-1">
        <SVG content={star()} size={20} />
        <SVG content={star()} size={20} />
        <SVG content={star()} size={20} />
        <SVG content={star()} size={20} />
        <SVG content={star()} size={20} />
      </span>
      <span>
        4.92/5 based on
        <a
          href="https://www.reviews.co.uk/company-reviews/store/tutorchase"
          rel="noopener noreferrer"
          target="_blank"
          className="fw-600 ml-1x"
        >
          214 reviews
        </a>
      </span>
    </p>
  )
}