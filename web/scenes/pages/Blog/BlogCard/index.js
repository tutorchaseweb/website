import Link from 'next/link'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { getImageUrl } from '~/utils/helpers'
import { Color } from '~/utils/constants'
import SVG from '~/components/SVG'
import { arrowRight } from '~/utils/svgImages'
import { Circle } from '~/components/Circle'

import styles from './style.module.scss'

export const BlogCard = ({ article }) => {
  console.log(article)
  return (
    <article
      className={`blog-article rounded-xSmall overflow-hidden flex flex-col ${styles.blogArticle}`}
    >
      <div className="relative" style={{ aspectRatio: '2/1' }}>
        {article.featured && (
          <span className="featured rounded-xSmall bg-white absolute">Featured Article</span>
        )}
        <Image
          src={`${getImageUrl(article.mainImage.asset._ref).width(400).height(200)}`}
          alt={article.mainImage?.alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="content flex-1 p-3x">
        <h3 className="fz-20p fw-600 mb-1x">{article.title}</h3>
        <div className="description color-lightGray l-height-1/4">
          <PortableText value={article.description} />
        </div>
      </div>
      <div className="flex items-center justify-between pl-3x pr-2x pb-2x">
        <span>{article.reading} min Read</span>
        <Link href={`/blog/${article.slug.current}`}>
          <a>
            <Circle size={40} color={Color.Transparent} classList="circle">
              <SVG content={arrowRight(Color.Blue)} size={24} />
            </Circle>
          </a>
        </Link>
      </div>
    </article>
  )
}
