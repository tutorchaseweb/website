import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { useRouter } from 'next/router'
import { getImageUrl } from '~/utils/helpers'
import { Header, Footer } from '~/scenes/sections'
import { Loader } from '~/components/Loader'
import { OpenGraphTags } from '~/components/OGtags'
// import { TwitterTags } from '~/components/TwitterTags'
import CookiesBanner from '../CookiesBanner'

export const ConfigContext = React.createContext({})

export const Layout = ({ children }) => {
  const { route } = useRouter()
  const [siteConfig, setSiteConfig] = useState(null)
  const [customPages, setCustomPages] = useState([])

  useEffect(async () => {
    const config = groq`
      *[_type == 'site-config'][0] {
        ...,
      }
    `
    setSiteConfig(await client.fetch(config))

    const pages = groq`
      *[_type == 'custom-page' && !(_id in path("drafts.**"))] {
        _id,
        title,
        slug,
      }
    `
    setCustomPages(await client.fetch(pages))
  }, [])

  return Boolean(siteConfig) ? (
    <ConfigContext.Provider value={siteConfig}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, viewport-fit=cover" />
        <meta charSet="utf-8" />
        <title>{siteConfig.title ? siteConfig.title : 'TutorChase'}</title>
        <OpenGraphTags
          ogTitle={siteConfig.title}
          description={siteConfig.description}
          ogImage={`${getImageUrl(siteConfig.logo.asset._ref)}`}
          ogUrl={siteConfig.url}
          siteName={siteConfig.title}
        />
        {/*
        <TwitterTags
          ogTitle={siteConfig.title}
          description={siteConfig.description}
          ogImage={`${getImageUrl(siteConfig.logo.asset._ref)}`}
          author={'@author'}
        />
        */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="main-content flex-1 flex flex-col">{children}</main>
      {route !== '/404' && <Footer pages={customPages} />}
      <CookiesBanner />
    </ConfigContext.Provider>
  ) : (
    <Loader />
  )
}

export default Layout
