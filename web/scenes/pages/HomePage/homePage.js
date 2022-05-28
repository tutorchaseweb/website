import styles from './style.module.scss'

console.log(styles)

export const HomePage = () => {
  return (
    <>
      <section className={`first-screen ${styles.firstScreen}`}>
        <div className="container">
          <h1 className="font-bold fz-40p lg:fz-86p mb-3x">
            Elite Online <span className="color-blue">Tutoring</span>
          </h1>
          <p className="fz-20p mb-5x lg:mb-7x">
            Exam Preparation and Admissions Support. Delivered globally by the World's Top Tutors.
          </p>
          <a href="#" className="btn btn-blue">
            Hire a Tutor
          </a>
          <img src="#" alt="employer" />
        </div>
        <div className="partners-line">
          <p>
            TUTORS FROM AND STUDENTS ACCEPTED INTO{' '}
            <span className="color-blue">the World's Top Universities</span>
          </p>
          <img src="#" alt="logo" />
          <img src="#" alt="logo" />
          <img src="#" alt="logo" />
          <img src="#" alt="logo" />
          <img src="#" alt="logo" />
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
