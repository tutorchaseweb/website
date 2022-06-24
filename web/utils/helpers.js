import imageUrlBuilder from '@sanity/image-url'
import client from './sanity-client'

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
