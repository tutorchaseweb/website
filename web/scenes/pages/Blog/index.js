import { useEffect, useState } from 'react'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { getQueryForBlog } from '~/utils/helpers'
import { useGlobalState } from '~/utils/state'
import { HireFormBlock } from '~/scenes/sections'
import { Search, Sorting, Pagination } from './components'
import { BlogCard } from './BlogCard'

import styles from './style.module.scss'

export const BlogPage = ({ page, start }) => {
  const [currentPosts, setCurrentPosts] = useState(0)
  const [postsLength, setPostsLength] = useState(0)
  const [postsOrder] = useGlobalState('postsOrder', null)

  useEffect(() => {
    const QUERY = groq`
      *[_type == 'post' && !(_id in path("drafts.**"))] {
        _id,
      }
    `
    client.fetch(QUERY).then((posts) => setPostsLength(posts.length))
  }, [])

  useEffect(async () => {
    const query = getQueryForBlog(postsOrder, start, page.postsPerPage)
    setCurrentPosts(await client.fetch(query))
  }, [postsOrder, start])

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
            {Boolean(currentPosts.length) &&
              currentPosts.map((post) => {
                return <BlogCard key={post._id} article={post} />
              })}
          </div>
          {postsLength > page.postsPerPage && (
            <div className="mt-7x">
              <Pagination start={start} perPage={page.postsPerPage} length={postsLength} />
            </div>
          )}
        </div>
      </section>
      <HireFormBlock />
    </>
  )
}

export default BlogPage
