import Link from 'next/link'
import styles from './style.module.scss'

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
      <section className={`study ${styles.study}`}>
        <div className="container">
          <div className="flex items-center">
            <div className="w-full w-1/2_lg">
              <img src={videoImg.src} alt="video" className="block" />
            </div>
            <div className="w-full w-1/2_lg">
              <div className="text-wrapper ml-12x">
                <p className="fz-18p fw-600 color-lightGray uppercase mb-2x">Study With Our Tutors</p>
                <h2 className="fz-48p fw-600 mb-4x">Experienced and highly qualified tutors</h2>
                <p className="fz-18p mb-7x">
                  We help students gain top grades in exams and achieve admission into the UK and US's top
                  universities including Oxbridge and Ivy League.
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
                <span>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_938_4947)">
                      <path d="M13.987 2.33398C7.54703 2.33398 2.33203 7.56065 2.33203 14.0007C2.33203 20.4407 7.54703 25.6673 13.987 25.6673C20.4387 25.6673 25.6654 20.4407 25.6654 14.0007C25.6654 7.56065 20.4387 2.33398 13.987 2.33398ZM22.072 9.33398H18.6304C18.257 7.87565 17.7204 6.47565 17.0204 5.18065C19.167 5.91565 20.952 7.40898 22.072 9.33398ZM13.9987 4.71398C14.967 6.11398 15.7254 7.66565 16.227 9.33398H11.7704C12.272 7.66565 13.0304 6.11398 13.9987 4.71398ZM4.9687 16.334C4.78203 15.5873 4.66536 14.8057 4.66536 14.0007C4.66536 13.1957 4.78203 12.414 4.9687 11.6673H8.91203C8.8187 12.4373 8.7487 13.2073 8.7487 14.0007C8.7487 14.794 8.8187 15.564 8.91203 16.334H4.9687ZM5.92536 18.6673H9.36703C9.74036 20.1257 10.277 21.5257 10.977 22.8207C8.83036 22.0856 7.04536 20.604 5.92536 18.6673ZM9.36703 9.33398H5.92536C7.04536 7.39732 8.83036 5.91565 10.977 5.18065C10.277 6.47565 9.74036 7.87565 9.36703 9.33398ZM13.9987 23.2873C13.0304 21.8873 12.272 20.3356 11.7704 18.6673H16.227C15.7254 20.3356 14.967 21.8873 13.9987 23.2873ZM16.7287 16.334H11.2687C11.1637 15.564 11.082 14.794 11.082 14.0007C11.082 13.2073 11.1637 12.4257 11.2687 11.6673H16.7287C16.8337 12.4257 16.9154 13.2073 16.9154 14.0007C16.9154 14.794 16.8337 15.564 16.7287 16.334ZM17.0204 22.8207C17.7204 21.5257 18.257 20.1257 18.6304 18.6673H22.072C20.952 20.5923 19.167 22.0856 17.0204 22.8207ZM19.0854 16.334C19.1787 15.564 19.2487 14.794 19.2487 14.0007C19.2487 13.2073 19.1787 12.4373 19.0854 11.6673H23.0287C23.2154 12.414 23.332 13.1957 23.332 14.0007C23.332 14.8057 23.2154 15.5873 23.0287 16.334H19.0854Z" fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_938_4947">
                        <rect width="28" height="28" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
              <h4 className="title fz-32p fw-600 mb-5x">Trusted by students and parents around the world</h4>
              <p className="flex items-center">
                <img src={avatarsImg.src} alt="avatars" className="block mr-2x" /> 1000+ Satisfied Students
              </p>
            </div>
            <div className="card card-2 bg-lightGray rounded-small p-4x flex flex-col">
              <div className="flex items-center justify-between mb-4x">
                <p className="fw-600 uppercase">Prestigious Partners</p>
                <span>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0026 2.33301C7.5626 2.33301 2.33594 7.55967 2.33594 13.9997C2.33594 20.4397 7.5626 25.6663 14.0026 25.6663C20.4426 25.6663 25.6693 20.4397 25.6693 13.9997C25.6693 7.55967 20.4426 2.33301 14.0026 2.33301ZM11.6693 19.833L5.83594 13.9997L7.48094 12.3547L11.6693 16.5313L20.5243 7.67634L22.1693 9.33301L11.6693 19.833Z" fill="#F57C40"/>
                  </svg>
                </span>
              </div>
              <div className="flex justify-between flex-1">
                <h4 className="title fz-24p fw-600">Trusted by Oxford University and elite schools as a tutoring partner</h4>
                <p className="logo">
                  <img src={oxfordSmallLogo.src} alt="Oxford Logo" className="block" width="68" />
                </p>
              </div>
            </div>
            <div className="card card-3 bg-white rounded-small p-4x">
              <div className="flex items-center justify-between mb-4x">
                <p className="fw-600 uppercase">Premium Tutors</p>
                <span>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.4141 5.25C18.1391 5.25 15.6891 5.71667 13.9974 7C12.3057 5.71667 9.85573 5.25 7.58073 5.25C5.30573 5.25 2.85573 5.71667 1.16406 7V24.0917C1.16406 24.85 2.01573 24.6167 2.03906 24.6167C3.61406 23.8583 5.88906 23.3333 7.58073 23.3333C9.85573 23.3333 12.3057 23.8 13.9974 25.0833C15.5724 24.0917 18.4307 23.3333 20.4141 23.3333C22.3391 23.3333 24.3224 23.6833 25.9557 24.5583C26.4341 24.8033 26.8307 24.3367 26.8307 24.0333V7C25.0924 5.69333 22.5957 5.25 20.4141 5.25ZM24.4974 21.5833C23.2141 21.175 21.8141 21 20.4141 21C18.4307 21 15.5724 21.7583 13.9974 22.75V9.33333C15.5724 8.34167 18.4307 7.58333 20.4141 7.58333C21.8141 7.58333 23.2141 7.75833 24.4974 8.16667V21.5833Z" fill="#F57C40"/>
                  </svg>
                </span>
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
