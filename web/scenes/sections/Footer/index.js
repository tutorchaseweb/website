import Link from 'next/link'
import SVG from '~/components/SVG'
import { Circle } from '~/components/Circle'
import { facebook, twitter, linkedin } from '~/utils/svgImages'
import { Color } from '~/utils/constants'
import { logo as logoSvg } from '~/utils/svgImages'

export const Footer = ({ logo }) => {
  return (
    <footer className="pt-9x pb-9x">
      <div className="container">
        <div className="flex justify-between gap-8">
          <div className="link-group flex flex-col fz-14p">
            <Link href="/">
              <a className="mb-2x">
                {Boolean(logo) && <img src={logo.asset.url} alt={logo.alt} />}
              </a>
            </Link>
            <ul className="flex-1 mb-2x">
              <li>
                <Link href="/">
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li className="mt-2x">
                <Link href="/">
                  <a>Terms and Conditions</a>
                </Link>
              </li>
              <li className="mt-2x">
                <Link href="/">
                  <a>Safeguarding</a>
                </Link>
              </li>
              <li className="mt-2x">
                <Link href="/">
                  <a>Referrals</a>
                </Link>
              </li>
            </ul>
            <p>Copyright {new Date().getFullYear()} TutorChase Ltd</p>
          </div>
          <div className="link-group">
            <h4 className="fz-20p fw-600 mb-3x">Company Information</h4>
            <ul>
              <li>
                <Link href="/">
                  <a>Our tutors</a>
                </Link>
              </li>
              <li className="mt-2x">
                <Link href="/">
                  <a>Company</a>
                </Link>
              </li>
              <li className="mt-2x">
                <Link href="/">
                  <a>Blog</a>
                </Link>
              </li>
              <li className="mt-2x">
                <Link href="/">
                  <a>How it works</a>
                </Link>
              </li>
              <li className="mt-2x">
                <Link href="/">
                  <a>Tutor Applications</a>
                </Link>
              </li>
              <li className="mt-2x">
                <Link href="/">
                  <a>Access Programme</a>
                </Link>
              </li>
              <li className="mt-2x">
                <Link href="/">
                  <a>Business Partnerships</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="link-group">
            <h4 className="fz-20p fw-600 mb-3x">Company Information</h4>
            <ul>
              <li>
                <Link href="/">
                  <a>GCSE</a>
                </Link>
              </li>
              <li className="mt-2x">
                <Link href="/a-level">
                  <a>A-Level</a>
                </Link>
              </li>
              <li className="mt-2x">
                <Link href="/">
                  <a>IB</a>
                </Link>
              </li>
              <li className="mt-2x">
                <Link href="/">
                  <a>AP</a>
                </Link>
              </li>
              <li className="mt-2x">
                <Link href="/">
                  <a>Admissions Tests</a>
                </Link>
              </li>
              <li className="mt-2x">
                <Link href="/">
                  <a>Oxbridge</a>
                </Link>
              </li>
              <li className="mt-2x">
                <Link href="/">
                  <a>University</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="link-group">
            <h4 className="fz-20p fw-600 mb-3x">Company Information</h4>
            <ul>
              <li>
                <a href="mailto:info@tutorchase.com">info@tutorchase.com</a>
              </li>
              <li className="mt-2x">
                <a href="tel:+4401865306636">+44 (0)1865 306636</a>
              </li>
              <li className="mt-2x">
                <div className="flex items-center gap-4">
                  <a href="https://www.facebook.com/" target="_blank" rel="nofollow noopener">
                    <Circle size={40} color={Color.Blue}>
                      <SVG content={facebook()} size={24} />
                    </Circle>
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="nofollow noopener">
                    <Circle size={40} color={Color.Blue}>
                      <SVG content={twitter()} size={24} />
                    </Circle>
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="nofollow noopener">
                    <Circle size={40} color={Color.Blue}>
                      <SVG content={linkedin()} size={24} />
                    </Circle>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
