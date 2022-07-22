import SVG from '~/components/SVG'
import { star } from '~/utils/svgImages'

export const BasedReviews = () => {
  return (
    <p className="rating flex items-center mb-2x">
      <span className="stars l-height-1 mr-1x">
        <SVG content={star()} size={20} />
        <SVG content={star()} size={20} />
        <SVG content={star()} size={20} />
        <SVG content={star()} size={20} />
        <SVG content={star()} size={20} />
      </span>
      4.92/5 based on
      <a
        href="https://www.reviews.co.uk/company-reviews/store/tutorchase"
        rel="noopener noreferrer"
        target="_blank"
        className="fw-600 ml-1x"
      >
        214 reviews
      </a>
    </p>
  )
}
