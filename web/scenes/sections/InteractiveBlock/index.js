import styles from './style.module.scss'
import illustrationImg from '~/assets/images/illustration.png'

export const InteractiveBlock = ({ className }) => {
  return (
    <section className={`interactive pt-18x pb-18x ${styles.interactive} ${className}`}>
      <div className="container">
        <div className="flex items-center">
          <div className="w-full w-1/2_lg relative">
            <img src={illustrationImg.src} alt="Illustration" />
          </div>
          <div className="w-full w-1/2_lg pl-11x">
            <p className="fz-18p fw-600 uppercase color-lightGray mb-3x">
              Interactive Tutoring Platform
            </p>
            <h2 className="fz-48p fw-600 mb-4x">Engaging Lessons with our Platform</h2>
            <p className="fz-18p">
              Lessons are brought to life and students can interact with tutors by drawing diagrams,
              solving equations, editing essays, and annotating work.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
