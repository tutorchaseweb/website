import { useState, useEffect } from 'react'
import { PortableText } from '@portabletext/react'
import client from '~/utils/sanity-client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import SVG from '~/components/SVG'
import { shuffleArray, useWindowSize } from '~/utils/helpers'
import { REVIEWS_BREAKPOINT } from '~/utils/constants'
import { ConfigContext } from '~/components/Layout'
import { star } from '~/utils/svgImages'
import styles from './style.module.scss'

const getReviewCard = (review) => {
  return (
    <div className="card bg-white pt-3x pb-3x pl-2x pr-2x pt-4x_xl pb-4x_xl pl-3x_xl pr-3x_xl">
      <div className="reviewContent l-height-1/5 mb-3x overflow-hidden">
        <PortableText value={review.content} />
      </div>
      <p className="l-height-1 mb-2x">
        <SVG content={star()} size={18} />
        <SVG content={star()} size={18} />
        <SVG content={star()} size={18} />
        <SVG content={star()} size={18} />
        <SVG content={star()} size={18} />
      </p>
      <p className="fw-800 l-height-1 mb-1x">{review.author}</p>
      <p className="fz-14p">{review.position}</p>
    </div>
  )
}

const MobileReviews = ({ reviews }) => {
  return (
    <div className="reviews">
      <Swiper
        autoHeight={true}
        autoplay={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        slidesPerView={'auto'}
        modules={[Autoplay]}
      >
        {reviews.map((review) => {
          return <SwiperSlide key={review._id}>{getReviewCard(review)}</SwiperSlide>
        })}
      </Swiper>
    </div>
  )
}

const DesktopReviews = ({ reviews }) => {
  return (
    <div className="reviews flex gap-8">
      <Swiper
        autoHeight={true}
        autoplay={{ delay: 0 }}
        centeredSlides={true}
        direction={'vertical'}
        loop={true}
        spaceBetween={30}
        slidesPerView={'auto'}
        speed={12000}
        modules={[Autoplay]}
      >
        {shuffleArray(reviews).map((review, idx) => {
          return <SwiperSlide key={`${review._id}-${idx}`}>{getReviewCard(review)}</SwiperSlide>
        })}
      </Swiper>
      <Swiper
        autoHeight={true}
        autoplay={{
          delay: 0,
          reverseDirection: true,
        }}
        centeredSlides={true}
        direction={'vertical'}
        loop={true}
        spaceBetween={30}
        slidesPerView={'auto'}
        speed={10000}
        modules={[Autoplay]}
      >
        {shuffleArray(reviews).map((review, idx) => {
          return <SwiperSlide key={`${review._id}-${idx}`}>{getReviewCard(review)}</SwiperSlide>
        })}
      </Swiper>
      <Swiper
        autoHeight={true}
        autoplay={{ delay: 0 }}
        centeredSlides={true}
        direction={'vertical'}
        loop={true}
        spaceBetween={30}
        slidesPerView={'auto'}
        speed={8000}
        modules={[Autoplay]}
      >
        {shuffleArray(reviews).map((review, idx) => {
          return <SwiperSlide key={`${review._id}-${idx}`}>{getReviewCard(review)}</SwiperSlide>
        })}
      </Swiper>
    </div>
  )
}

export const RatedBlock = ({ className }) => {
  const [allReviews, setAllReviews] = useState([])
  useEffect(async () => {
    const query = `*[_type == 'review' && !(_id in path("drafts.**"))] { 
        _id,
        _rev,
        _type,
        _createdAt,
        _updatedAt,
        'author': reviewBlock.author,
        'position': reviewBlock.position,
        'content': reviewBlock.content
      }`
    setAllReviews(await client.fetch(query))
  }, [])

  const window = useWindowSize()

  return Boolean(allReviews?.length) ? (
    <section className={`rated ${styles.rated} ${className}`}>
      <div className="wrapper flex">
        <div className="content flex flex-col justify-center pt-7x pt-20x_xl pb-8x pb-20x_xl mr-19x_xl">
          <p className="stars mb-2x">
            <SVG content={star()} size={24} />
            <SVG content={star()} size={24} />
            <SVG content={star()} size={24} />
            <SVG content={star()} size={24} />
            <SVG content={star()} size={24} />
          </p>
          <ConfigContext.Consumer>
            {(config) => {
              const { currentRaiting, numberOfReviews } = config || {}

              return (
                <h2 className="section-title fw-600 mb-3x l-height-1">
                  Rated {currentRaiting}/5 based on {numberOfReviews} reviews
                </h2>
              )
            }}
          </ConfigContext.Consumer>
          <p className="description l-height-1/4 mb-6x">Trusted globally by students and parents</p>
          {window.width < REVIEWS_BREAKPOINT && <MobileReviews reviews={allReviews} />}
          <a
            href="https://www.reviews.co.uk/company-reviews/store/tutorchase"
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-blue mx-auto ml-0x_xl mt-5x mt-0x_xl"
          >
            Read our verified reviews
          </a>
        </div>
        {window.width > REVIEWS_BREAKPOINT && <DesktopReviews reviews={allReviews} />}
      </div>
    </section>
  ) : (
    <></>
  )
}

export default RatedBlock
