import styles from './style.module.scss'

export const BlueCardBlock = ({ title = '', content = '', hireButton = true, className = '' }) => {
  return (
    <div
      className={`card mx-auto text-center rounded-small pt-7x pb-7x ${styles.card} ${className}`}
    >
      <h2 className="title fz-36p fw-600 mb-2x mx-auto">{title}</h2>
      <div
        className="content fz-20p fw-500 mx-auto"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {hireButton && (
        <a href="" className="mt-3x btn btn-white ">
          Hire a Tutor
        </a>
      )}
    </div>
  )
}

export default BlueCardBlock
