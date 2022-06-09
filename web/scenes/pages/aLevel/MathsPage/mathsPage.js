import Link from 'next/link'
import {
  ReviewBlock,
  BlueCardBlock,
  OurServiceBlock,
  HireFormBlock,
  RatedBlock,
} from '~/scenes/sections'
import SVG from '~/components/SVG'
import { star } from '~/utils/svgImages'
import styles from './style.module.scss'

export const MathsPage = () => {
  return (
    <section className={`first-screen text-center ${styles.firstScreen}`}>
      <div className="container">
        <p className="rating w-full flex items-center justify-center">
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
      </div>
    </section>
  )
}

export default MathsPage
