import SVG from '~/components/SVG'
import { star } from '~/utils/svgImages'
import { ConfigContext } from '~/components/Layout'

export const BasedReviews = ({ center = false, className = '' }) => {
  return (
    <ConfigContext.Consumer>
      {(config) => {
        const { currentRaiting, numberOfReviews } = config || {}

        return (
          <p
            className={`rating flex flex-wrap items-center gap-2 ${
              center ? 'justify-center' : ''
            } ${className}`}
          >
            <span className="stars l-height-1">
              <SVG content={star()} size={20} />
              <SVG content={star()} size={20} />
              <SVG content={star()} size={20} />
              <SVG content={star()} size={20} />
              <SVG content={star()} size={20} />
            </span>
            <span>
              {currentRaiting}/5 based on
              <a
                href="https://www.reviews.co.uk/company-reviews/store/tutorchase"
                rel="noopener noreferrer"
                target="_blank"
                className="fw-600 ml-1x"
              >
                {numberOfReviews} reviews
              </a>
            </span>
          </p>
        )
      }}
    </ConfigContext.Consumer>
  )
}
