import Link from 'next/link'
import { useRouter } from 'next/router'
import { useGlobalState } from '~/utils/state'
import Circle from '~/components/Circle'
import { Color } from '~/utils/constants'
import SVG from '~/components/SVG'
import { navArrowLeft, navArrowRight } from '~/utils/svgImages'

import styles from './style.module.scss'

export const Pagination = ({ start, perPage, length }) => {
  const router = useRouter()
  const [, setPostsStart] = useGlobalState('postsStart', 0)
  const pages = Array.from(
    {
      length: Math.ceil(length / perPage),
    },
    (_, idx) => idx + 1
  )

  return (
    <nav className={styles.pagination}>
      <ul className="flex items-center justify-center gap-4">
        <li>
          <Link
            href={
              +router.query.number - 1 <= 1 ? '/blog' : `/blog/page/${+router.query.number - 1}`
            }
          >
            <a className={`pagination-item ${start === 0 ? 'disabled' : ''}`}>
              <Circle color={Color.Transparent} size={56} classList="circle color-lightGray border">
                <SVG content={navArrowLeft()} size={24} />
              </Circle>
            </a>
          </Link>
        </li>
        {pages.map((counter, idx) => {
          return (
            <li key={idx}>
              <Link href={counter === 1 ? '/blog' : `/blog/page/${counter}`}>
                <a
                  className={`p-1x ${
                    router.route === '/blog' && idx === 0
                      ? 'active'
                      : router.query.number == counter
                      ? 'active'
                      : ''
                  }`}
                >
                  {counter}
                </a>
              </Link>
            </li>
          )
        })}
        <li>
          <Link href={`/blog/page/${router?.query?.number ? +router.query.number + 1 : 2}`}>
            <a className={`pagination-item ${start + perPage >= length ? 'disabled' : ''}`}>
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
