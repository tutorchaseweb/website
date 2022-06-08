import SVG from '~/components/SVG'
import { Circle } from '~/components/Circle'
import { email, phone } from '~/utils/svgImages'
import { Color } from '~/utils/constants'
import styles from './style.module.scss'

export const HireFormBlock = () => {
  return (
    <section className={`block ${styles.block}`}>
      <div className="container">
        <div
          className={`card rounded-rem bg-blue pt-10x pb-11x pl-4x pr-4x mx-auto ${styles.card}`}
        >
          <h2 className="fz-48p fw-600 l-height-1 mb-2x text-center">Hire a tutor</h2>
          <p className="fz-22p l-height-1/5 mb-4x text-center">
            Please fill out the form and we'll find a tutor for you
          </p>
          <form className="form mx-auto bg-white rounded-small pt-5x pr-5x pb-4x pl-5x">
            <div className="flex gap-4 mb-3x">
              <label className="flex-1 relative">
                <input type="radio" name="role" value="parent" className="absolute" />
                <span className="fw-500 border-light rounded-xSmall flex items-center justify-center w-full l-height-1 p-2x transition">
                  I am parent
                </span>
              </label>
              <label className="flex-1 relative">
                <input type="radio" name="role" value="student" className="absolute" />
                <span className="fw-500 border-light rounded-xSmall flex items-center justify-center w-full l-height-1 p-2x transition">
                  I am student
                </span>
              </label>
            </div>
            <div className="flex gap-4 mb-2x">
              <label className="flex-1 fz-14p">
                <span className="fw-500 color-black">Full name</span>
                <input
                  type="text"
                  placeholder="Enter your name here"
                  className="p-2x border-light l-height-1 w-full rounded-xSmall"
                />
              </label>
              <label className="flex-1 fz-14p">
                <span className="fw-500 color-black">Country</span>
                <select
                  id=""
                  name="country"
                  className="p-2x border-light l-height-1 w-full rounded-xSmall"
                >
                  <option value="" selected disabled>
                    Select country
                  </option>
                </select>
              </label>
            </div>
            <div className="flex gap-4 mb-4x">
              <label className="flex-1 fz-14p">
                <span className="fw-500 color-black">Your phone</span>
                <input
                  type="tel"
                  placeholder="Select method"
                  className="p-2x border-light l-height-1 w-full rounded-xSmall"
                />
              </label>
              <label className="flex-1 fz-14p">
                <span className="fw-500 color-black">Your email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2x border-light l-height-1 w-full rounded-xSmall"
                />
              </label>
            </div>
            <div className="flex gap-4 items-center justify-between">
              <span>
                <b>1</b>/2 About yourself
              </span>
              <button type="button" className="btn btn-blue">
                Next Step
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={`contacts pb-15x ${styles.contacts}`}>
        <div className="container">
          <h3 className="title fz-36p fw-600 text-center mx-auto mb-4x">
            Still have questions? Let’s get in touch.
          </h3>
          <div className="links flex items-center justify-between mx-auto fz-20p fw-600">
            <a href="mailto:info@tutorchase.com" className="flex items-center">
              <Circle size={32} color={Color.Blue} classList="mr-1x">
                <SVG content={email()} />
              </Circle>
              info@tutorchase.com
            </a>
            <a href="tel:+44(0)1865306636" className="flex items-center">
              <Circle size={32} color={Color.Blue} classList="mr-1x">
                <SVG content={phone()} size={14} />
              </Circle>
              +44(0)1865306636
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HireFormBlock
