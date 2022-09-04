export const OpenGraphTags = ({ description, ogUrl, ogImage, ogTitle, siteName }) => {
  return (
    <>
      {Boolean(ogTitle) && <meta property="og:title" content={ogTitle} key="title" />}
      {Boolean(description) && (
        <meta property="og:description" content={description} key="description" />
      )}
      {Boolean(ogUrl) && <meta property="og:url" content={ogUrl} key="url" />}
      {Boolean(ogImage) && <meta property="og:image" content={ogImage} key="image" />}
      {Boolean(siteName) && <meta property="og:site_name" content={siteName} key="sitename" />}
    </>
  )
}

export default OpenGraphTags
