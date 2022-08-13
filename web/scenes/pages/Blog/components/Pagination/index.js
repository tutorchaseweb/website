import Link from 'next/link'
import Circle from '~/components/Circle'
import { Color } from '~/utils/constants'
import SVG from '~/components/SVG'
import { navArrowLeft, navArrowRight } from '~/utils/svgImages'

export const Pagination = () => {
  return (
    <nav className="pagination mt-7x">
      <ul className="flex items-center justify-center gap-8">
        <li>
          <Link href={'/'}>
            <a className="pagination-item">
              <Circle color={Color.Transparent} size={56} classList="circle color-lightGray border">
                <SVG content={navArrowLeft()} size={24} />
              </Circle>
            </a>
          </Link>
        </li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>
          <Link href={'/'}>
            <a className="pagination-item">
              <Circle color={Color.Transparent} size={56} classList="circle color-lightGray border">
                <SVG content={navArrowRight()} size={24} />
              </Circle>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
