import { useEffect, useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import client from './sanity-client'
import { monthsOfHheYear } from './constants'

export const log = (groupName, ...values) => {
  if (process.env.NODE_ENV === 'development') {
    console.group(groupName)
    console.log(...values)
    console.groupEnd()
  }
}

export const getImageUrl = (source) => {
  const builder = imageUrlBuilder(client)
  return builder.image(source)
}

export const shuffleArray = (array = []) => {
  let currentIndex = array.length,
    randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}

export const splitArray = (array = [], parts = 2) => {
  const result = new Array(parts)
  const step = Math.floor(array.length / parts)
  for (let i = 0; i < parts; i++) {
    result[i] = array.slice(step * i, step * (i + 1))
  }
  return result
}

export const myPortableTextComponents = {
  types: {
    image: ({ value }) => (
      <img
        src={`${getImageUrl(value.asset._ref)}`}
        alt=""
        className="overflow-hidden rounded-small mt-2x mb-2x"
      />
    ),
    floatImage: ({ value }) => (
      <img
        src={`${getImageUrl(value.asset._ref)}`}
        alt=""
        className={`image overflow-hidden rounded-small mt-2x mb-2x ${
          value.floatRight ? 'float-right ml-3x' : 'float-left mr-3x'
        }`}
      />
    ),
  },
}

export const handleMutations = (mutations) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v${process.env.NEXT_PUBLIC_SANITY_API_VERSION}/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mutations,
          returnIds: true,
          // returnDocuments: true,
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        log('Sanity mutation result', result)
        resolve(result)
      })
      .catch((error) => {
        console.error(error)
        reject(error)
      })
  })
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize
}

export const getReadableDate = (date, format = 'default') => {
  if (format === 'full') {
    return `${new Date(date).getDate().toString().padStart(2, '0')} ${
      monthsOfHheYear[new Date(date).getMonth()]
    } ${new Date(date).getFullYear()}`
  }
  if (format === 'short') {
    return `${monthsOfHheYear[new Date(date).getMonth()].substring(0, 3)} ${new Date(date)
      .getDate()
      .toString()
      .padStart(2, '0')}`
  }
  if (format === 'international') {
    return new Date(date).toLocaleString().substr(0, 10)
  }
  return `${(new Date(date).getMonth() + 1).toString().padStart(2, '0')}/${new Date(date)
    .getDate()
    .toString()
    .padStart(2, '0')}/${new Date(date).getFullYear()}`
}

export const hireTutor = (event) => {
  event.preventDefault()
  const target = document.querySelector(event.target.hash)
  if (target) {
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    })
  } else {
    router.push('/tutors')
  }
}

export const getQueryForTutors = (levelQuery, subjectQuery) => {
  let query = ''

  if (levelQuery && subjectQuery) {
    query = `
      *[_type == 'tutor' && !(_id in path("drafts.**")) && references($level) && references($subject)] {
        ...,
        levels[]->,
        teaches[]->,
        universities[]->
      }
    `
  } else if (levelQuery && !subjectQuery) {
    query = `
      *[_type == 'tutor' && !(_id in path("drafts.**")) && references($level)] {
        ...,
        levels[]->,
        teaches[]->,
        universities[]->
      }
    `
  } else if (subjectQuery && !levelQuery) {
    query = `
      *[_type == 'tutor' && !(_id in path("drafts.**")) && references($subject)] {
        ...,
        levels[]->,
        teaches[]->,
        universities[]->
      }
    `
  } else {
    query = `*[_type == 'tutor' && !(_id in path("drafts.**"))] {
      ...,
      levels[]->,
      teaches[]->,
      universities[]->
    }`
  }

  return query
}

//
// description: [{…}]
// featured: true
// mainImage: {_type: 'mainImage', alt: 'Lorem ipsum', asset: {…}, caption: 'Lorem ipsum'}
// publishedAt: "2022-06-24T07:34:36.339Z"
// reading: 10
// slug: {_type: 'slug', current: '10-books-to-help-teens-get-through-exam-season'}
// title: "10 books to help teens get through exam season"
// _createdAt: "2022-06-24T07:43:41Z"
// _id: "146dcbc8-5f3c-447d-9e9d-bf37faa7d8cf"
// _rev: "Qz7SRkfQ45VACPYzP3Iaf5"
// _type: "post"
//

export const getQueryForBlog = (order, length, start) => {
  let query = ''

  if (order && start) {
    console.log(order)
    console.log(start)
  } else {
    query = `*[_type == 'post' && !(_id in path("drafts.**"))] {
      _id,
      publishedAt,
      slug,
      mainImage,
      title,
      description,
      featured,
      reading,
    }`
  }

  return query
}
