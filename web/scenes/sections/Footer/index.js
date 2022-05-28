import Link from 'next/link'

export const Footer = ({ logo }) => {
  return (
    <footer className="pt-3x pb-3x">
      <div className="container">
        <div className="flex">
          <div className="link-group w-1/4">
            <Link href="/">
              <a>{Boolean(logo) && <img src={logo.asset.url} alt={logo.alt} />}</a>
            </Link>
            <ul>
              <li>
                <Link href="/">
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Terms and Conditions</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Safeguarding</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Referrals</a>
                </Link>
              </li>
            </ul>
            <p>Copyright 2022 TutorChase Ltd</p>
          </div>
          <div className="link-group w-1/4">
            <h4>Company Information</h4>
            <ul>
              <li>
                <Link href="/">
                  <a>Our tutors</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Company</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>How it works</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Tutor Applications</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Access Programme</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Business Partnerships</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="link-group w-1/4">
            <h4>Company Information</h4>
            <ul>
              <li>
                <Link href="/">
                  <a>GCSE</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>A-Level</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>IB</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>AP</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Admissions Tests</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Oxbridge</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>University</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="link-group w-1/4">
            <h4>Company Information</h4>
            <ul>
              <li>
                <Link href="/">
                  <a>info@tutorchase.com</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>+44 (0)1865 306636</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>SOCIAL LINKS</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
