import styles from './style.module.scss'
import employerImg from '~/assets/images/girl.png'
import tutorImg from '~/assets/images/frame_48095504.png'
import stanfordLogo from '~/assets/images/stanford.png'
import oxfordLogo from '~/assets/images/oxford.png'
import harvardLogo from '~/assets/images/harvard.png'
import cambridgeLogo from '~/assets/images/cambridge.png'
import massachusettsLogo from '~/assets/images/massachusetts.png'
import Link from "next/link";

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
                Exam Preparation and Admissions Support. Delivered globally by the World's Top Tutors.
              </p>
              <div className="flex items-center">
                <a href="#" className="btn btn-blue mr-5x">
                  Hire a Tutor
                </a>
                <div className="rating">
                  <div className="stars">
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FFC235"/>
                    </svg>
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FFC235"/>
                    </svg>
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FFC235"/>
                    </svg>
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FFC235"/>
                    </svg>
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FFC235"/>
                    </svg>
                  </div>
                  <p>4.92/5 based on <Link href={'/reviews'}><a className="fw-600">214 reviews</a></Link></p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="blue-book absolute round bg-white flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.3359 1.33301L18.6693 7.99967V22.6663L25.3359 16.6663V1.33301ZM1.33594 7.99967V27.533C1.33594 27.8663 1.66927 28.1997 2.0026 28.1997C2.13594 28.1997 2.2026 28.133 2.33594 28.133C4.13594 27.2663 6.73594 26.6663 8.66927 26.6663C11.2693 26.6663 14.0693 27.1997 16.0026 28.6663V7.99967C14.0693 6.53301 11.2693 5.99967 8.66927 5.99967C6.06927 5.99967 3.26927 6.53301 1.33594 7.99967ZM30.6693 25.9997V7.99967C29.8693 7.39967 29.0026 6.99967 28.0026 6.66634V24.6663C26.5359 24.1997 24.9359 23.9997 23.3359 23.9997C21.0693 23.9997 17.8026 24.8663 16.0026 25.9997V28.6663C17.8026 27.533 21.0693 26.6663 23.3359 26.6663C25.5359 26.6663 27.8026 27.0663 29.6693 28.0663C29.8026 28.133 29.8693 28.133 30.0026 28.133C30.3359 28.133 30.6693 27.7997 30.6693 27.4663V25.9997Z" fill="#001A96"/>
                </svg>
              </div>
              <div className="lesson1 bg-white text-center absolute rounded-small">
                <div className="play bg-orange round relative mx-auto flex items-center justify-center mb-1x"/>
                <p className="fw-700">Lesson 1</p>
                <p className="fz-12p">Trigonometry and graphs</p>
              </div>
              <div className="tutor absolute bg-white rounded-small">
                <div className="flex items-center">
                  <img src={tutorImg.src} alt="tutor"/>
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
      <section className="study">
        <div className="container">
          <img src="#" alt="employer" />
          <p>Study With Our Tutors</p>
          <h2>Experienced and highly qualified tutors</h2>
          <p>
            We help students gain top grades in exams and achieve admission into the UK and US's top
            universities including Oxbridge and Ivy League.
          </p>
          <a href="#" className="btn btn-blue">
            How it works?
          </a>
          <div className="card">
            <h4>Internationally Trusted</h4>
            <p>Trusted by students and parents around the world</p>
            <p>
              <img src="#" alt="logo" /> 1000+ Satisfied Students
            </p>
          </div>
          <div className="card">
            <h4>Prestigious Partners</h4>
            <p>Trusted by Oxford University and elite schools as a tutoring partner</p>
            <p>
              <img src="#" alt="logo" />
            </p>
          </div>
          <div className="card">
            <h4>Premium Tutors</h4>
            <p>Exam and Admissions Experts</p>
            <p>#tags</p>
          </div>
        </div>
      </section>
      <section className="reviews">
        <div className="container">
          <div className="card">
            <p>
              “I received a great tutor who had a fantastic way of teaching the content, allowing me
              to gain an understanding far beyond that I gained in the classroom.”
            </p>
            <p>STARS</p>
            <p>Elizabeth | Parent of English student</p>
          </div>
        </div>
      </section>
      <section className="tutors">
        <div className="container">
          <p>The World's Best Tutors</p>
          <h2>Tutor Spotlight</h2>
          <div className="flex">
            <div className="card">TUTOR</div>
            <div className="card">TUTOR</div>
            <div className="card">TUTOR</div>
            <div className="card">TUTOR</div>
            <div className="card">TUTOR</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
