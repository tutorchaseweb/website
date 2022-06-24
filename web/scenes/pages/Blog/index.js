import Link from 'next/link'
import Circle from '~/components/Circle'
import SVG from '~/components/SVG'
import { magnifier, navArrowLeft, navArrowRight } from '~/utils/svgImages'
import { Color } from '~/utils/constants'
import { HireFormBlock } from '~/scenes/sections'
import { BlogCard } from './BlogCard'

import styles from './style.module.scss'

export const BlogPage = ({ posts }) => {
  return (
    <>
      <section className={`firstScreen pt-19x ${styles.firstScreen}`}>
        <div className="container">
          <div className="text-center">
            <h1 className="fz-64p fw-700 l-height-1 mb-2x">Blog</h1>
            <p className="fz-20p fw-500 l-height-1/4 mx-auto" style={{ maxWidth: '400px' }}>
              Elite online tutoring delivered globally by expert A-Level Maths tutors.
            </p>
          </div>
        </div>
      </section>
      <section className={`cards-wrap relative ${styles.cardsWrap}`}>
        <div className="container">
          <form className="flex items-center justify-between mb-3x">
            <label className="search relative">
              <SVG content={magnifier()} size={24} />
              <input type="search" placeholder="Search" />
            </label>
            <label className="sorting">
              <select name="sorting" className="p-1x border-light l-height-1 w-full rounded-xSmall">
                <option value="none">Sort By</option>
                <option value="new">New</option>
                <option value="old">Old</option>
              </select>
            </label>
          </form>
          <div className="wrapper grid grid-columns-3 gap-8">
            {posts.map((post) => {
              return <BlogCard key={post._id} article={post} />
            })}
          </div>
          <nav className="pagination mt-7x">
            <ul className="flex items-center justify-center gap-8">
              <li>
                <Link href={'/'}>
                  <a className="pagination-item">
                    <Circle
                      color={Color.Transparent}
                      size={56}
                      classList="circle color-lightGray border"
                    >
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
                    <Circle
                      color={Color.Transparent}
                      size={56}
                      classList="circle color-lightGray border"
                    >
                      <SVG content={navArrowRight()} size={24} />
                    </Circle>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <HireFormBlock />
    </>
  )
}

export default BlogPage
