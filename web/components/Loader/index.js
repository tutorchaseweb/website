import styles from './Loader.module.scss'
import imageLoader from 'assets/images/image_funny_loader.gif'

export const Loader = () => {
  const textLoader = true // if FALSE return gif animation
  return (
    <div className={`${styles.loaderWrapper} flex items-center justify-center`}>
      {textLoader ? (
        <>
          <div className={styles.ldsRing}>
            <div />
            <div />
            <div />
            <div />
          </div>
        </>
      ) : (
        <img src={imageLoader?.src} alt="Loading..." />
      )}
    </div>
  )
}

export default Loader