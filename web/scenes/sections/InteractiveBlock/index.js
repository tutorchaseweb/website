import { useWindowSize } from '~/utils/helpers'
import { MOBILE_BREAKPOINT } from '~/utils/constants'
import styles from './style.module.scss'
import Image from 'next/image'

import InteractiveBlockDesktop from '~/assets/images/InteractiveBlockDesktop.png'
import InteractiveBlockMobile from '~/assets/images/InteractiveBlockMobile.png'
import ControlPanel from '~/assets/images/Control_Panel.png'
import LessonsCard from '~/assets/images/Lessons_Card.png'

export const InteractiveBlock = ({ className = '' }) => {
  const window = useWindowSize()
  return (
    <section
      className={`interactive bg-lightGray pt-10x pt-18x_lg pb-10x pb-18x_lg ${styles.interactive} ${className}`}
    >
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="w-full w-1/2_lg relative">
            <div className="absolute z-1 lessons">
              <Image src={LessonsCard} alt="Lessons Card" />
            </div>
            <div className="image-container">
              <Image
                src={
                  window.width < MOBILE_BREAKPOINT
                    ? InteractiveBlockMobile.src
                    : InteractiveBlockDesktop.src
                }
                alt="Illustration"
                className="rounded-small shadow-light"
                objectFit="cover"
                objectPosition="center"
                layout="fill"
              />
            </div>
            <img src={ControlPanel.src} alt="Control Panel" className="absolute z-1 control" />
          </div>
          <div className="w-full w-1/2_lg mt-6x mt-0x_lg pl-11x_lg">
            <p className="before-title fw-600 uppercase color-lightGray mb-3x">
              Interactive Tutoring Platform
            </p>
            <h2 className="section-title fw-600 mb-4x">Engaging Lessons with our Platform</h2>
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
