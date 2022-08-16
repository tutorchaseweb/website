import Link from 'next/link'
import { Circle } from '~/components/Circle'
import { Color } from '~/utils/constants'
import SVG from '~/components/SVG'
import { doneCheck } from '~/utils/svgImages'
import text from '~/assets/text-content/en/static.json'

export const TutorSubmissionPage = () => {
  return (
    <>
      <div
        className="mt-10x mt-20x_lg mb-8x mb-16x_lg text-center mx-auto flex flex-col items-center justify-between shadow-light p-4x p-10x_lg"
        style={{ maxWidth: '40rem' }}
      >
        <Circle size={64} color={'rgba(0, 26, 150, 0.1)'} classList="mx-auto">
          <SVG content={doneCheck(Color.Blue)} size={32} />
        </Circle>
        <p className="fz-24p fw-600 mb-3x">Thank you for your Application</p>
        <p
          className="fz-18p fw-600 pb-4x mx-auto l-height-1/4 flex-1"
          style={{ maxWidth: '22rem' }}
        >
          We aim to respond to successful applicants within two weeks.
        </p>
        <Link href="/">
          <a className="btn btn-blue">{text.form.btnBackToForm}</a>
        </Link>
      </div>
    </>
  )
}
