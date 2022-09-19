import React, { useState, useEffect } from 'react'
import { groq } from 'next-sanity'
import client from '~/utils/sanity-client'
import { useRouter } from 'next/router'
import { Header, Footer } from '~/scenes/sections'
import { Loader } from '~/components/Loader'
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
