import Link from 'next/link'
import { ReviewBlock } from '~/scenes/sections/ReviewBlock'
import { BlueCardBlock } from '~/scenes/sections/BlueCardBlock'
import { OurServiceBlock } from '~/scenes/sections/OurServiceBlock'
import SVG from '~/components/SVG'
import {
  star,
  bookFull,
  openedBook,
  arrowTopRight,
  checkCircle,
  globe,
  videoCam,
} from '~/utils/svgImages'

import styles from './style.module.scss'
// import { Color } from '~/utils/constants'

// all used images
import employerImg from '~/assets/images/girl.png'
import tutorImg from '~/assets/images/frame_48095504.png'
import stanfordLogo from '~/assets/images/stanford.png'
import oxfordLogo from '~/assets/images/oxford.png'
import harvardLogo from '~/assets/images/harvard.png'
import cambridgeLogo from '~/assets/images/cambridge.png'
import massachusettsLogo from '~/assets/images/massachusetts.png'
import videoImg from '~/assets/images/video.png'
import avatarsImg from '~/assets/images/avatars.png'
import oxfordSmallLogo from '~/assets/images/oxford_logo.png'
import tutor1avatar from '~/assets/images/tutor_1.jpg'
import tutor2avatar from '~/assets/images/tutor_2.jpg'
import tutor3avatar from '~/assets/images/tutor_3.jpg'
import tutor4avatar from '~/assets/images/tutor_4.jpg'
import tutor5avatar from '~/assets/images/tutor_5.jpg'
import premiumTutor from '~/assets/images/premium_tutor.png'

