import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import SVG from '~/components/SVG'
import { error } from '~/utils/svgImages'
import { handleMutations } from '~/utils/helpers'
import {
  checkValidateFullName,
  checkValidateEmail,
  checkValidateMessage,
  checkValidatePhone,
  checkValidateSelect,
} from '~/utils/validators'
import { Circle } from '~/components/Circle'
import { ConfigContext } from '~/components/Layout'
import { Input, Select, Textarea } from '~/components/Form'
import { email as emailIcon, phone as phoneIcon, arrowLeft, doneCheck } from '~/utils/svgImages'
import { Color, GEO_API_URL, GEO_API_KEY, EXPIRY_DATE } from '~/utils/constants'
import text from '~/assets/text-content/en/static.json'
import countriesRaw from '~/assets/text-content/en/countries.json'
import PhoneInput from 'react-phone-input-2'
import styles from './style.module.scss'
import Image from 'next/image'

import formBackground from '~/assets/images/bg-form.png'
import contactsBackground from '~/assets/images/bg-gradient-medium.png'

const defaultCountry = {
  title: 'Select your country',
  value: 'not selected',
}

const countries = [
  defaultCountry,
  ...countriesRaw.map((country) => ({ title: country.name, value: country.code })),
]

export const HireFormBlock = ({ className = '', onlyContacts = false }) => {
  const router = useRouter()
  const [activeStep, setActiveStep] = useState(0)
  const [source, setSource] = useState(process.env.NEXT_PUBLIC_BASE_URL)
  const [position, setPosition] = useState('not selected')
  const [fullName, setFullName] = useState('')
  const [fullNameErrors, setFullNameErrors] = useState([])
  const [phone, setPhone] = useState('')
  const [phoneErrors, setPhoneErrors] = useState([])
  const [email, setEmail] = useState('')
  const [emailErrors, setEmailErrors] = useState([])
  const [country, setCountry] = useState(countries[0])
  const [countryCode, setCountryCode] = useState('')
  const [countryErrors, setCountryErrors] = useState([])
  const [details, setDetails] = useState('')
  const [detailsErrors, setDetailsErrors] = useState([])
  const [frequencyDuration, setFrequencyDuration] = useState('')
  const [gclidValue, setGclidValue] = useState('')

  const checkMandatoryFields_step1 = () => {
    setFullNameErrors(checkValidateFullName(fullName))
    setPhoneErrors(checkValidatePhone(phone))
    setEmailErrors(checkValidateEmail(email))
    setCountryErrors(checkValidateSelect(country, countries[0]))
    if (
      !checkValidateFullName(fullName).length &&
      !checkValidatePhone(phone).length &&
      !checkValidateEmail(email).length &&
      !checkValidateSelect(country, countries[0]).length
    ) {
      setActiveStep(activeStep + 1)
    } else {
      event.preventDefault()
      return false
    }
  }
  const checkMandatoryFields_step2 = () => {
    setDetailsErrors(checkValidateMessage(details))
    if (!checkValidateMessage(details).length) {
      sendForm()
        .then(() => {
          clearAllFields()
          router.push('/form-submission')
        })
        .catch((e) => console.log(e))
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

  const data = {
    _type: 'hireForm',
    position,
    fullName,
    country: country.title,
    phone,
    email,
    details,
    frequencyDuration,
    source,
    gclidValue,
    time: new Date().toString(),
    processed: false,
  }

  const sendForm = () => {
    const mutations = [
      {
        create: data,
      },
    ]

    fetch('/api/hire_form_to_sales_team', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          return true
        }
      })
      .catch((e) => console.log(e))

    fetch('/api/hire_form_to_user', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          return true
        }
      })
      .catch((e) => console.log(e))

    return handleMutations(mutations)
  }

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GEOLOCATION_API_KEY || GEO_API_KEY
    fetch(`${GEO_API_URL}/ipgeo?apiKey=${apiKey}`)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.country_code2) {
          setCountryCode(data.country_code2)
        }
        const currentCountry = countries.find(
          (country) => country.title === data.country_name || country.value === data.country_code2
        )
        if (currentCountry) {
          setCountry(currentCountry)
        }
      })

    const gclid = JSON.parse(localStorage.getItem('gclid'))
    const isGclidValid = gclid && new Date().getTime() < EXPIRY_DATE

    isGclidValid && setGclidValue(gclid?.value)
  }, [])

  return (
    <section id="hireFormBlock" className={`block ${className}`}>
      {!onlyContacts && (
        <div className="container narrow">
          <div
            className={`card rounded-rem bg-blue pt-8x pb-8x pl-2x pr-2x pt-10x_lg pb-11x_lg pl-4x_lg pr-4x_lg ${styles.card}`}
          >
            <Image
              src={formBackground.src}
              alt="background image"
              className="bg-image"
              objectFit="cover"
              objectPosition="center"
              layout="fill"
            />
            <h2 className="section-title fw-600 l-height-1 mb-2x text-center">Hire a tutor</h2>
            <p className="description fz-22p l-height-1/5 mb-6x mb-4x_lg text-center">
              Please fill out the form and we'll find a tutor for you
            </p>
            <form className="form mx-auto flex flex-col bg-white rounded-small pr-3x pl-3x pt-4x pb-4x pt-5x_lg pr-5x_lg pl-5x_lg">
              <input type="hidden" name="gclidField" value={gclidValue} />
              {activeStep === 0 && (
                <>
                  <div className="flex flex-wrap gap-4 mb-3x">
                    <label className="flex-1 relative">
                      <input
                        type="radio"
                        name="role"
                        value="parent"
                        className="absolute"
                        onChange={(e) => setPosition(e.target.value)}
                      />
                      <span className="fw-500 pointer border-light rounded-xSmall flex items-center justify-center w-full l-height-1 p-2x transition">
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
                      <span className="fw-500 pointer border-light rounded-xSmall flex items-center justify-center w-full l-height-1 p-2x transition">
                        I am a student
                      </span>
                    </label>
                  </div>
                  <div className="flex flex-wrap gap-4 mb-2x">
                    <Input
                      id="fullName"
                      inputName="Full name"
                      placeholder="Your name"
                      className="flex-1 fz-14p"
                      value={fullName}
                      setValue={setFullName}
                      Errors={fullNameErrors}
                      setErrors={setFullNameErrors}
                      checkValidateValue={checkValidateFullName}
                    />
                    <Select
                      id={'country'}
                      list={countries}
                      selected={country}
                      inputName={'Country'}
                      setValue={setCountry}
                      className="flex-1 fz-14p"
                      Errors={countryErrors}
                      setErrors={setCountryErrors}
                      checkValidateValue={checkValidateSelect}
                    />
                  </div>
                  <div className="flex flex-wrap gap-4 mb-4x flex-1">
                    <div
                      className={`label relative flex-1 fz-14p ${
                        phoneErrors.length ? 'error' : ''
                      } ${styles.wrapper}`}
                    >
                      <PhoneInput
                        value={phone}
                        country={countryCode.toLowerCase()}
                        inputClass="p-1x border-light l-height-2 w-full rounded-xSmall"
                        placeholder="Enter your phone"
                        specialLabel="Phone number (with country code)"
                        buttonStyle={{ display: 'none' }}
                        autoFormat={false}
                        onChange={(phone) => {
                          setPhone(phone)
                          if (checkValidatePhone) {
                            setPhoneErrors(checkValidatePhone(phone))
                          }
                        }}
                        onBlur={(e) => {
                          if (checkValidatePhone) {
                            checkValidatePhone(phone).length
                              ? setPhoneErrors(checkValidatePhone(phone))
                              : setPhone(phone)
                          } else {
                            setPhone(phone)
                          }
                        }}
                      />
                      {phoneErrors.length !== 0 && (
                        <span className="error-wrap absolute">
                          <SVG content={error()} size={16} />
                          <span className="errors block absolute l-height-1">
                            {phoneErrors?.map((error) => {
                              return (
                                <span key={error.type} className="block">
                                  {error.message}
                                </span>
                              )
                            })}
                          </span>
                        </span>
                      )}
                    </div>
                    <Input
                      id="email"
                      inputName="Email address"
                      placeholder="Your email"
                      className="flex-1 fz-14p"
                      type="email"
                      value={email}
                      setValue={setEmail}
                      Errors={emailErrors}
                      setErrors={setEmailErrors}
                      checkValidateValue={checkValidateEmail}
                    />
                  </div>
                  {typeof window !== 'undefined' && (
                    <label>
                      <input type="hidden" name="source" value={window.location.href} />
                    </label>
                  )}
                  <div className="flex flex-wrap gap-4 items-center justify-between">
                    <label className="flex-1 ">
                      <b>1</b>/2 About yourself
                    </label>
                    <label>
                      <button
                        type="button"
                        className={`btn btn-blue ${
                          fullNameErrors.length || emailErrors.length ? 'disabled' : ''
                        }`}
                        onClick={() => {
                          typeof window !== 'undefined' && setSource(window.location.href)
                          checkMandatoryFields_step1()
                        }}
                      >
                        {text.form.btnNextStep}
                      </button>
                    </label>
                  </div>
                </>
              )}
              {activeStep === 1 && (
                <>
                  <div className="flex fz-14p mb-2x">
                    <Textarea
                      id="Details"
                      className="flex-1"
                      fieldClassName="p-2x border-light l-height-1 w-full rounded-xSmall"
                      inputName="Details of Tutoring Request"
                      value={details}
                      setValue={setDetails}
                      Errors={detailsErrors}
                      setErrors={setDetailsErrors}
                      checkValidateValue={checkValidateMessage}
                    />
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
                  <div className="flex flex-wrap gap-4 items-center justify-between">
                    <label className="flex-1">
                      <b>2</b>/2 About yourself
                    </label>
                    <label className="flex items-center gap-4">
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
                        onClick={checkMandatoryFields_step2}
                      >
                        {text.form.btnSubmit}
                      </button>
                    </label>
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

      <ConfigContext.Consumer>
        {(config) => {
          const { secondaryPhone = text.contacts.secondaryPhone, email: emailAddress } = config

          return (
            <div
              className={`contacts ${onlyContacts ? 'pt-13x pb-13x' : 'pt-20x pb-15x'} ${
                styles.contacts
              }`}
            >
              <Image
                src={contactsBackground.src}
                alt="background"
                className="contacts-background"
                objectFit="cover"
                objectPosition="center"
                layout="fill"
              />
              <div className="container">
                <h3 className="medium-title fw-600 mx-auto mb-4x">
                  Still have questions? Let???s get in touch.
                </h3>
                <div className="links flex flex-wrap items-center justify-between gap-4 mx-auto fz-20p fw-600">
                  <a href={`mailto:${emailAddress}`} className="flex items-center">
                    <Circle size={32} color={Color.Blue} classList="mr-1x">
                      <SVG content={emailIcon()} />
                    </Circle>
                    {emailAddress}
                  </a>
                  <a href={`tel:${secondaryPhone}`} className="flex items-center">
                    <Circle size={32} color={Color.Blue} classList="mr-1x">
                      <SVG content={phoneIcon()} size={14} />
                    </Circle>
                    {secondaryPhone}
                  </a>
                </div>
              </div>
            </div>
          )
        }}
      </ConfigContext.Consumer>
    </section>
  )
}

export default HireFormBlock
