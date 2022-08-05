import NLink from 'next/link'

export const Link = ({ link, className = '' }) => {
  return link.url.includes('http') ? (
    <a href={link.url} target="_blank" rel="nofollow noopener" className={className}>
      {link.text}
    </a>
  ) : (
    <NLink href={link.url}>
      <a className={className}>{link.text}</a>
    </NLink>
  )
}

export default Link
