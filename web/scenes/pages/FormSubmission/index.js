import { Circle } from '~/components/Circle'
import SVG from '~/components/SVG'
import { doneCheck } from '~/utils/svgImages'
import text from '~/assets/text-content/en/static.json'
import Link from 'next/link'

export const FormSubmissionPage = () => {
  return (
    <>
      <div
        className="mt-10x mt-20x_lg mb-8x mb-16x_lg text-center mx-auto flex flex-col items-center justify-between shadow-light p-4x p-10x_lg"
        style={{ maxWidth: '40rem' }}
      >
        <Circle size={64} color={'rgba(245, 124, 64, 0.2)'} classList="mx-auto">
          <SVG content={doneCheck()} size={32} />
        </Circle>
        <p className="fz-24p fw-600 mb-3x">Thank you for your Enquiry</p>
        <p className="fz-18p pb-4x mx-auto l-height-1/4 flex-1" style={{ maxWidth: '22rem' }}>
          <span className="fw-600">We will be in contact shortly</span>
          <br />
          Please also check your junk email folder if you have not heard from us
        </p>
        <Link href="/">
          <a className="btn btn-blue">{text.form.btnBackToForm}</a>
        </Link>
      </div>
    </>
  )
}
