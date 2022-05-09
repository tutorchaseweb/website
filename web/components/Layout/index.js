import Head from 'next/head'
import Header from '~/scenes/sections/Header'
import Footer from '~/scenes/sections/Footer'

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
        <meta charSet="utf-8" />
        <title>TutorChase</title>
        {/*<title>{SiteConfig?.title}</title>*/}
        {/*<meta name="description" content={SiteConfig?.description} />*/}
        {/*<meta property="og:title" content={SiteConfig?.title} key="title" />*/}
        {/*<meta property="og:description" content={SiteConfig?.description} key="description" />*/}
        {/*<meta*/}
        {/*  property="og:image"*/}
        {/*  content={getImageUrl(SiteConfig?.logo?.asset?._ref)}*/}
        {/*  key="image"*/}
        {/*/>*/}
        {/*<meta property="og:site_name" content={SiteConfig?.title} />*/}
        {/*<meta property="og:url" content={SiteConfig?.url} key="url" />*/}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </>
  )

}

export default Layout