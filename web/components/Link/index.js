import Link from 'next/link'

export const ILink = ({ link, className = '' }) => {
  const homeUrl = typeof window !== 'undefined' ? window.location.origin : ''
  if (!Boolean(link?.url)) {
    return null
  }

  return link.url.includes('http') ? (
    <a href={link.url} target="_blank" rel="nofollow noopener" className={className}>
      {link.text}
    </a>
  ) : (
    <Link href={`${homeUrl}/${link.url}`}>
      <a className={className}>{link.text}</a>
    </Link>
  )
}

export default ILink
