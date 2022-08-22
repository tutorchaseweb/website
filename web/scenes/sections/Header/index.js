import { useState } from 'react'
import Link from 'next/link'
import { ConfigContext } from '~/components/Layout'
import { getImageUrl } from '~/utils/helpers'
import { Color } from '~/utils/constants'
import { Circle } from '~/components/Circle'
import SVG from '~/components/SVG'
import { email as emailIcon, phone as phoneIcon } from '~/utils/svgImages'
import text from '~/assets/text-content/en/static.json'
import styles from './style.module.scss'

export const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false)

  const handler = () => {
    if (typeof window !== 'undefined') {
      const body = document.querySelector('body')
      activeMenu ? body.classList.remove('openMenu') : body.classList.add('openMenu')
      setActiveMenu(!activeMenu)
    }
  }

  return (
    <ConfigContext.Consumer>
      {(config) => {
        const {
          logo,
          primaryPhone = text.contacts.primaryPhone,
          email = text.contacts.email,
        } = config

        return (
          <header className={`w-full ${styles.header} ${activeMenu ? 'fixed' : 'absolute'}`}>
            <div className="container wide">
              <div className="wrapper pt-3x pb-3x flex justify-between items-center gap-8">
                <Link href="/">
                  <a className="logo">
                    <img src={`${getImageUrl(logo.asset._ref)}`} alt={logo.alt} />
                  </a>
                </Link>
                <div
                  className={`burger pointer relative ${activeMenu ? 'active' : ''}`}
                  onClick={handler}
                >
                  <span style={{ display: 'none' }} />
                  <span />
                  <span />
                  <span />
                </div>
                <div
                  className={`mobile-wrap flex items-center justify-between flex-1 gap-8 ${
                    activeMenu ? 'active' : ''
                  }`}
                >
                  <nav className="flex-1 flex justify-center fw-600">
                    <ul className="nav-menu flex items-center gap-8">
                      <li className="menu-item">
                        <Link href="/tutors">
                          <a>{text.menu.OnlineTutoring}</a>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/oxbridge">
                          <a>{text.menu.Oxbridge}</a>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/us-college-admissions">
                          <a>{text.menu.USAdmissions}</a>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/reviews">
                          <a>{text.menu.Reviews}</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <a href={`tel:${primaryPhone}`} className="phone flex items-center fw-600">
                    <Circle size={30} color={Color.DarkGray} classList="mr-1x">
                      <SVG content={phoneIcon()} size={12} />
                    </Circle>
                    {primaryPhone}
                  </a>
                  <a href={`mailto:${email}`} className="email flex items-center fw-600">
                    <Circle size={30} color={Color.DarkGray} classList="mr-1x">
                      <SVG content={emailIcon()} size={12} />
                    </Circle>
                    {email}
                  </a>
                  <Link href="/tutors">
                    <a className="btn btn-gray small">{text.form.btnHireTutor}</a>
                  </Link>
                </div>
              </div>
            </div>
          </header>
        )
      }}
    </ConfigContext.Consumer>
  )
}

export default Header
