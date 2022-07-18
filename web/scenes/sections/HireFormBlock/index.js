import { useEffect, useState } from 'react'
import SVG from '~/components/SVG'
import { handleMutations, log } from '~/utils/helpers'
import { checkValidateFullName, checkValidateEmail, checkValidatePhone } from '~/utils/validators'
import { Circle } from '~/components/Circle'
import { Input } from '~/components/Form/Input'
import { email as emailIcon, phone as phoneIcon, arrowLeft, doneCheck } from '~/utils/svgImages'
import { Color } from '~/utils/constants'
import text from '~/assets/text-content/en/static.json'
import countries from '~/assets/text-content/en/countries.json'
import styles from './style.module.scss'

export const HireFormBlock = ({ className = '', onlyContacts = false }) => {
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

  const checkAllFields = () => {
    setFullNameErrors(checkValidateFullName(fullName))
    return !fullNameErrors.length
  }
  const checkMandatoryFields_step1 = () => {
    setFullNameErrors(checkValidateFullName(fullName))
    if (!checkValidateFullName(fullName).length) {
      setActiveStep(activeStep + 1)
    } else {
      event.preventDefault()
      return false
    }
  }
  const checkMandatoryFields_step2 = () => {
    setFullNameErrors(checkValidateFullName(fullName))
    if (!checkValidateFullName(fullName).length) {
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

  const sendForm = () => {
    const mutations = [
      {
        create: {
          _type: 'hireForm',
          position,
          fullName,
          country,
          phone,
          email,
          details,
          frequencyDuration,
          source,
          time: new Date().toString(),
          processed: false,
        },
      },
    ]
    return handleMutations(mutations)
  }
  // useEffect(() => checkAllFields(), [])

  return (
    <section className={`block ${className}`}>
      {!onlyContacts && (
        <div className="container narrow">
          <div
            className={`card rounded-rem bg-blue pt-10x pb-11x pl-4x pr-4x mx-auto ${styles.card}`}
          >
            <h2 className="fz-48p fw-600 l-height-1 mb-2x text-center">Hire a tutor</h2>
            <p className="fz-22p l-height-1/5 mb-4x text-center">
              Please fill out the form and we'll find a tutor for you
            </p>
            <form className="form mx-auto flex flex-col bg-white rounded-small pt-5x pr-5x pb-4x pl-5x">
              {activeStep === 0 && (
                <>
                  <div className="flex gap-4 mb-3x">
                    <label className="flex-1 relative">
                      <input
                        type="radio"
                        name="role"
                        value="parent"
                        className="absolute"
                        onChange={(e) => setPosition(e.target.value)}
                      />
                      <span className="fw-500 border-light rounded-xSmall flex items-center justify-center w-full l-height-1 p-2x transition">
                        I am a parent
                      </span>
                    </label>
                    <label className="flex-1 relative">
                      <input
                        type="radio"
                        name="role"
                        value="student"
                        className="absolute"
                        onChange={(e) => setPosition(e.target.value)}
                      />
                      <span className="fw-500 border-light rounded-xSmall flex items-center justify-center w-full l-height-1 p-2x transition">
                        I am a student
                      </span>
                    </label>
                  </div>
                  <div className="flex gap-4 mb-2x">
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
                    {/*<label className="flex-1 fz-14p">*/}
                    {/*  <span className="fw-500 color-black">Full name</span>*/}
                    {/*  <input*/}
                    {/*    type="text"*/}
                    {/*    placeholder="Enter your name here"*/}
                    {/*    className="p-2x border-light l-height-1 w-full rounded-xSmall"*/}
                    {/*    value={fullName}*/}
                    {/*    onChange={(e) => setFullName(e.target.value)}*/}
                    {/*  />*/}
                    {/*</label>*/}
                    <label className="flex-1 fz-14p">
                      <span className="fw-500 color-black">Country</span>
                      <select
                        id=""
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
                  </div>
                  <div className="flex gap-4 mb-4x flex-1">
                    <Input
                      id="email"
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
                    {/*<label className="flex-1 fz-14p">*/}
                    {/*  <span className="fw-500 color-black">Your phone</span>*/}
                    {/*  <input*/}
                    {/*    type="tel"*/}
                    {/*    placeholder="Select method"*/}
                    {/*    className="p-2x border-light l-height-1 w-full rounded-xSmall"*/}
                    {/*    value={phone}*/}
                    {/*    onChange={(e) => setPhone(e.target.value)}*/}
                    {/*  />*/}
                    {/*</label>*/}
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
                    {/*<label className="flex-1 fz-14p">*/}
                    {/*  <span className="fw-500 color-black">Your email</span>*/}
                    {/*  <input*/}
                    {/*    type="email"*/}
                    {/*    placeholder="Enter your email"*/}
                    {/*    className="p-2x border-light l-height-1 w-full rounded-xSmall"*/}
                    {/*    value={email}*/}
                    {/*    onChange={(e) => setEmail(e.target.value)}*/}
                    {/*  />*/}
                    {/*</label>*/}
                  </div>
                  {typeof window !== 'undefined' && (
                    <label>
                      <input type="hidden" name="source" value={window.location.href} />
                    </label>
                  )}
                  <div className="flex gap-4 items-center justify-between">
                    <span>
                      <b>1</b>/2 About yourself
                    </span>
                    <button
                      type="button"
                      className={`btn btn-blue ${fullNameErrors.length ? 'disabled' : ''}`}
                      // disabled={!fullNameErrors.length}
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
                      <span className="fz-14p fw-500 color-black">Details of Tutoring Request</span>
                      <textarea
                        className="p-2x border-light l-height-1 w-full rounded-xSmall"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="flex mb-5x flex-1">
                    <label className="flex-1">
                      <span className="fz-14p fw-500 color-black">
                        Frequency and Duration of Tuition
                      </span>
                      <textarea
                        className="p-2x border-light l-height-1 w-full rounded-xSmall"
                        value={frequencyDuration}
                        onChange={(e) => setFrequencyDuration(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="flex gap-4 items-center justify-between">
                    <span>
                      <b>2</b>/2 About yourself
                    </span>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        className="btn btn-gray flex items-center justify-center"
                        onClick={() => setActiveStep(activeStep - 1)}
                      >
                        <SVG content={arrowLeft()} size={20} />
                      </button>
                      <button
                        type="button"
                        className="btn btn-blue"
                        onClick={() => {
                          sendForm()
                            .then((result) => {
                              log(result)
                              clearAllFields()
                              setActiveStep(activeStep + 1)
                            })
                            .catch((e) => console.log(e))
                        }}
                      >
                        {text.form.btnNextStep}
                      </button>
                    </div>
                  </div>
                </>
              )}
              {activeStep === 2 && (
                <>
                  <div className="text-center flex flex-col items-center justify-between">
                    <span className="round relative mx-auto flex items-center justify-center mb-4x">
                      <SVG content={doneCheck()} size={32} />
                    </span>
                    <p className="fz-24p fw-600 mb-3x">Thank you for your Enquiry</p>
                    <p
                      className="fz-18p pb-4x mx-auto l-height-1/4 flex-1"
                      style={{ maxWidth: '22rem' }}
                    >
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
        </div>
      )}
      <div className={`contacts pb-15x ${styles.contacts}`}>
        <div className="container">
          <h3 className="title fz-36p fw-600 text-center mx-auto mb-4x">
            Still have questions? Let’s get in touch.
          </h3>
          <div className="links flex items-center justify-between mx-auto fz-20p fw-600">
            <a href={`mailto:${text.contacts.email}`} className="flex items-center">
              <Circle size={32} color={Color.Blue} classList="mr-1x">
                <SVG content={emailIcon()} />
              </Circle>
              {text.contacts.email}
            </a>
            <a href={`tel:${text.contacts.primaryPhone}`} className="flex items-center">
              <Circle size={32} color={Color.Blue} classList="mr-1x">
                <SVG content={phoneIcon()} size={14} />
              </Circle>
              {text.contacts.primaryPhone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HireFormBlock
