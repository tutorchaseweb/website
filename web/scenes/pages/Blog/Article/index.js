import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { getImageUrl } from '~/utils/helpers'
import SVG from '~/components/SVG'
import { smallArrowRight } from '~/utils/svgImages'

export const ArticlePage = ({ article }) => {
  console.log(article)
    return (
        <article className="pt-16x">
          <nav aria-label="breadcrumbs">
            <ol className="breadcrumb flex">
              <li>
                <Link href="/blog"><a>Blog</a></Link>
              </li>
              <li>
                <SVG content={smallArrowRight()} size={10} className="ml-1x" />
                <span>Article Page</span>
              </li>
            </ol>
          </nav>
            <div className="container">
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
                <h1>{article.title}</h1>
              <div className="description color-lightGray l-height-1/4">
                <PortableText value={article.description} />
              </div>
              <div className='body'>
                <PortableText value={article.body} />
              </div>
              <div className="bg-blue">
                <h3>{article.additionalTitle}</h3>
                <div>
                  <PortableText value={article.additionalDescription} />
                </div>
              </div>
            </div>
        </article>
    )
}