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