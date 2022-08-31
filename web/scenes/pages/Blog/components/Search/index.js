import Link from 'next/link'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import debounce from 'lodash.debounce'
import SVG from '~/components/SVG'
import { magnifier } from '~/utils/svgImages'
import { useEffect, useState } from 'react'

import styles from './style.module.scss'

export const Search = () => {
  const [allPosts, setAllPosts] = useState([])
  const [searchResult, setSearchResult] = useState([])
  useEffect(async () => {
    const QUERY = groq`
      *[_type == 'post' && !(_id in path("drafts.**"))] {
        _id,
        slug,
        title,
      }
    `
    setAllPosts(await client.fetch(QUERY))
  }, [])

  const handler = debounce((event) => {
    setSearchResult(
      allPosts.filter(
        (post) => event.target.value && post.title.toLowerCase().includes(event.target.value)
      )
    )
  }, 500)

  return (
    <div className={`relative ${styles.wrapper}`}>
      <form className="form">
        <label className="search relative">
          <SVG content={magnifier()} size={24} />
          <input type="search" placeholder="Search" className="w-full" onChange={handler} />
        </label>
      </form>
      {Boolean(searchResult.length) && (
        <ul className="absolute result bg-white shadow-light">
          {searchResult.map((post, idx) => {
            return (
              <li key={idx}>
                <Link href={`/blog/${post.slug.current}`}>
                  <a>{post.title}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default Search
