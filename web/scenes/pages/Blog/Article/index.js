import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { PortableText } from '@portabletext/react'
import { getImageUrl } from '~/utils/helpers'
import SVG from '~/components/SVG'
import { smallArrowRight } from '~/utils/svgImages'
import { myPortableTextComponents } from '~/utils/helpers'
import { BlogCard } from '~/scenes/pages/Blog/components/BlogCard'

import styles from './style.module.scss'

export const ArticlePage = ({ article }) => {
  const [allPosts, setAllPosts] = useState([])

  useEffect(async () => {
    const QUERY = groq`
      *[_type == 'post' && !(_id in path("drafts.**"))][0...3] {
        ...,
      }
    `
    setAllPosts(await client.fetch(QUERY))
  }, [])

  return (
    <>
      <article className="article">
        <section className={`first-screen pt-16x pb-10x ${styles.firstScreen}`}>
          <div className="container mb-7x">
            <nav aria-label="breadcrumbs">
              <ol className="breadcrumb flex fw-600">
                <li>
                  <Link href="/blog">
                    <a className="color-blue">Blog</a>
                  </Link>
                </li>
                <li>
                  <SVG content={smallArrowRight()} size={10} className="ml-1x" />
                  <span>Article Page</span>
                </li>
              </ol>
            </nav>
          </div>
          <div className="container">
            <div
              className={`main-image-wrap relative bg-lightGray flex flex-col items-center justify-center p-4x overflow-hidden mx-auto mb-7x ${styles.mainImageWrap}`}
            >
              <Image
                src={`${getImageUrl(article?.mainImage?.asset?._ref)}`}
                alt={article?.mainImage?.alt ? article?.mainImage?.alt : article.title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
              <h1 className="article-title main-title fw-700 color-white l-height-1 mb-3x text-center mx-auto relative">
                {article?.title}
              </h1>
              <div className="wrap flex gap-4 items-center justify-center relative">
                {article.featured && (
                  <span className="featured rounded-xSmall bg-white color-blue fw-500">
                    Featured Article
                  </span>
                )}
                <span className="color-white">{article?.reading} min Read</span>
              </div>
            </div>
            <div className={styles.textContentWrapper}>
              <div className="description text-center fz-20p fw-600 l-height-1/4">
                <PortableText value={article?.description} />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.articleContent}>
          <div className="container">
            <div className={styles.textContentWrapper}>
              <div className="body pt-4x">
                <PortableText value={article?.body} components={myPortableTextComponents} />
              </div>
              <div className={`after-content p-3x p-4x_lg mt-11x mb-20x ${styles.afterContent}`}>
                <h3 className="medium-title fw-600 l-height-1/4 color-blue mb-2x">
                  {article?.additionalTitle}
                </h3>
                <div className="fz-18p l-height-1/5">
                  <PortableText value={article?.additionalDescription} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
      <section className={`related pt-11x pb-15x ${styles.related}`}>
        <div className="container">
          <h2 className="section-title fw-600 l-height-1/5 mb-4x text-center">Related Posts</h2>
          <div className="wrapper grid grid-columns-3 gap-8">
            {Boolean(allPosts.length > 0) &&
              allPosts.map((post) => {
                return <BlogCard key={post._id} article={post} />
              })}
          </div>
        </div>
      </section>
    </>
  )
}
