import Link from 'next/link'
import SVG from '~/components/SVG'
import { Circle } from '~/components/Circle'
import { ConfigContext } from '~/components/Layout'
import { ILink } from '~/components/Link'
import { facebook, twitter, linkedin } from '~/utils/svgImages'
import { Color, MOBILE_BREAKPOINT } from '~/utils/constants'
import { getImageUrl, useWindowSize } from '~/utils/helpers'
import text from '~/assets/text-content/en/static.json'
import CompanyInformation from './CompanyInformationMenu.json'
import CoursesInformation from './CoursesInformationMenu.json'
import styles from './style.module.scss'

export const CopyFragment = ({ title }) => {
  return (
    <>
      <ul className="flex-1 mb-2x">
        <li>
          <Link href="/privacy-policy">
            <a>{text.menu.PrivacyPolicy}</a>
          </Link>
        </li>
        <li className="mt-2x">
          <Link href="/terms-and-conditions">
            <a>{text.menu.TermsAndConditions}</a>
          </Link>
        </li>
        <li className="mt-2x">
          <Link href="/safeguarding">
            <a>{text.menu.Safeguarding}</a>
          </Link>
        </li>
      </ul>
      <p>
        Copyright {new Date().getFullYear()} {title} Ltd
      </p>
    </>
  )
}

const MenuItem = ({ item, index }) => {
  const link = {
    url: item.link,
    text: item.title,
  }

  return (
    <li className={index === 0 ? '' : 'mt-2x'}>
      <ILink link={link} />
    </li>
  )
}

export const Footer = () => {
  const window = useWindowSize()

  return (
    <ConfigContext.Consumer>
      {(config) => {
        const {
          title,
          logo,
          email,
          secondaryPhone = text.contacts.secondaryPhone,
          facebook: facebookLink = text.contacts.facebookLink,
          twitter: twitterLink = text.contacts.twitterLink,
          linkedIn: linkedInLink = text.contacts.linkedInLink,
        } = config

        return (
          <footer className={`footer pt-6x pb-6x pt-9x_lg pb-9x_lg bg-lightGray ${styles.footer}`}>
            <div className="container">
              <div className="link-group-wrapper flex justify-between gap-8">
                <div className="link-group flex flex-col fz-14p">
                  <Link href="/">
                    <a className="logo mb-2x">
                      {Boolean(logo) && (
                        <img src={`${getImageUrl(logo.asset._ref)}`} alt={logo.alt} />
                      )}
                    </a>
                  </Link>
                  {window.width > MOBILE_BREAKPOINT && <CopyFragment title={title} />}
                </div>
                <div className="link-group">
                  <h4
                    className="group-title fz-20p fw-600 mb-3x"
                    onClick={(e) => {
                      e.target.classList.toggle('active')
                      e.target.nextElementSibling.classList.toggle('open')
                    }}
                  >
                    {text.static.CompanyInformation}
                  </h4>
                  <ul className="group-list">
                    {CompanyInformation.map((item, idx) => (
                      <MenuItem key={item._id} item={item} index={idx} />
                    ))}
                  </ul>
                </div>
                <div className="link-group">
                  <h4
                    className="group-title fz-20p fw-600 mb-3x"
                    onClick={(e) => {
                      e.target.classList.toggle('active')
                      e.target.nextElementSibling.classList.toggle('open')
                    }}
                  >
                    {text.static.CoursesInformation}
                  </h4>
                  <ul className="group-list">
                    {CoursesInformation.map((item, idx) => (
                      <MenuItem key={item._id} item={item} index={idx} />
                    ))}
                  </ul>
                </div>
                <div className="link-group">
                  <h4 className="fz-20p fw-600 mb-3x">{text.static.WeAreHereToHelp}</h4>
                  <ul>
                    <li>
                      <a href={`mailto:${email}`}>{email}</a>
                    </li>
                    <li className="mt-2x">
                      <a href={`tel:${secondaryPhone}`}>{secondaryPhone}</a>
                    </li>
                    <li className="mt-2x">
                      <div className="flex items-center gap-4">
                        <a href={facebookLink} target="_blank" rel="nofollow noopener">
                          <Circle size={40} color={Color.Blue}>
                            <SVG content={facebook()} size={24} />
                          </Circle>
                        </a>
                        <a href={twitterLink} target="_blank" rel="nofollow noopener">
                          <Circle size={40} color={Color.Blue}>
                            <SVG content={twitter()} size={24} />
                          </Circle>
                        </a>
                        <a href={linkedInLink} target="_blank" rel="nofollow noopener">
                          <Circle size={40} color={Color.Blue}>
                            <SVG content={linkedin()} size={14} />
                          </Circle>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                {window.width <= MOBILE_BREAKPOINT && <CopyFragment title={title} />}
              </div>
            </div>
          </footer>
        )
      }}
    </ConfigContext.Consumer>
  )
}

export default Footer
