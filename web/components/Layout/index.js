import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { useRouter } from 'next/router'
import { Header, Footer } from '~/scenes/sections'
import { Loader } from '~/components/Loader'

export const ConfigContext = React.createContext({})

export const Layout = ({ children }) => {
  const { route } = useRouter()
  const [siteConfig, setSiteConfig] = useState(null)

  useEffect(async () => {
    const QUERY = groq`
      *[_type == 'site-config'][0] {
        ...,
      }
    `
    setSiteConfig(await client.fetch(QUERY))
  }, [])

  return Boolean(siteConfig) ? (
    <ConfigContext.Provider value={siteConfig}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, viewport-fit=cover" />
        <meta charSet="utf-8" />
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta property="og:title" content={siteConfig.title} key="title" />
        <meta property="og:description" content={siteConfig.description} key="description" />
        <meta property="og:image" content={siteConfig.logo.asset.url} key="image" />
        <meta property="og:site_name" content={siteConfig.title} />
        <meta property="og:url" content={siteConfig.url} key="url" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="main-content flex-1 flex flex-col">{children}</main>
      {route !== '/404' && <Footer />}
    </ConfigContext.Provider>
  ) : (
    <Loader />
  )
}

export default Layout
