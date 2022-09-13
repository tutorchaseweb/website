import CookieConsent from 'react-cookie-consent'

import styles from './CookiesBanner.module.scss'

const CookiesBanner = () => {
  return (
    <CookieConsent
      disableStyles={true}
      buttonText="Accept"
      cookieName="cookiesBanner"
      containerClasses={styles.container}
      contentClasses={'before-title'}
      buttonClasses={'btn btn-white small'}
      buttonWrapperClasses={styles.wrapper}
    >
      This website uses cookies to improve your experience, by continuing to browse we’ll assume
      you’re okay with this.
    </CookieConsent>
  )
}

export default CookiesBanner
