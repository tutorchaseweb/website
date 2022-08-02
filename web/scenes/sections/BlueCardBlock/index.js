import styles from './style.module.scss'

export const BlueCardBlock = ({ title = '', content = '', hireButton = true, className = '' }) => {
  return (
    <div
      className={`card mx-auto text-center rounded-small pt-7x pb-7x pl-2x pr-2x ${styles.card} ${className}`}
    >
      <h2 className="medium-title fw-600 mb-2x mx-auto">{title}</h2>
      <div className="content fw-500 mx-auto" dangerouslySetInnerHTML={{ __html: content }} />
      {hireButton && (
        <a
          href="#hireFormBlock"
          className="mt-3x btn btn-white"
          onClick={(e) => {
            e.preventDefault()
            const target = document.querySelector(e.target.hash)
            window.scrollTo({
              top: target.offsetTop,
              behavior: 'smooth',
            })
          }}
        >
          Hire a Tutor
        </a>
      )}
    </div>
  )
}

export default BlueCardBlock
