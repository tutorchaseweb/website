import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { EXPIRY_DATE } from '~/utils/constants'

import 'swiper/scss'
import 'swiper/css/bundle'
import '../styles/index.scss'
import ChatBot from '~/components/ChatBot'

const MyApp = ({ Component, pageProps, siteconfig }) => {
  function getParam(p) {
    const match = RegExp('[?&]' + p + '=([^&]*)').exec(window.location.search)
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
  }

  function getExpiryRecord(value) {
    return {
      value: value,
      expiryDate: EXPIRY_DATE,
    }
  }

  function addGclid() {
    const gclidParam = getParam('gclid')
    const gclidRecord = null

    const gclsrcParam = getParam('gclsrc')
    const isGclsrcValid = !gclsrcParam || gclsrcParam.indexOf('aw') !== -1

    if (gclidParam && isGclsrcValid) {
      gclidRecord = getExpiryRecord(gclidParam)
      localStorage.setItem('gclid', JSON.stringify(gclidRecord))
    }
  }

  typeof window !== 'undefined' && window.addEventListener('load', addGclid)

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-5B7PST8' })
  }, [])

  return (
    <>
      <Component {...pageProps} />
      <ChatBot siteconfig={siteconfig} />
    </>
  )
}

MyApp.getInitialProps = async () => {
  const query = groq`*[_type=="site-config"][0]`
  const LayoutData = await client.fetch(query)

  return { siteconfig: LayoutData }
}

export default MyApp
