import Link from 'next/link'
import { Circle } from '~/components/Circle'
import { Color } from '~/utils/constants'
import SVG from '~/components/SVG'
import { studyHat } from '~/utils/svgImages'
import { BasedReviews, SubjectsFilter } from '~/scenes/sections'
import girl from '~/assets/images/girl-2.png'
import oxford from '~/assets/images/oxford_logo2.png'
import styles from './style.module.scss'

export const OxbridgePage = () => {
  return (
    <>
      <section className={`pt-16x ${styles.firstScreen}`}>
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="text-wrapper mb-10x">
              <BasedReviews />
              <h1 className="fz-64p fw-700 l-height-1 mt-3x mb-3x">
                Online <strong>Oxbridge</strong> Tutoring
              </h1>
              <p className="fz-20p fw-500 l-height-1/4 mb-3x">
                Delivered Globally by the UK's Best Tutors
              </p>
              <Link href="/tutors">
                <a className="btn btn-blue">Hire a Tutor</a>
              </Link>
            </div>
            <div className="image-wrapper relative">
              <div className="left-card absolute bg-white rounded-xSmall p-3x flex">
                <p className="fz-18p fw-500 l-height-1/4 pr-3x">
                  Trusted by <span className="fw-600">Oxford University</span> as a tutoring partner
                </p>
                <SVG content={studyHat()} size={28} />
              </div>
              <img src={girl.src} alt="Employer" className="block" />
              <div className="right-card absolute">
                <Circle color={Color.White} size={88} classList="pt-1x">
                  <img src={oxford.src} alt="Oxford logo" />
                </Circle>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SubjectsFilter />
      <section className={`bg-white pt-12x ${styles.content}`}>
        <div className="container narrow">
          <div className="video-block flex mb-15x">
            <div className="text bg-lightBlue pl-8x pr-8x pt-10x pb-10x w-1/2">
              <h4>Lorem ipsum dolor</h4>
              <p className="l-height-1/4">
                We provide online tutoring to support students applying to{' '}
                <span className="fw-600">Oxford and Cambridge University.</span>
              </p>
              <p className="l-height-1/4">
                We match students with a highly selective group of accomplished tutors who have
                studied the{' '}
                <span className="fw-600">applicant's chosen subject at Oxford or Cambridge.</span>
              </p>
            </div>
            <div className="video w-1/2"></div>
          </div>
        </div>
      </section>
    </>
  )
}
export default OxbridgePage
