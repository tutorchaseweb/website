import Head from 'next/head'

const MetaTags = ({ data }) => {
  const { title, description } = data || {}
  const currentURL = typeof window !== 'undefined' ? window.location.href : ''
  const homeUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const imageUrl = `${homeUrl}/images/og_image.png`

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width, viewport-fit=cover" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentURL} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={currentURL} />

      {/* Meta tags for twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default MetaTags
