import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Layout, ConfigContext } from '~/components/Layout'
import backgroundImage from '~/assets/images/bg-big.jpg'
import { PortableText } from '@portabletext/react'

const styles = {
  margin: 'auto 0',
  minHeight: '100vh',
  background: `url(${backgroundImage.src}) no-repeat center/cover`,
}

export const Custom404 = () => {
  const router = useRouter()
  const homeUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const canonicalUrl = (homeUrl + (router.asPath === '/' ? '' : router.asPath)).split('?')[0]

  return (
    <Layout>
      <Head>
        <title>Error 404 - page not found</title>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <ConfigContext.Consumer>
        {(config) => {
          const { ErrorTitle, ErrorDescription } = config || {}

          return (
            <secton
              className="main-content text-center pt-10x flex items-center justify-center"
              style={styles}
            >
              <div className="container">
                <h1 className="main-title fw-700 l-height-1 mb-3x">
                  <span className="block mb-1x color-blue">404 Error</span>
                  {ErrorTitle}
                </h1>
                {Boolean(ErrorDescription) && (
                  <div
                    className="fz-20p fw-500 l-height-1/4 mx-auto mb-7x"
                    style={{ maxWidth: '30rem' }}
                  >
                    <PortableText value={ErrorDescription} />
                  </div>
                )}
                <Link href={'/'}>
                  <a className="btn btn-blue">Home</a>
                </Link>
              </div>
            </secton>
          )
        }}
      </ConfigContext.Consumer>
    </Layout>
  )
}

export default Custom404
