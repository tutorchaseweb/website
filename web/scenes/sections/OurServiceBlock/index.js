import SVG from '~/components/SVG'
import { handshake, screenVideo, sendBack } from '~/utils/svgImages'
import styles from './style.module.scss'

export const OurServiceBlock = ({ className = '' }) => {
  return (
    <section className={`service pt-8x pt-15x_lg pb-4x ${styles.service} ${className}`}>
      <div className="container text-center">
        <p className="before-title fw-600 uppercase color-lightGray mb-3x">Our Service</p>
        <h2 className="section-title fw-600 mb-6x mx-auto">How it Works?</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="card flex-1 rounded-small transition pt-8x pb-6x pl-5x pr-5x">
            <div className="circle round flex items-center justify-center bg-blue relative mx-auto mb-4x">
              <div
                className={`point transition absolute inset-0 w-full h-full ${styles.point} ${styles.point1}`}
              />
              <SVG content={sendBack()} size={24} />
            </div>
            <h4 className="fz-20p fw-700 l-height-1/4 mb-2x">Contact us with your request</h4>
            <p className="l-height-1/5">
              Let us know the details of your tuition request. If you’d like to have a consultation,
              one of our consultants will happily speak to you charge to craft you a specialised
              tuition plan.
            </p>
          </div>
          <div className="card flex-1 rounded-small transition pt-8x pb-6x pl-5x pr-5x">
            <div className="circle round flex items-center justify-center bg-blue relative mx-auto mb-4x">
              <div
                className={`point transition absolute inset-0 w-full h-full ${styles.point} ${styles.point2}`}
              />
              <SVG content={handshake()} size={24} />
            </div>
            <h4 className="fz-20p fw-700 l-height-1/4 mb-2x">Get Matched with a Tutor</h4>
            <p className="l-height-1/5">
              Based on your enquiry, we’ll select the best tutor for you. We’ll send your details of
              the tutor’s qualifications and experience before you proceed to make sure you’re happy
              with their background.
            </p>
          </div>
          <div className="card flex-1 rounded-small transition pt-8x pb-6x pl-5x pr-5x">
            <div className="circle round flex items-center justify-center bg-blue relative mx-auto mb-4x">
              <div
                className={`point transition absolute inset-0 w-full h-full ${styles.point} ${styles.point3}`}
              />
              <SVG content={screenVideo()} size={24} />
            </div>
            <h4 className="fz-20p fw-700 l-height-1/4 mb-2x">Start Your Tuition</h4>
            <p className="l-height-1/5">
              We then match you with your tutor and you can get going with your lessons, scheduled
              at a time convenient for you. Only pay after lessons have taken place, with no signup
              fees and no commitment required.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServiceBlock
