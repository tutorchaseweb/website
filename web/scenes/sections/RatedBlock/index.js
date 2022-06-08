import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import SVG from '~/components/SVG'
import { star } from '~/utils/svgImages'
import reviews from './data.json'
import styles from './style.module.scss'

export const RatedBlock = () => {
  return (
    <section className={`rated ${styles.rated}`}>
      <div className="wrapper flex">
        <div className="content flex flex-col justify-center pt-20x pb-20x mr-19x">
          <p className="mb-2x">
            <SVG content={star()} size={24} />
            <SVG content={star()} size={24} />
            <SVG content={star()} size={24} />
            <SVG content={star()} size={24} />
            <SVG content={star()} size={24} />
          </p>
          <h2 className="fz-48p fw-600 mb-3x l-height-1">Rated 4.92/5 based on 214 reviews</h2>
          <p className="fz-20p l-height-1/4 mb-6x">Trusted globally by students and parents</p>
          <Link href={'/'}>
            <a className="btn btn-blue">Read our verified reviews</a>
          </Link>
        </div>
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
            {reviews.map((review, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="card bg-white pt-4x pb-4x pl-3x pr-3x">
                    <p className="l-height-1/5">{review.content}</p>
                    <p className="l-height-1">
                      <SVG content={star()} size={18} />
                      <SVG content={star()} size={18} />
                      <SVG content={star()} size={18} />
                      <SVG content={star()} size={18} />
                      <SVG content={star()} size={18} />
                    </p>
                    <p className="fw-800">{review.author}</p>
                    <p className="fz-14p">{review.position}</p>
                  </div>
                </SwiperSlide>
              )
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
            {reviews.map((review, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="card bg-white pt-4x pb-4x pl-3x pr-3x">
                    <p className="l-height-1/5">{review.content}</p>
                    <p className="l-height-1">
                      <SVG content={star()} size={18} />
                      <SVG content={star()} size={18} />
                      <SVG content={star()} size={18} />
                      <SVG content={star()} size={18} />
                      <SVG content={star()} size={18} />
                    </p>
                    <p className="fw-800">{review.author}</p>
                    <p className="fz-14p">{review.position}</p>
                  </div>
                </SwiperSlide>
              )
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
            {reviews.map((review, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="card bg-white pt-4x pb-4x pl-3x pr-3x">
                    <p className="l-height-1/5">{review.content}</p>
                    <p className="l-height-1">
                      <SVG content={star()} size={18} />
                      <SVG content={star()} size={18} />
                      <SVG content={star()} size={18} />
                      <SVG content={star()} size={18} />
                      <SVG content={star()} size={18} />
                    </p>
                    <p className="fw-800">{review.author}</p>
                    <p className="fz-14p">{review.position}</p>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          {/*<Swiper*/}
          {/*  autoHeight={true}*/}
          {/*  autoplay={{ delay: 1000 }}*/}
          {/*  direction={'vertical'}*/}
          {/*  loop={true}*/}
          {/*  spaceBetween={30}*/}
          {/*  slidesPerView={'auto'}*/}
          {/*  speed={1000}*/}
          {/*  reverseDirection={true}*/}
          {/*></Swiper>*/}
          {/*<Swiper*/}
          {/*  autoHeight={true}*/}
          {/*  autoplay={{ delay: 1000 }}*/}
          {/*  direction={'vertical'}*/}
          {/*  loop={true}*/}
          {/*  spaceBetween={30}*/}
          {/*  slidesPerView={'auto'}*/}
          {/*  speed={1000}*/}
          {/*></Swiper>*/}
        </div>
      </div>
    </section>
  )
}