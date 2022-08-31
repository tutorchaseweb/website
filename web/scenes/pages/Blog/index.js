import { useEffect, useState } from 'react'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { getQueryForBlog, useWindowSize } from '~/utils/helpers'
import { MOBILE_BREAKPOINT } from '~/utils/constants'
import { useGlobalState } from '~/utils/state'
import { HireFormBlock } from '~/scenes/sections'
import { Search, Sorting, Pagination, BlogCard } from './components'
import SVG from '~/components/SVG'
import { arrowDown } from '~/utils/svgImages'

import styles from './style.module.scss'

export const BlogPage = ({ page, start }) => {
  const [currentPosts, setCurrentPosts] = useState([])
  const [postsLength, setPostsLength] = useState(0)
  const [postsLimit, setPostsLimit] = useState(page.postsPerPage)
  const [postsOrder] = useGlobalState('postsOrder', null)
  const window = useWindowSize()

  useEffect(() => {
    const QUERY = groq`
      *[_type == 'post' && !(_id in path("drafts.**"))] {
        _id,
      }
    `
    client.fetch(QUERY).then((posts) => setPostsLength(posts.length))
  }, [])

  useEffect(async () => {
    const query = getQueryForBlog(postsOrder, start, postsLimit)
    setCurrentPosts(await client.fetch(query))
  }, [postsOrder, start, postsLimit])

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
      <section className={`cards-wrap relative pb-8x_lg ${styles.cardsWrap}`}>
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
          {window.width < MOBILE_BREAKPOINT ? (
            <>
              {postsLength > postsLimit && (
                <div className="text-center mt-4x">
                  <button
                    className="btn btn-gray small mx-auto"
                    onClick={() => {
                      setPostsLimit(postsLimit + page.postsPerPage)
                    }}
                  >
                    <span className="flex items-center gap-2 pl-1x">
                      Load More
                      <SVG content={arrowDown()} size={24} />
                    </span>
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              {postsLength > page.postsPerPage && (
                <div className="mt-7x">
                  <Pagination start={start} perPage={page.postsPerPage} length={postsLength} />
                </div>
              )}
            </>
          )}
        </div>
      </section>
      <HireFormBlock />
    </>
  )
}

export default BlogPage
