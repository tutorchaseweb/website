// import client from '~/utils/sanity-client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import SVG from '~/components/SVG'
import { shuffleArray, splitArray, useWindowSize } from '~/utils/helpers'
import { REVIEWS_BREAKPOINT } from '~/utils/constants'
import { star } from '~/utils/svgImages'
import reviews from './data.json'
import styles from './style.module.scss'

const getReviewCard = (review) => {
  return (
    <div className="card bg-white pt-3x pb-3x pl-2x pr-2x pt-4x_xl pb-4x_xl pl-3x_xl pr-3x_xl">
      <p className="l-height-1/5 mb-3x">{review.content}</p>
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
        {reviews.map((review, idx) => {
          return <SwiperSlide key={idx}>{getReviewCard(review)}</SwiperSlide>
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
        {reviews.reverse().map((review, idx) => {
          return <SwiperSlide key={idx}>{getReviewCard(review)}</SwiperSlide>
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
          return <SwiperSlide key={idx}>{getReviewCard(review)}</SwiperSlide>
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
        {splitArray(reviews, 3)[2].map((review, idx) => {
          return <SwiperSlide key={idx}>{getReviewCard(review)}</SwiperSlide>
        })}
      </Swiper>
    </div>
  )
}

export const RatedBlock = ({ className }) => {
  // const query = `*[_type == 'review'] { ..., }`
  // const allReviews = client.fetch(query).then((reviews) => reviews)
  // console.log(allReviews)

  const window = useWindowSize()

  return (
    // Boolean(allReviews?.length) && (
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
          <h2 className="section-title fw-600 mb-3x l-height-1">
            Rated 4.92/5 based on 214 reviews
          </h2>
          <p className="description l-height-1/4 mb-6x">Trusted globally by students and parents</p>
          {window.width < REVIEWS_BREAKPOINT && <MobileReviews reviews={reviews} />}
          <a
            href="https://www.reviews.co.uk/company-reviews/store/tutorchase"
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-blue mx-auto ml-0x_xl mt-5x mt-0x_xl"
          >
            Read our verified reviews
          </a>
        </div>
        {window.width > REVIEWS_BREAKPOINT && <DesktopReviews reviews={reviews} />}
      </div>
    </section>
    // )
  )
}

export default RatedBlock
