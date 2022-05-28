import Link from 'next/link'
import { useRouter } from 'next/router'

export const Header = ({ logo }) => {
  const { route } = useRouter()

  return (
    <header className="pt-3x pb-3x">
      <div className="container wide flex justify-between items-center">
        {
          route === '/' ? (
            <img src={logo.asset.url} alt={logo.alt} />
          ) : (
            <Link href="/">
              <a><img src={logo.asset.url} alt={logo.alt} /></a>
            </Link>
          )
        }
        <nav className="flex-1 flex justify-center font-semibold">
          <ul className="flex items-center gap-8">
            <li>
              <Link href="/">
                <a>
                  Online Tutoring
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  University Admissions
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  About Us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/reviews">
                <a>
                  Reviews
                </a>
              </Link>

            </li>
          </ul>
        </nav>
        <a href="tel:+18882763561" className="flex items-center font-semibold mr-4x">
          <svg
            className="phone-icon mr-1x"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15" cy="15" r="15" fill="#171D23" />
            <path
              d="M19.8 17.2L18.1333 17C17.7333 16.9333 17.3333 17.0667 17.0667 17.4L15.8667 18.6C14 17.6667 12.4 16.0667 11.4667 14.2L12.7333 12.9333C13 12.6667 13.1333 12.2667 13.1333 11.8667L12.8 10.2C12.7333 9.53333 12.1333 9 11.4667 9H10.3333C9.6 9 9 9.6 9 10.4C9.33333 16.0667 13.9333 20.6667 19.6 21C20.3333 21 21 20.4 21 19.6667V18.5333C21 17.8 20.4667 17.2667 19.8 17.2Z"
              fill="#F9FAFB"
            />
          </svg>
          +1 (888) 2763561
        </a>
        <button className="btn btn-gray small">Hire a tutor</button>
      </div>
    </header>
  )
}

export default Header
