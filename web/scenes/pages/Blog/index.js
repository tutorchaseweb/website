import { HireFormBlock } from '~/scenes/sections'
import { Search, Sorting, Pagination } from './components'
import { BlogCard } from './BlogCard'

import styles from './style.module.scss'

export const BlogPage = ({ page, posts }) => {
  return (
    <>
      <section className={`firstScreen pt-19x ${styles.firstScreen}`}>
        <div className="container">
          <div className="text-center">
            <h1 className="main-title fw-700 l-height-1 mb-2x">{page.title}</h1>
            <p className="fz-20p fw-500 l-height-1/4 mx-auto" style={{ maxWidth: '400px' }}>
              {page.description}
            </p>
          </div>
        </div>
      </section>
      <section className={`cards-wrap relative pb-8x ${styles.cardsWrap}`}>
        <div className="container">
          <div className="flex items-center justify-between mb-3x">
            <Search />
            <Sorting />
          </div>
          <div className="wrapper grid grid-columns-3 gap-8">
            {posts.map((post) => {
              return <BlogCard key={post._id} article={post} />
            })}
          </div>
          <Pagination />
        </div>
      </section>
      <HireFormBlock />
    </>
  )
}

export default BlogPage
