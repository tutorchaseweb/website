import SVG from '~/components/SVG'
import { Circle } from '~/components/Circle'
import { paid, studyHat, email, phone, volunteerActivism, videoCam } from '~/utils/svgImages'
import { Color } from '~/utils/constants'
import { BasedReviews, BlueCardBlock } from '~/scenes/sections'
import illustration4 from '~/assets/images/illustration-4.png'
import illustration5 from '~/assets/images/illustration-5.png'
import illustration6 from '~/assets/images/illustration-6.png'
import lgk_I8kY from '~/assets/images/lgk_I8kY_3.png'
import text from '~/assets/text-content/en/static.json'
import styles from './style.module.scss'

export const AccessProgrammePage = ({ page }) => {
  return (
    <>
      <section className={`pt-20x pb-18x ${styles.firstScreen}`}>
        <div className="container text-center">
          <BasedReviews center={true} />
          <h1 className="main-title fw-700 l-height-1 mb-3x">
            TutorChase <code>Access</code>
          </h1>
          <p className="fz-20p fw-500 l-height-1/4 mx-auto" style={{ maxWidth: '22rem' }}>
            Widening educational support in the UK
          </p>
          <div className="left-card bg-white">
            <SVG content={volunteerActivism()} size={24} />
            <p className="l-height-1/4">
              As part of the Access programme, we provide <b>free tuition in Tutorchase</b>
            </p>
            <div className="play bg-orange round relative mx-auto flex items-center justify-center mb-1x" />
          </div>
          <div className="lesson1 bg-white text-center absolute rounded-small">
            <div className="play bg-orange round relative mx-auto flex items-center justify-center mb-1x" />
            <p className="fw-700">Lesson 1</p>
            <p className="fz-12p">Trigonometry and graphs</p>
          </div>
        </div>
      </section>
      <section className={`pt-13x pb-10x bg-white ${styles.flexibility}`}>
        <div className="container narrow">
          <div className="text-center">
            <p className="fz-18p fw-600 l-height-1 color-lightGray mb-2x">Lorem ipsum</p>
            <h2 className="fz-48p fw-600 l-height-1 mb-10x">Our Access Programme</h2>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-8">
            <img src={illustration4.src} alt="illustration" />
            <div className="flex-1 limit">
              <span className="square flex items-center justify-center mb-3x">
                <SVG content={volunteerActivism(Color.Orange)} size={28} />
              </span>
              <h3 className="fz-32p fw-600 l-height-1/4 mb-3x">Premium UK and US Tutors</h3>
              <p className="fz-18p l-height-1/4">
                TutorChase is committed to providing tuition and university application support to
                students from disadvantaged backgrounds. The aim being to help those who otherwise
                would not have the financial resources to obtain private tuition receive the extra
                educational support that that we offer as an organisation.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-8 mt-12x reverse_lg">
            <img src={illustration5.src} alt="illustration" />
            <div className="flex-1 limit">
              <span className="square flex items-center justify-center mb-3x">
                <SVG content={studyHat(Color.Orange)} size={28} />
              </span>
              <h3 className="fz-32p fw-600 l-height-1/4 mb-3x">Premium UK and US Tutors</h3>
              <p className="fz-18p l-height-1/4">
                Our access programme works by pairing students with tutors, whom over the course of
                a number of sessions will help them prepare for a certain goal, whether that be
                achieving their desired grades in exams, helping them with their personal statement,
                or coaching them in preparation for a university interview. Rather than simply
                focussing on teaching subject specific knowledge, the programme is also centred
                around mentorship, where tutors will help students develop a broader set of skills
                which will help them achieve longterm educational success even after the programme
                has ended.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-8 mt-15x">
            <img src={illustration6.src} alt="illustration" />
            <div className="flex-1 limit">
              <span className="square flex items-center justify-center mb-3x">
                <SVG content={paid(Color.Orange)} size={28} />
              </span>
              <h3 className="fz-32p fw-600 l-height-1/4 mb-3x">Premium UK and US Tutors</h3>
              <p className="fz-18p l-height-1/4">
                The access programme is completely free to eligible students and is in most cases is
                funded by TutorChase.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container narrow pt-9x">
        <BlueCardBlock
          title={'Over 50 partners trust us'}
          content={`If you would like to find out more about partnership opportunities, please email <a href="mailto:${text.contacts.email}">${text.contacts.email}</a>.`}
          hireButton={false}
        />
      </div>
      <section className={` ${styles.contacts}`}>
        <div className="container narrow">
          <div className="flex flex-wrap items-center gap-8 justify-between mt-19x">
            <div style={{ maxWidth: '450px' }}>
              <h3 className="fz-32p fw-600 l-height-1 mb-4x ">
                General criteria for selecting students for the programme
              </h3>
              <ul className="ordered-list mb-10x mb-0x_lg">
                <li>Receive free school meals or have a household income of less than £21,000</li>
                <li>Attend a non fee-paying state school in the UK</li>
                <li>
                  Be predicted to or have achieved predominantly top grades (8s or 9s) at GCSEs
                </li>
                <li>Have a written letter or recommendation stating the student’s potential</li>
                <li>Be a UK resident</li>
              </ul>
            </div>
            <div className="relative">
              <div className="card bg-white absolute">
                <SVG content={videoCam(Color.LightBlue)} size={28} className="mb-1x" />
                <p className="l-height-1/4">
                  Flexible online tutoring to fit <b>around your schedule</b>
                </p>
              </div>
              <img src={lgk_I8kY.src} alt="image" />
            </div>
          </div>
          <div className="mt-15x mb-15x">
            <h3 className="title fz-36p fw-600 text-center mx-auto mb-4x">
              Still have questions? Let’s get in touch.
            </h3>
            <div className="links flex flex-wrap gap-4 items-center justify-between mx-auto fz-20p fw-600">
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

export default AccessProgrammePage
