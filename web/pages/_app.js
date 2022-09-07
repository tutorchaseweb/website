import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

import 'swiper/scss'
import 'swiper/css/bundle'
import '../styles/index.scss'

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-5B7PST8' })
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
