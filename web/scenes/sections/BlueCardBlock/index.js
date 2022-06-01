import styles from './style.module.scss'

export const BlueCardBlock = ({ title = '', content = '', linkUrl, linkText, classList = '' }) => {
  return (
    <div
      className={`card mx-auto text-center rounded-small pt-7x pb-7x ${classList} ${styles.card}`}
    >
      <h2 className="title fz-36p fw-600 mb-2x mx-auto">{title}</h2>
      <div
        className="content fz-20p fw-500 mx-auto"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {Boolean(linkText) && Boolean(linkUrl) && (
        <a href={linkUrl} className="mt-3x btn btn-white ">
          {linkText}
        </a>
      )}
    </div>
  )
}

export default BlueCardBlock
