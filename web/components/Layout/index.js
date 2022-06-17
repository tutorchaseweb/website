import React from 'react'
import Head from 'next/head'
import { gql, useQuery } from '@apollo/client'
import Header from '~/scenes/sections/Header'
import Footer from '~/scenes/sections/Footer'
import { Loader } from '~/components/Loader'

export const ConfigContext = React.createContext({})

export const Layout = ({ children }) => {
  const QUERY = gql`
    query Config {
      SiteConfig(id: "global-config") {
        _id
        title
        description
        url
        logo {
          alt
          asset {
            url
          }
        }
      }
    }
  `
  const { data, loading, error } = useQuery(QUERY)

  if (loading) {
    return <Loader />
  }
  if (error) {
    console.error(error)
    return null
  }
  const { SiteConfig } = data

  return (
    Boolean(SiteConfig) && (
      <ConfigContext.Provider value={SiteConfig}>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width, viewport-fit=cover"
          />
          <meta charSet="utf-8" />
          <title>{SiteConfig.title}</title>
          <meta name="description" content={SiteConfig.description} />
          <meta property="og:title" content={SiteConfig.title} key="title" />
          <meta property="og:description" content={SiteConfig.description} key="description" />
          <meta property="og:image" content={SiteConfig.logo.asset.url} key="image" />
          <meta property="og:site_name" content={SiteConfig.title} />
          <meta property="og:url" content={SiteConfig.url} key="url" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header logo={SiteConfig.logo} />
        <main className="main-content">{children}</main>
        <Footer logo={SiteConfig.logo} />
      </ConfigContext.Provider>
    )
  )
}

export default Layout
