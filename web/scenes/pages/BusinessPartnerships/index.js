import SVG from '~/components/SVG'
import { Circle } from '~/components/Circle'
import { globe, studyHat, email, phone, academy, handshake } from '~/utils/svgImages'
import { Color } from '~/utils/constants'
import { BasedReviews, BlueCardBlock } from '~/scenes/sections'
import illustration2 from '~/assets/images/illustration-2.png'
import illustration3 from '~/assets/images/illustration-3.png'
import text from '~/assets/text-content/en/static.json'
import styles from './style.module.scss'

export const BusinessPartnershipsPage = () => {
  return (
    <>
      <section className={`pt-20x pb-18x ${styles.firstScreen}`}>
        <div className="container text-center">
          <div className="left-card bg-white">
            <SVG content={academy()} size={24} />
            <p>
              We cooperate with the best <b>universities and schools</b>
            </p>
          </div>
          <BasedReviews />
          <h1 className="fz-64p fw-700 l-height-1 mb-3x">
            Business <strong>Partnerships</strong>
          </h1>
          <p className="fz-20p fw-500 l-height-1/4 mx-auto" style={{ maxWidth: '22rem' }}>
            Elite online tutoring delivered globally by expert A-Level Maths tutors.
          </p>
          <div className="right-card bg-white">
            <Circle size={56} color={Color.LightBlue} classList="circle absolute">
              <SVG content={handshake()} size={24} />
            </Circle>
            <p>
              <b>Over 50</b>
              <br />
              partners <br />
              trust us
            </p>
          </div>
        </div>
      </section>
      <section className={`pt-13x pb-10x bg-white ${styles.flexibility}`}>
        <div className="container narrow">
          <div className="text-center">
            <p className="fz-18p fw-600 l-height-1 color-lightGray mb-2x">Lorem ipsum</p>
            <h2 className="fz-48p fw-600 l-height-1 mb-10x">Flexibility</h2>
          </div>
          <div className="flex items-center" style={{ gap: '6rem' }}>
            <img src={illustration2.src} alt="illustration" />
            <div className="flex-1">
              <span className="square flex items-center justify-center mb-3x">
                <SVG content={globe(Color.Orange)} size={28} />
              </span>
              <h3 className="fz-32p fw-600 l-height-1/4 mb-3x">Premium UK and US Tutors</h3>
              <p className="fz-18p">
                TutorChase provides online tutoring and educational content to students around the
                world. <b>With a team of over 500 active tutors from the UK and US</b>, we are able
                to provide tuition for all subjects at a range of levels.
              </p>
            </div>
          </div>
          <div
            className="flex items-center mt-12x"
            style={{ gap: '6rem', flexDirection: 'row-reverse' }}
          >
            <img src={illustration3.src} alt="illustration" />
            <div className="flex-1">
              <span className="square flex items-center justify-center mb-3x">
                <SVG content={studyHat(Color.Orange)} size={28} />
              </span>
              <h3 className="fz-32p fw-600 l-height-1/4 mb-3x">Premium UK and US Tutors</h3>
              <p className="fz-18p">
                We would be happy to partner with other educational organisations including
                businesses, schools, and universities,{' '}
                <b>to offer our services to a wider range of students.</b>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`pt-9x ${styles.contacts}`}>
        <div className="container narrow">
          <BlueCardBlock
            title={'Over 50 partners trust us'}
            content={`If you would like to find out more about partnership opportunities, please email <a href="mailto:${text.contacts.email}">${text.contacts.email}</a>.`}
            hireButton={false}
          />
          <div className="mt-15x mb-15x">
            <h3 className="title fz-36p fw-600 text-center mx-auto mb-4x">
              Still have questions? Let’s get in touch.
            </h3>
            <div className="links flex items-center justify-between mx-auto fz-20p fw-600">
              <a href={`mailto:${text.contacts.email}`} className="flex items-center">
                <Circle size={32} color={Color.Blue} classList="mr-1x">
                  <SVG content={email()} />
                </Circle>
                {text.contacts.email}
              </a>
              <a href={`tel:${text.contacts.primaryPhone}`} className="flex items-center">
                <Circle size={32} color={Color.Blue} classList="mr-1x">
                  <SVG content={phone()} size={14} />
                </Circle>
                {text.contacts.primaryPhone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BusinessPartnershipsPage
