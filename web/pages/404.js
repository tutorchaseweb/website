import Link from 'next/link'
import Head from 'next/head'
import { Layout, ConfigContext } from '~/components/Layout'
import backgroundImage from '~/assets/images/bg-big.jpg'

const styles = {
  margin: 'auto 0',
  minHeight: '100vh',
  background: `url(${backgroundImage.src}) no-repeat center/cover`,
}

export const Custom404 = () => {
  return (
    <Layout>
      <Head>
        <title>Error 404 - page not found</title>
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
                  <span className="block mb-1x color-blue">404</span>
                  {ErrorTitle}
                </h1>
                {Boolean(ErrorDescription) && (
                  <p
                    className="fz-20p fw-500 l-height-1/4 mx-auto mb-7x"
                    style={{ maxWidth: '30rem' }}
                  >
                    {ErrorDescription}
                  </p>
                )}
                <Link href={'/'}>
                  <a className="btn btn-blue">Go Home</a>
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