export const HomePage = () => {
  return (
    <>
      <section className={`first-screen ${styles.firstScreen}`}>
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="text-wrapper">
              <h1 className="main-title fw-700 fz-40p mb-3x">
                Elite Online <span className="color-blue">Tutoring</span>
              </h1>
              <p className="description mb-5x mb-7x_lg">
                Exam Preparation and Admissions Support. Delivered globally by the World's Top
                Tutors.
              </p>
              <div className="flex items-center">
                <a href="#" className="btn btn-blue mr-5x">
                  Hire a Tutor
                </a>
                <div className="rating">
                  <p className="stars">
                    <SVG content={star()} size={20} />
                    <SVG content={star()} size={20} />
                    <SVG content={star()} size={20} />
                    <SVG content={star()} size={20} />
                    <SVG content={star()} size={20} />
                  </p>
                  <p>
                    4.92/5 based on{' '}
                    <Link href={'/reviews'}>
                      <a className="fw-600">214 reviews</a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="blue-book absolute round bg-white flex items-center justify-center">
                <SVG content={bookFull()} size={32} />
              </div>
              <div className="lesson1 bg-white text-center absolute rounded-small">
                <div className="play bg-orange round relative mx-auto flex items-center justify-center mb-1x" />
                <p className="fw-700">Lesson 1</p>
                <p className="fz-12p">Trigonometry and graphs</p>
              </div>
              <div className="tutor absolute bg-white rounded-small">
                <div className="flex items-center">
                  <img src={tutorImg.src} alt="tutor" />
                  <p className="fz-14p fw-600 ml-2x">Tutors for any level</p>
                </div>
                <span className="wrap">
                  <span className="line bg-orange"></span>
                  <span className="line bg-orange"></span>
                  <span className="line bg-orange"></span>
                  <span className="line bg-orange"></span>
                </span>
                <span className="fz-14p fw-800 ml-1x">A/A+</span>
              </div>
              <img src={employerImg.src} alt="employer" className="block" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-lightGray pt-5x pb-5x">
        <div className="container">
          <div className="partners-line flex gap-8 items-center">
            <p className="flex-1 uppercase color-lightGray fw-500">
              TUTORS FROM AND STUDENTS ACCEPTED <br /> INTO{' '}
              <span className="color-blue fw-600">the World's Top Universities</span>
            </p>
            <img src={stanfordLogo.src} alt="Stanford" />
            <img src={oxfordLogo.src} alt="Oxford" />
            <img src={harvardLogo.src} alt="Harvard" />
            <img src={cambridgeLogo.src} alt="Cambridge" />
            <img src={massachusettsLogo.src} alt="Massachusetts" />
          </div>
        </div>
      </section>
      <section className={`study ${styles.study}`}>
        <div className="container">
          <div className="flex items-center">
            <div className="w-full w-1/2_lg">
              <img src={videoImg.src} alt="video" className="block" />
            </div>
            <div className="w-full w-1/2_lg">
              <div className="text-wrapper ml-12x">
                <p className="fz-18p fw-600 color-lightGray uppercase mb-2x">
                  Study With Our Tutors
                </p>
                <h2 className="fz-48p fw-600 mb-4x">Experienced and highly qualified tutors</h2>
                <p className="fz-18p mb-7x">
                  We help students gain top grades in exams and achieve admission into the UK and
                  US's top universities including Oxbridge and Ivy League.
                </p>
                <a href="#" className="btn btn-blue">
                  How it works?
                </a>
              </div>
            </div>
          </div>
          <div className="cards-wrapper flex gap-8">
            <div className="card card-1 bg-blue rounded-small p-4x">
              <div className="flex items-center justify-between mb-4x">
                <p className="fw-600 uppercase">Internationally Trusted</p>
                <SVG content={globe()} size={28} />
              </div>
              <h4 className="title fz-32p fw-600 mb-5x">
                Trusted by students and parents around the world
              </h4>
              <p className="flex items-center">
                <img src={avatarsImg.src} alt="avatars" className="block mr-2x" /> 1000+ Satisfied
                Students
              </p>
            </div>
            <div className="card card-2 bg-lightGray rounded-small p-4x flex flex-col">
              <div className="flex items-center justify-between mb-4x">
                <p className="fw-600 uppercase">Prestigious Partners</p>
                <SVG content={checkCircle()} size={28} />
              </div>
              <div className="flex justify-between flex-1">
                <h4 className="title fz-24p fw-600">
                  Trusted by Oxford University and elite schools as a tutoring partner
                </h4>
                <p className="logo">
                  <img src={oxfordSmallLogo.src} alt="Oxford Logo" className="block" width="68" />
                </p>
              </div>
            </div>
            <div className="card card-3 bg-white rounded-small p-4x border-light">
              <div className="flex items-center justify-between mb-4x">
                <p className="fw-600 uppercase">Premium Tutors</p>
                <SVG content={openedBook()} size={28} />
              </div>
              <h4 className="title fz-24p fw-600 mb-3x">Exam and Admissions Experts</h4>
              <p className="color-blue fz-14p fw-600">
                <span className="tag">GCSE</span>
                <span className="tag">IGCSE</span>
                <span className="tag">IB</span>
                <span className="tag">UK / Oxbridge Admissions</span>
                <span className="tag">AP</span>
                <span className="tag">US / Ivy League Admissions</span>
                <span className="tag">A-Level</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <ReviewBlock
        content={`I received a great tutor who had a fantastic way of teaching the content, <b>
          allowing me to gain an understanding far beyond that I gained in the classroom.</b>`}
        author={'Elizabeth'}
        position={'Parent of English student'}
      />
      <section className={`tutors pt-15x pb-15x text-center ${styles.tutors}`}>
        <div className="container">
          <p className="fz-18p fw-600 uppercase color-lightGray mb-3x">The World's Best Tutors</p>
          <h2 className="fz-48p fw-600 mb-6x">Tutor Spotlight</h2>
          <div className="flex">
            <Link href={'/'}>
              <a className="card block relative transition flex-1 border-light pt-6x pb-6x pl-3x pr-3x">
                <span className="arrow absolute transition top-0 right-0 flex items-center justify-center border-light">
                  <SVG content={arrowTopRight()} size={20} />
                </span>
                <p className="avatar color-blue border border-round relative mx-auto">
                  <img
                    src={tutor1avatar.src}
                    alt="Mally"
                    className="absolute inset-0 border-round p-1x"
                  />
                </p>
                <p className="fz-18p fw-700 mb-1x">Mally</p>
                <p className="mb-3x">English Tutor</p>
                <img src={stanfordLogo.src} alt="Stanford Logo" style={{ height: '24px' }} />
              </a>
            </Link>
            <Link href={'/'}>
              <a className="card block relative transition flex-1 border-light pt-6x pb-6x pl-3x pr-3x">
                <span className="arrow absolute transition top-0 right-0 flex items-center justify-center border-light">
                  <SVG content={arrowTopRight()} size={20} />
                </span>
                <p className="avatar color-blue border border-round relative mx-auto">
                  <img
                    src={tutor2avatar.src}
                    alt="Mally"
                    className="absolute inset-0 border-round p-1x"
                  />
                </p>
                <p className="fz-18p fw-700 mb-1x">Mally</p>
                <p className="mb-3x">English Tutor</p>
                <img src={oxfordLogo.src} alt="Oxford Logo" style={{ height: '24px' }} />
              </a>
            </Link>
            <Link href={'/'}>
              <a className="card block relative transition flex-1 border-light pt-6x pb-6x pl-3x pr-3x">
                <span className="arrow absolute transition top-0 right-0 flex items-center justify-center border-light">
                  <SVG content={arrowTopRight()} size={20} />
                </span>
                <p className="avatar color-blue border border-round relative mx-auto">
                  <img
                    src={tutor3avatar.src}
                    alt="Matthew"
                    className="absolute inset-0 border-round p-1x"
                  />
                </p>
                <p className="fz-18p fw-700 mb-1x">Matthew</p>
                <p className="mb-3x">English Tutor</p>
                <img src={harvardLogo.src} alt="Harvard Logo" style={{ height: '24px' }} />
              </a>
            </Link>
            <Link href={'/'}>
              <a className="card block relative transition flex-1 border-light pt-6x pb-6x pl-3x pr-3x">
                <span className="arrow absolute transition top-0 right-0 flex items-center justify-center border-light">
                  <SVG content={arrowTopRight()} size={20} />
                </span>
                <p className="avatar color-blue border border-round relative mx-auto">
                  <img
                    src={tutor4avatar.src}
                    alt="Matthew"
                    className="absolute inset-0 border-round p-1x"
                  />
                </p>
                <p className="fz-18p fw-700 mb-1x">Matthew</p>
                <p className="mb-3x">English Tutor</p>
                <img src={cambridgeLogo.src} alt="Cambridge Logo" style={{ height: '24px' }} />
              </a>
            </Link>
            <Link href={'/'}>
              <a className="card block relative transition flex-1 border-light pt-6x pb-6x pl-3x pr-3x">
                <span className="arrow absolute transition top-0 right-0 flex items-center justify-center border-light">
                  <SVG content={arrowTopRight()} size={20} />
                </span>
                <p className="avatar color-blue border border-round relative mx-auto">
                  <img
                    src={tutor5avatar.src}
                    alt="Matthew"
                    className="absolute inset-0 border-round p-1x"
                  />
                </p>
                <p className="fz-18p fw-700 mb-1x">Matthew</p>
                <p className="mb-3x">English Tutor</p>
                <img
                  src={massachusettsLogo.src}
                  alt="Massachusetts Logo"
                  style={{ height: '24px' }}
                />
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className={`premium pt-5x pb-18x ${styles.premium}`}>
        <div className="container">
          <div className="flex items-center">
            <div className="w-full w-1/2_lg relative">
              <div className="card absolute bg-white rounded-small p-3x">
                <SVG content={videoCam()} size={32} className="mb-2x" />
                <p className="fz-18p">
                  Flexible online tutoring to fit <b>around your schedule</b>
                </p>
              </div>
              <img src={premiumTutor.src} alt="Premium Tutor" className="block" />
              <div className="check-book absolute round bg-white flex items-center justify-center">
                <SVG content={checkCircle()} size={28} />
              </div>
            </div>
            <div className="w-full w-1/2_lg pl-10x">
              <div className="flex items-center justify-between mb-6x">
                <h2 className="fz-32p fw-600">Premium UK and US Tutors</h2>
                <a href="#" className="btn btn-blue ml-5x">
                  Hire a Tutor
                </a>
              </div>

              <ul>
                <li>
                  We personally interview all our tutors to ensure they deliver the highest quality
                  tuition.
                </li>
                <li>
                  Tutors act as mentors who have successfully navigated exams and the university
                  application process themselves
                </li>
                <li>
                  They each have extensive experience helping students achieve their academic goals
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ReviewBlock
        content={`My Son had an excellent tutor who helped him in preparing for his STEP exam. Her
          teaching style was very good, allowing him to solve the Maths problem by himself
          with a little hint, rather than helping him with the answer. <b> Highly recommend 
          Tutor Chase, they helped me to find the right Tutor within our Budget and the tutor 
          was a Cambridge Mathematics Graduate, which we were looking for.</b>`}
        author={'Elizabeth'}
        position={'Parent of English student'}
      />
      <section className={`globally pt-15x ${styles.globally}`}>
        <div className="container text-center">
          <p className="fz-18p fw-600 uppercase color-lightGray mb-3x">Trusted Globally</p>
          <h2 className="title fz-48p fw-600 mb-6x mx-auto">
            Tutoring delivered in the UK, US, and Internationally
          </h2>
        </div>
        <div className="map pt-6x pb-15x">
          <div className="container">
            <p>Lesson 2 1h 30m</p>
            <p>Students in 70+ countries</p>
            <p>Tutors fit to your schedule in your time zone</p>
          </div>
        </div>
        <div className="container">
          <BlueCardBlock
            title={'98% of Students Recommend Us'}
            content={'Get in Touch Now'}
            linkText={'Hire a Tutor'}
            linkUrl={'/'}
          />
        </div>
      </section>
      <section className={`interactive pt-18x pb-18x ${styles.interactive}`}>
        <div className="container">
          <div className="flex items-center">
            <div className="w-full w-1/2_lg relative">
              <img src="" alt="Illustration" />
            </div>
            <div className="w-full w-1/2_lg">
              <p className="fz-18p fw-600 uppercase color-lightGray mb-3x">
                Interactive Tutoring Platform
              </p>
              <h2 className="fz-48p fw-600 mb-4x">Engaging Lessons with our Platform</h2>
              <p className="fz-18p">
                Lessons are brought to life and students can interact with tutors by drawing
                diagrams, solving equations, editing essays, and annotating work.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`rated`}>
        <div className="wrapper">
          <div className="content">
            <p className="mb-2x">
              <SVG content={star()} size={24} />
              <SVG content={star()} size={24} />
              <SVG content={star()} size={24} />
              <SVG content={star()} size={24} />
              <SVG content={star()} size={24} />
            </p>
            <h2 className="fz-48p fw-600 mb-4x">Rated 4.92/5 based on 214 reviews</h2>
            <p className="fz-20p">Trusted globally by students and parents</p>
            <Link href={'/'}>
              <a className="btn btn-blue">Read our verified reviews</a>
            </Link>
          </div>
        </div>
      </section>
      <OurServiceBlock />
    </>
  )
}

export default HomePage
