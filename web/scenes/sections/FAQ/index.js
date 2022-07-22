import styles from './style.module.scss'

export const FAQ = () => {
  return (
    <section className={`faq-block pt-18x pb-10x ${styles.faqBlock}`}>
      <div className="container narrow">
        <div className="flex items-center">
          <div className="text mr-8x">
            <p className="fz-18p fw-600 l-height-1 uppercase color-lightGray mb-3x">Our Service</p>
            <h2 className="fz-48p fw-600 mb-4x">FAQ</h2>
            <p className="description fz-18p l-height-1/5">
              Lessons are brought to life and students can interact with tutors by drawing diagrams,
              solving equations, editing essays, and annotating work.{' '}
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
  )
}

export default FAQ
