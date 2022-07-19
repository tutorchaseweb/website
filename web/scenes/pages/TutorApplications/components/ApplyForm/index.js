import { useState } from 'react'
import SVG from '~/components/SVG'
import { handleMutations } from '~/utils/helpers'
import { checkValidateFullName, checkValidateEmail, checkValidatePhone } from '~/utils/validators'
import { Circle } from '~/components/Circle'
import { Input } from '~/components/Form/Input'
import { arrowLeft, doneCheck } from '~/utils/svgImages'
import { Color } from '~/utils/constants'
import text from '~/assets/text-content/en/static.json'
import countries from '~/assets/text-content/en/countries.json'
import styles from './style.module.scss'

export const ApplyForm = ({ className = '' }) => {
  const [activeStep, setActiveStep] = useState(0)
  const [source, setSource] = useState(process.env.NEXT_PUBLIC_BASE_URL)
  const [position, setPosition] = useState('not selected')
  const [fullName, setFullName] = useState('')
  const [fullNameErrors, setFullNameErrors] = useState([])
  const [phone, setPhone] = useState('')
  const [phoneErrors, setPhoneErrors] = useState([])
  const [email, setEmail] = useState('')
  const [emailErrors, setEmailErrors] = useState([])
  const [country, setCountry] = useState('not selected')
  const [details, setDetails] = useState('')
  const [frequencyDuration, setFrequencyDuration] = useState('')

  const checkMandatoryFields_step1 = () => {
    setFullNameErrors(checkValidateFullName(fullName))
    setPhoneErrors(checkValidatePhone(phone))
    setEmailErrors(checkValidateEmail(email))
    if (
      !checkValidateFullName(fullName).length &&
      !checkValidatePhone(phone).length &&
      !checkValidateEmail(email).length
    ) {
      setActiveStep(activeStep + 1)
    } else {
      event.preventDefault()
      return false
    }
  }

  const checkMandatoryFields_step2 = () => {
    // setFullNameErrors(checkValidateFullName(fullName))
    // setPhoneErrors(checkValidatePhone(phone))
    // setEmailErrors(checkValidateEmail(email))
    if (
      // !checkValidateFullName(fullName).length &&
      // !checkValidatePhone(phone).length &&
      !checkValidateEmail(email).length
    ) {
      setActiveStep(activeStep + 1)
    } else {
      event.preventDefault()
      return false
    }
  }

  const checkMandatoryFields_step3 = () => {
    // setFullNameErrors(checkValidateFullName(fullName))
    // setPhoneErrors(checkValidatePhone(phone))
    // setEmailErrors(checkValidateEmail(email))
    if (
      // !checkValidateFullName(fullName).length &&
      // !checkValidatePhone(phone).length &&
      !checkValidateEmail(email).length
    ) {
      setActiveStep(activeStep + 1)
    } else {
      event.preventDefault()
      return false
    }
  }

  const clearAllFields = () => {
    setPosition('not selected')
    setCountry('not selected')
    setFullName('')
    setPhone('')
    setEmail('')
    setDetails('')
    setFrequencyDuration('')
  }

  // const sendForm = () => {
  //   const mutations = [
  //     {
  //       create: {
  //         _type: 'applyForm',
  //         position,
  //         fullName,
  //         country,
  //         phone,
  //         email,
  //         details,
  //         frequencyDuration,
  //         source,
  //         time: new Date().toString(),
  //         processed: false,
  //       },
  //     },
  //   ]
  //   return handleMutations(mutations)
  // }

  const empty = <span>&nbsp;</span>

  return (
    <div className={`apply-form bg-white rounded-rem p-6x w-full ${styles.card} ${className}`}>
      <h2 className="fz-24p fw-600 l-height-1 mb-4x">{activeStep === 3 ? empty : 'Apply Now'}</h2>
      <form className="form flex flex-col">
        {activeStep === 0 && (
          <>
            <div className="flex mb-2x">
              <Input
                id="fullName"
                inputName="Full name"
                placeholder="Enter your name here"
                className="flex-1 fz-14p"
                value={fullName}
                setValue={setFullName}
                Errors={fullNameErrors}
                setErrors={setFullNameErrors}
                checkValidateValue={checkValidateFullName}
              />
            </div>
            <div className="flex mb-2x">
              <Input
                id="email"
                inputName="Your email"
                placeholder="Enter your email"
                className="flex-1 fz-14p"
                type="email"
                value={email}
                setValue={setEmail}
                Errors={emailErrors}
                setErrors={setEmailErrors}
                checkValidateValue={checkValidateEmail}
              />
            </div>
            <div className="flex gap-8 mb-2x">
              <label className="flex-1 fz-14p">
                <span className="fw-500 color-black">Country</span>
                <select
                  id="country"
                  name="country"
                  className="p-2x border-light l-height-1 w-full rounded-xSmall"
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="not selected" selected disabled>
                    Select your country
                  </option>
                  {countries.map((country) => {
                    return (
                      <option key={country.code} id={country.code} value={country.name}>
                        {country.name}
                      </option>
                    )
                  })}
                </select>
              </label>
              <Input
                id="phone"
                inputName="Your phone"
                placeholder="Enter your phone"
                className="flex-1 fz-14p"
                type="tel"
                value={phone}
                setValue={setPhone}
                Errors={phoneErrors}
                setErrors={setPhoneErrors}
                checkValidateValue={checkValidatePhone}
              />
            </div>
            <div className="flex mb-2x flex-1">
              <label className="flex-1 fz-14p">
                <span className="fw-500 color-black">How did you hear about us?</span>
                <select
                  id="country"
                  name="country"
                  className="p-2x border-light l-height-1 w-full rounded-xSmall"
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="not selected" selected disabled>
                    Select an option
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </label>
            </div>
            {typeof window !== 'undefined' && (
              <label>
                <input type="hidden" name="source" value={window.location.href} />
              </label>
            )}
            <div className="flex gap-4 items-center justify-between">
              <span>
                <b>1</b>/3 About yourself
              </span>
              <button
                type="button"
                className={`btn small btn-blue ${
                  fullNameErrors.length || phoneErrors.length || emailErrors.length
                    ? 'disabled'
                    : ''
                }`}
                onClick={() => {
                  typeof window !== 'undefined' && setSource(window.location.href)
                  checkMandatoryFields_step1()
                }}
              >
                {text.form.btnNextStep}
              </button>
            </div>
          </>
        )}
        {activeStep === 1 && (
          <>
            <div className="flex mb-2x">
              <label className="flex-1">
                <span className="fz-14p fw-500 color-black">Qualifications</span>
                <textarea
                  placeholder="Describe your qualifications"
                  className="p-2x border-light l-height-1 w-full rounded-xSmall"
                  value={''}
                  onChange={(e) => null}
                />
              </label>
            </div>
            <div className="flex mb-2x">
              <label className="flex-1">
                <span className="fz-14p fw-500 color-black">Tutoring Experience</span>
                <textarea
                  placeholder="Describe your tutoring experience"
                  className="p-2x border-light l-height-1 w-full rounded-xSmall"
                  value={''}
                  onChange={(e) => null}
                />
              </label>
            </div>
            <div className="flex mb-2x flex-1">
              <label className="flex-1">
                <span className="fz-14p fw-500 color-black">Tutoring Offered</span>
                <textarea
                  placeholder="Describe your tutoring offered"
                  className="p-2x border-light l-height-1 w-full rounded-xSmall"
                  value={''}
                  onChange={(e) => null}
                />
              </label>
            </div>
            <div className="flex gap-4 items-center justify-between">
              <span>
                <b>2</b>/3 Work experience
              </span>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="btn small btn-gray flex items-center justify-center"
                  onClick={() => setActiveStep(activeStep - 1)}
                >
                  <SVG content={arrowLeft()} size={20} />
                </button>
                <button
                  type="button"
                  className="btn small btn-blue"
                  onClick={checkMandatoryFields_step2}
                >
                  {text.form.btnNextStep}
                </button>
              </div>
            </div>
          </>
        )}
        {activeStep === 2 && (
          <>
            <div className="flex mb-2x">
              <Input
                id="url"
                inputName="LinkedIn Profile URL"
                placeholder="Enter URL"
                className="flex-1 fz-14p"
                type="url"
                value={''}
                setValue={setFullName}
                Errors={fullNameErrors}
                setErrors={setFullNameErrors}
                checkValidateValue={checkValidateFullName}
              />
            </div>
            <div className="flex mb-2x">
              <Input
                id="referrer"
                inputName="Referrer"
                placeholder="Enter referrer"
                className="flex-1 fz-14p"
                value={''}
                setValue={setFullName}
                Errors={fullNameErrors}
                setErrors={setFullNameErrors}
                checkValidateValue={checkValidateFullName}
              />
            </div>
            <div className="flex mb-2x flex-1">
              <label className="flex-1 relative">
                <input type="file" name="CV" className="absolute" />
                <span className="fw-500 border-light rounded-xSmall flex items-center justify-center w-full l-height-1 p-2x transition">
                  Drop file here <span className="color-blue">browse</span>
                </span>
              </label>
            </div>
            <div className="flex gap-4 items-center justify-between">
              <span>
                <b>3</b>/3 Uploading a CV
              </span>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="btn small btn-gray flex items-center justify-center"
                  onClick={() => setActiveStep(activeStep - 1)}
                >
                  <SVG content={arrowLeft()} size={20} />
                </button>
                <button
                  type="button"
                  className="btn small btn-blue"
                  onClick={() => {
                    clearAllFields()
                    checkMandatoryFields_step3()
                  }}
                >
                  {text.form.btnNextStep}
                </button>
              </div>
            </div>
          </>
        )}
        {activeStep === 3 && (
          <>
            <div className="text-center flex flex-col items-center justify-between">
              <Circle size={64} color={'rgba(0, 26, 150, 0.1)'} classList="mx-auto">
                <SVG content={doneCheck(Color.Blue)} size={32} />
              </Circle>
              <span className="round relative  flex items-center justify-center mb-4x"></span>
              <p className="fz-24p fw-600 mb-3x">Thank you for your Enquiry</p>
              <p className="fz-18p pb-4x mx-auto l-height-1/4 flex-1" style={{ maxWidth: '22rem' }}>
                <span className="fw-600">We will be in contact shortly</span>
                <br />
                Please also check your junk email folder if you have not heard from us
              </p>
              <button type="button" className="btn btn-blue" onClick={() => setActiveStep(0)}>
                {text.form.btnBackToForm}
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  )
}

export default ApplyForm
