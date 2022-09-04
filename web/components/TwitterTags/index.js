export const TwitterTags = ({ description, author, ogImage, ogTitle }) => {
  return (
    <>
      {Boolean(ogTitle) && <meta name="twitter:title" content={ogTitle} />}
      {Boolean(description) && <meta name="twitter:description" content={description} />}
      {Boolean(ogImage) && <meta name="twitter:image" content={ogImage} />}
      {Boolean(author) && (
        <>
          <meta name="twitter:site" content={author} />
          <meta name="twitter:creator" content={author} />
        </>
      )}
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}

export default TwitterTags
