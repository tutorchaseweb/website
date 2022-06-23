import Link from 'next/link'
import {
  ReviewBlock,
  BlueCardBlock,
  OurServiceBlock,
  HireFormBlock,
  RatedBlock,
  InteractiveBlock,
} from '~/scenes/sections'
import SVG from '~/components/SVG'
import { awesomeStar, star, studyHat } from '~/utils/svgImages'
import tutors from '../data.json'
import styles from './style.module.scss'

export const MathsPage = () => {
  return (
    <>
      <section className={`first-screen text-center pt-20x pb-19x ${styles.firstScreen}`}>
        <div className="container">
          <p className="rating w-full flex items-center justify-center mb-4x">
            <span className="stars l-height-1 mr-1x">
              <SVG content={star()} size={20} />
              <SVG content={star()} size={20} />
              <SVG content={star()} size={20} />
              <SVG content={star()} size={20} />
              <SVG content={star()} size={20} />
            </span>
            4.92/5 based on{' '}
            <Link href={'/reviews'}>
              <a className="fw-600 ml-1x">214 reviews</a>
            </Link>
          </p>
          <h1 className="title fz-64p fw-700 l-height-1 mb-3x mx-auto">
            Online A-Level Maths Tutors
          </h1>
          <p className="description fz-20p l-height-1/4 mx-auto">
            Exam Preparation and Admissions Support. Delivered globally by the World's Top Tutors.
          </p>
          <div className="lesson-card w-full absolute bg-white rounded-small overflow-hidden">
            <p className="image"></p>
            <p className="text fw-700">Lesson 1</p>
          </div>
          <div className="play-card w-full absolute bg-white rounded-small">
            <span className="live fw-700 uppercase bg-orange color-white absolute rounded-xSmall">
              Live
            </span>
          </div>
        </div>
      </section>
      <section className={`filter pt-3x pb-3x ${styles.filter}`}>
        <div className="container">
          <div className="flex items-center justify-between">
            <form>
              <label className="mr-2x">
                <select>
                  <option value="unselected" selected disabled>
                    Select subject
                  </option>
                </select>
              </label>
              <label className="mr-2x">
                <select>
                  <option value="all-levels" selected>
                    All levels
                  </option>
                </select>
              </label>
            </form>
            <p className="fz-18p">
              Fully flexible pay-as-you-go tutoring |
              <span className="label-blue fz-20p l-height-1 fw-700 bg-blue color-white ml-1x">
                From £49/Hour
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className={`tutors-list pt-11x pb-19x ${styles.tutorsList}`}>
        <div className="container">
          <h2 className="fz-36p fw-600 l-height-1/4 mb-2x">A-Level Maths Tutor Spotlight</h2>
          <p className="description fz-18p mb-3x">
            Our A-Level Maths tutors have all studied at the UK's top universities, achieved A*
            grades, and have extensive tutoring experience.{' '}
            <strong>We'll find the perfect tutor for you based on your requirements!</strong>
          </p>
          <div className="flex flex-wrap gap-8">
            {tutors.map((tutor) => {
              return (
                <div key={tutor.id} className="tutor-card flex w-full border-light rounded-small">
                  <img src={tutor.avatar} alt={tutor.name} className="block" />
                  <div className="content p-4x">
                    <p className="flex items-center mb-4x">
                      <span className="fz-22p fw-600 mr-3x">{tutor.name}</span>
                      <SVG content={awesomeStar()} size={24} />
                      <span className="fz-14p fw-500 ml-1x">{tutor.position}</span>
                    </p>
                    <p className="flex items-center fw-500 mb-2x">
                      <SVG content={studyHat()} size={24} className="mr-1x" />
                      {tutor.education}
                    </p>
                    <p className="l-height-1/5">{tutor.description}</p>
                  </div>
                  <div className="actions">
                    <p className="fz-14p fw-600 l-height-1/4 pt-4x pb-4x pl-3x pr-3x">
                      <span className="mr-1x">Teaches:</span>
                      {tutor.teaches.map((teach) => (
                        <span className="teach mr-1x mb-1x">{teach}</span>
                      ))}
                    </p>
                    <a href="" className="btn btn-white w-full">
                      View profile
                    </a>
                    <a href="" className="btn btn-blue w-full">
                      Hire a tutor
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="container narrow">
          <BlueCardBlock
            title={'Our academic consultants will find the perfect tutor for you!'}
            content={
              "Looking for something specific? Get in touch with us now and we'll find the best tutor for you."
            }
          />
        </div>
      </section>
      <InteractiveBlock />
      <ReviewBlock
        content={
          'My Son had an excellent tutor who helped him in preparing for his STEP exam. Her teaching style was very good, allowing him to solve the Maths problem by himself with a little hint, rather than helping him with the answer. Highly recommend Tutor Chase, they helped me to find the right Tutor within our Budget and the tutor was a Cambridge Mathematics Graduate, which we were looking for.'
        }
        author={'Elizabeth'}
        position={'Parent of English student'}
      />
      <OurServiceBlock />
      <div className="pt-15x"></div>
      <RatedBlock />
      <section className={`faq-block pt-18x pb-10x ${styles.faqBlock}`}>
        <div className="container narrow">
          <div className="flex">
            <div className="text mr-8x">
              <p className="fz-18p fw-600 l-height-1 uppercase color-lightGray mb-3x">
                Our Service
              </p>
              <h2 className="fz-48p fw-600 mb-4x">FAQ</h2>
              <p className="description fz-18p l-height-1/5">
                Lessons are brought to life and students can interact with tutors by drawing
                diagrams, solving equations, editing essays, and annotating work.{' '}
              </p>
            </div>
            <div className="wrapper flex-1">
              <div className="accordion">
                <div className="item">
                  <div
                    className="question pointer"
                    onClick={(e) => {
                      e.target.classList.toggle('active')
                      e.target.nextElementSibling.classList.toggle('open')
                    }}
                  >
                    General
                  </div>
                  <div className="answer">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, officiis!
                  </div>
                </div>
                <div className="item">
                  <div
                    className="question pointer"
                    onClick={(e) => {
                      e.target.classList.toggle('active')
                      e.target.nextElementSibling.classList.toggle('open')
                    }}
                  >
                    Daily Check-in
                  </div>
                  <div className="answer">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, officiis!
                  </div>
                </div>
                <div className="item">
                  <div
                    className="question pointer"
                    onClick={(e) => {
                      e.target.classList.toggle('active')
                      e.target.nextElementSibling.classList.toggle('open')
                    }}
                  >
                    How to hire a tutor who is the best fit for me?
                  </div>
                  <div className="answer">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, officiis!
                  </div>
                </div>
                <div className="item">
                  <div
                    className="question pointer"
                    onClick={(e) => {
                      e.target.classList.toggle('active')
                      e.target.nextElementSibling.classList.toggle('open')
                    }}
                  >
                    Paying for classes
                  </div>
                  <div className="answer">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, officiis!
                  </div>
                </div>
                <div className="item">
                  <div
                    className="question pointer"
                    onClick={(e) => {
                      e.target.classList.toggle('active')
                      e.target.nextElementSibling.classList.toggle('open')
                    }}
                  >
                    How is the platform related to tutors?
                  </div>
                  <div className="answer">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, officiis!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HireFormBlock />
    </>
  )
}

export default MathsPage
