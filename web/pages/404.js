import Head from 'next/head'
import { Layout } from '~/components/Layout'
// import { Page404 } from '~/scenes/ErrorPage'

export const Custom404 = () => {
  return (
    <Layout>
      <Head>
        <title>Error 404 - page not found</title>
      </Head>
      <main className="main-content">
          <div className="container">
              <h1 className="text-center">Error page</h1>
          </div>
      </main>
    </Layout>
  )
}

export default Custom404
