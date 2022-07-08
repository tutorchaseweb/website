import Link from 'next/link'
import { useRouter } from 'next/router'
import { ConfigContext } from '~/components/Layout'
import { Circle } from '~/components/Circle'
import SVG from '~/components/SVG'
import { phone } from '~/utils/svgImages'
import { Color } from '~/utils/constants'
import text from '~/assets/text-content/en/static.json'

export const Header = () => {
  const { route } = useRouter()

  return (
    <ConfigContext.Consumer>
      {(config) => {
        const { logo, primaryPhone = text.contacts.primaryPhone } = config

        return (
          <header className="w-full pt-3x pb-3x absolute" style={{ zIndex: 10 }}>
            <div className="container wide flex justify-between items-center gap-8">
              {route === '/' ? (
                <img src={logo.asset.url} alt={logo.alt} />
              ) : (
                <Link href="/">
                  <a>
                    <img src={logo.asset.url} alt={logo.alt} />
                  </a>
                </Link>
              )}
              <nav className="flex-1 flex justify-center fw-600">
                <ul className="flex items-center gap-8">
                  <li>
                    <Link href="/">
                      <a>{text.menu.OnlineTutoring}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>{text.menu.UniversityAdmissions}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>{text.menu.AboutUs}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/reviews">
                      <a>{text.menu.Reviews}</a>
                    </Link>
                  </li>
                </ul>
              </nav>
              <a href={`tel:${primaryPhone}`} className="flex items-center fw-600">
                <Circle size={30} color={Color.DarkGray} classList="mr-1x">
                  <SVG content={phone()} size={12} />
                </Circle>
                {primaryPhone}
              </a>
              <button className="btn btn-gray small">{text.form.btnHireTutor}</button>
            </div>
          </header>
        )
      }}
    </ConfigContext.Consumer>
  )
}

export default Header
