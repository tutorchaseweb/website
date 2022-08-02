import SVG from '~/components/SVG'
import { Circle } from '~/components/Circle'
import { star, thumbUp } from '~/utils/svgImages'
import { HireFormBlock } from '~/scenes/sections'
import styles from './style.module.scss'

export const ReviewsPage = () => {
  return (
    <>
      <section className={`pt-20x pb-18x ${styles.firstScreen}`}>
        <div className="container text-center">
          <div className="left-card bg-white">
            <p className="fw-600">Elizabeth</p>
            <span className="fz-14p">Student</span>
            <p className="stars l-height-1 mt-1x">
              <SVG content={star()} size={20} />
              <SVG content={star()} size={20} />
              <SVG content={star()} size={20} />
              <SVG content={star()} size={20} />
              <SVG content={star()} size={20} />
            </p>
          </div>
          <h1 className="main-title fw-700 l-height-1 mb-3x mx-auto" style={{ maxWidth: '50rem' }}>
            Our Verified Reviews from <strong>Students and Parents</strong>
          </h1>
          <p className="fz-20p fw-500 l-height-1/4 mx-auto mb-4x" style={{ maxWidth: '50rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elite
          </p>
          <a
            href="https://www.reviews.co.uk/company-reviews/store/tutorchase"
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-blue"
          >
            Keep Reading
          </a>
          <div className="right-card bg-white">
            <Circle size={56} color={'#A7B4F0'} classList="circle absolute">
              <SVG content={thumbUp()} size={24} />
            </Circle>
            <p>
              Our customers say <b>Excellent</b>
            </p>
          </div>
        </div>
      </section>
      <section className="content pt-6x pb-10x">
        <div className="container">
          <iframe
            src="https://widget.reviews.co.uk/compound/widget?elementId=reviews-widget-summon-compound&amp;version=2&amp;&amp;store=admissionstutors&amp;primaryClr=%23f47e27&amp;neutralClr=%23333333&amp;reviewTextClr=%23333333&amp;layout=fullWidth&amp;numReviews=40&amp;version=13b&amp;contentMode=company%3Bthird-party"
            frameBorder="0"
            width="100%"
            title="Reviews Compound Widget"
            height="6530"
            className="hide-me show-me"
          />
        </div>
      </section>
      <HireFormBlock />
    </>
  )
}

export default ReviewsPage
