import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN, // or leave blank to be anonymous user
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false // `false` if you want to ensure fresh data
})