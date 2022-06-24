import Image from 'next/image'
import Link from 'next/link'
import { gql, useQuery } from '@apollo/client'
import { PortableText } from '@portabletext/react'
import { Loader } from '~/components/Loader'
import { getImageUrl } from '~/utils/helpers'
import SVG from '~/components/SVG'
import { smallArrowRight } from '~/utils/svgImages'
import { myPortableTextComponents } from '~/utils/helpers'

import styles from './style.module.scss'
import { BlogCard } from '~/scenes/pages/Blog/BlogCard'

export const ArticlePage = ({ article }) => {
  const QUERY = gql`
    query Config {
      allPost {
        _id
        title
        descriptionRaw
        featured
        reading
        slug {
          current
        }
        mainImage {
          asset {
            url
          }
          alt
        }
      }
    }
  `
  const { data, loading, error } = useQuery(QUERY)

  if (loading) {
    return <Loader />
  }
  if (error) {
    console.error(error)
    return null
  }
  const { allPost } = data

  // allPost && console.log(allPost)

  const posts = allPost.slice(0, 3)

  console.log(article)

  return (
    <>
      <article className="article">
        <section className={`first-screen pt-16x pb-10x ${styles.firstScreen}`}>
          <div className="container mb-7x">
            <nav aria-label="breadcrumbs">
              <ol className="breadcrumb flex">
                <li>
                  <Link href="/blog">
                    <a>Blog</a>
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
                src={`${getImageUrl(article.mainImage.asset._ref)}`}
                alt={article.mainImage?.alt}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
              <h1 className="article-title fz-64p fw-700 color-white l-height-1 mb-3x text-center mx-auto relative">
                {article.title}
              </h1>
              <div className="text-center relative">
                {article.featured && (
                  <span className="featured rounded-xSmall bg-white mr-2x">Featured Article</span>
                )}
                <span className="color-white">{article.reading} min Read</span>
              </div>
            </div>
            <div className={styles.textContentWrapper}>
              <div className="description fz-20p fw-500 l-height-1/4">
                <PortableText value={article.description} />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.articleContent}>
          <div className="container">
            <div className={styles.textContentWrapper}>
              <div className="body pt-4x">
                <PortableText value={article.body} components={myPortableTextComponents} />
              </div>
              <div className={`after-content p-4x mt-11x mb-20x ${styles.afterContent}`}>
                <h3 className="fz-32p fw-600 l-height-1/4 color-blue mb-2x">
                  {article.additionalTitle}
                </h3>
                <div className="fz-18p l-height-1/5">
                  <PortableText value={article.additionalDescription} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
      <section className={`related pt-11x pb-15x ${styles.related}`}>
        <div className="container">
          <h2 className="fz-48p fw-600 l-height-1/5 mb-4x text-center">Related Posts</h2>
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
