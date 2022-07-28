import Link from 'next/link'
import SVG from '~/components/SVG'
import { Circle } from '~/components/Circle'
import { ConfigContext } from '~/components/Layout'
import { facebook, twitter, linkedin } from '~/utils/svgImages'
import { Color } from '~/utils/constants'
import text from '~/assets/text-content/en/static.json'

export const Footer = () => {
  return (
    <ConfigContext.Consumer>
      {(config) => {
        const {
          logo,
          email,
          secondaryPhone = text.contacts.secondaryPhone,
          facebook: facebookLink = text.contacts.facebookLink,
          twitter: twitterLink = text.contacts.twitterLink,
          linkedIn: linkedInLink = text.contacts.linkedInLink,
        } = config

        return (
          <footer className="pt-9x pb-9x bg-lightGray">
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
                  <p>Copyright {new Date().getFullYear()} TutorChase Ltd</p>
                </div>
                <div className="link-group">
                  <h4 className="fz-20p fw-600 mb-3x">{text.static.CompanyInformation}</h4>
                  <ul>
                    <li className="mt-2x">
                      <Link href="/blog">
                        <a>{text.menu.Blog}</a>
                      </Link>
                    </li>
                    <li className="mt-2x">
                      <Link href="/tutor-applications">
                        <a>{text.menu.TutorApplications}</a>
                      </Link>
                    </li>
                    <li className="mt-2x">
                      <Link href="/referrals">
                        <a>Referrals</a>
                      </Link>
                    </li>
                    <li className="mt-2x">
                      <Link href="/access-programme">
                        <a>{text.menu.AccessProgramme}</a>
                      </Link>
                    </li>
                    <li className="mt-2x">
                      <Link href="/business-partnerships">
                        <a>{text.menu.BusinessPartnerships}</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="link-group">
                  <h4 className="fz-20p fw-600 mb-3x">{text.static.CoursesInformation}</h4>
                  <ul>
                    <li>
                      <Link href="/tutors">
                        <a>{text.menu.GCSE}</a>
                      </Link>
                    </li>
                    <li className="mt-2x">
                      <Link href="/tutors">
                        <a>IGCSE</a>
                      </Link>
                    </li>
                    <li className="mt-2x">
                      <Link href="/tutors">
                        <a>{text.menu.ALevel}</a>
                      </Link>
                    </li>
                    <li className="mt-2x">
                      <Link href="/tutors">
                        <a>{text.menu.IB}</a>
                      </Link>
                    </li>
                    <li className="mt-2x">
                      <Link href="/tutors">
                        <a>{text.menu.AP}</a>
                      </Link>
                    </li>
                    <li className="mt-2x">
                      <Link href="/tutors">
                        <a>SAT</a>
                      </Link>
                    </li>
                    <li className="mt-2x">
                      <Link href="/oxbridge">
                        <a>Oxbridge</a>
                      </Link>
                    </li>
                    <li className="mt-2x">
                      <Link href="/us-admissions">
                        <a>US Admissions</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="link-group">
                  <h4 className="fz-20p fw-600 mb-3x">{text.static.CompanyInformation}</h4>
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
      }}
    </ConfigContext.Consumer>
  )
}

export default Footer
