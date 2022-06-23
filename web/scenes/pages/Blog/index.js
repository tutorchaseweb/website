import { BlogCard } from './BlogCard'

import styles from './style.module.scss'

export const BlogPage = ({ posts }) => {
  return (
    <>
      <section className={`firstScreen pt-19x ${styles.firstScreen}`}>
        <div className="container">
          <div className='text-center'>
            <h1 className="fz-64p fw-700 l-height-1 mb-2x">Blog</h1>
            <p className="fz-20p fw-500 l-height-1/4 mx-auto" style={{ maxWidth: '400px'}}>
              Elite online tutoring delivered globally by expert A-Level Maths tutors.
            </p>
          </div>
        </div>
      </section>
      <section className={`cards-wrap relative ${styles.cardsWrap}`}>
        <div className='container'>
          <div className="wrapper grid grid-columns-3 gap-8">
            {posts.map((post) => {
              return <BlogCard key={post._id} article={post} />
            })}
          </div>
        </div>
      </section>
    </>

  )
}

export default BlogPage
