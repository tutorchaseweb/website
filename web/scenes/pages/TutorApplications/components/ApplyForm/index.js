import { useState, useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDropzone } from 'react-dropzone'
import client from '~/utils/sanity-client'
import SVG from '~/components/SVG'
import { handleMutations, log, useWindowSize } from '~/utils/helpers'
import {
  checkValidateFullName,
  checkValidateEmail,
  checkValidatePhone,
  checkValidateText,
  checkValidateMessage,
  checkValidateSelect,
} from '~/utils/validators'
import { Circle } from '~/components/Circle'
import { Input, Textarea, Select } from '~/components/Form'
import { arrowLeft, doneCheck } from '~/utils/svgImages'
import { Color, MOBILE_BREAKPOINT, GEO_API_URL, GEO_API_KEY } from '~/utils/constants'
import text from '~/assets/text-content/en/static.json'
import countriesRaw from '~/assets/text-content/en/countries.json'
import fileIcon from '~/assets/images/icons/data-file.jpg'
import styles from './style.module.scss'

const defaultCountry = {
  title: 'Select your country',
  value: 'not selected',
}

export const ApplyForm = ({ className = '' }) => {
  const router = useRouter()
  const page = useWindowSize()
  const [activeStep, setActiveStep] = useState(0)
  const [source, setSource] = useState(process.env.NEXT_PUBLIC_BASE_URL)
  const [fullName, setFullName] = useState('')
  const [fullNameErrors, setFullNameErrors] = useState([])
  const [phone, setPhone] = useState('')
  const [phoneErrors, setPhoneErrors] = useState([])
  const [email, setEmail] = useState('')
  const [emailErrors, setEmailErrors] = useState([])
  const [country, setCountry] = useState(defaultCountry)
  const [countryErrors, setCountryErrors] = useState([])
  const [hearAboutUs, setHearAboutUs] = useState('')
  const [hearAboutUsErrors, setHearAboutUsErrors] = useState([])
  const [qualifications, setQualifications] = useState('')
  const [qualificationsErrors, setQualificationsErrors] = useState([])
  const [tutoringExperience, setTutoringExperience] = useState('')
  const [tutoringExperienceErrors, setTutoringExperienceErrors] = useState([])
  const [tutoringOffered, setTutoringOffered] = useState('')
  const [tutoringOfferedErrors, setTutoringOfferedErrors] = useState([])
  const [linkedInUrl, setLinkedInUrl] = useState('')
  const [referrer, setReferrer] = useState('')
  const [files, setFiles] = useState([])

  const countries = [
    defaultCountry,
    ...countriesRaw.map((country) => ({ title: country.name, value: country.code })),
  ]
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles)
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: false,
    maxSize: 10485760,
    onDrop,
  })

  const checkMandatoryFields_step1 = () => {
    setFullNameErrors(checkValidateFullName(fullName))
    setPhoneErrors(checkValidatePhone(phone))
    setEmailErrors(checkValidateEmail(email))
    setHearAboutUsErrors(checkValidateText(hearAboutUs))
    setCountryErrors(checkValidateSelect(country, countries[0]))
    if (
      !checkValidateFullName(fullName).length &&
      !checkValidatePhone(phone).length &&
      !checkValidateEmail(email).length &&
      !checkValidateText(hearAboutUs).length &&
      !checkValidateSelect(country, countries[0]).length
    ) {
      setActiveStep(activeStep + 1)
    } else {
      event.preventDefault()
      return false
    }
  }

  const checkMandatoryFields_step2 = () => {
    setQualificationsErrors(checkValidateMessage(qualifications))
    setTutoringExperienceErrors(checkValidateMessage(tutoringExperience))
    setTutoringOfferedErrors(checkValidateMessage(tutoringOffered))
    if (
      !checkValidateMessage(qualifications).length &&
      !checkValidateMessage(tutoringExperience).length &&
      !checkValidateMessage(tutoringOffered).length
    ) {
      setActiveStep(activeStep + 1)
    } else {
      event.preventDefault()
      return false
    }
  }

  const checkMandatoryFields_step3 = () => {
    event.preventDefault()
    sendData()
      .then(() => {
        fetch('/api/apply_form_to_user', {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(email),
        })
      })
      .then((result) => {
        log(result)
        clearAllFields()
        router.push('/tutor-submission')
      })
      .catch((e) => console.log(e))
  }

  const clearAllFields = () => {
    setCountry('not selected')
    setFullName('')
    setPhone('')
    setEmail('')
    setHearAboutUs('')
    setQualifications('')
    setTutoringExperience('')
    setTutoringOffered('')
    setLinkedInUrl('')
    setReferrer('')
    setFiles([])
  }

  const sendForm = (file = {}) => {
    const mutations = [
      {
        create: {
          _type: 'applyForm',
          fullName,
          email,
          country: country.title === 'Select your country' ? 'not selected' : country.title,
          phone,
          hearAboutUs,
          qualifications,
          tutoringExperience,
          tutoringOffered,
          linkedInUrl,
          referrer,
          tutorCv: {
            _type: 'file',
            asset: {
              _type: 'reference',
              _ref: file._id,
            },
          },
          source,
          time: new Date().toString(),
          processed: false,
        },
      },
    ]
    return handleMutations(mutations)
  }

  const sendData = async () => {
    const file = files[0]
    if (file) {
      client.assets
        .upload('file', file, {
          filename: file.name,
        })
        .then((imageAsset) => {
          const data = {
            fullName,
            email,
            country: country.title,
            phone,
            hearAboutUs,
            qualifications,
            tutoringExperience,
            tutoringOffered,
            linkedInUrl,
            referrer,
            fileName: files[0]?.name,
            filePath: imageAsset?.url,
          }
          fetch('/api/apply_form_to_sales_team', {
            method: 'POST',
            headers: {
              Accept: 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
        })
        .then(async (file) => {
          return await sendForm(file)
        })
        .catch(console.error)
    } else {
      return await sendForm()
    }
  }

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GEOLOCATION_API_KEY || GEO_API_KEY
    fetch(`${GEO_API_URL}/ipgeo?apiKey=${apiKey}`)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.calling_code) {
          setPhone(data.calling_code)
        }
        const currentCountry = countries.find(
          (country) => country.title === data.country_name || country.value === data.country_code2
        )
        if (currentCountry) {
          setCountry(currentCountry)
        }
      })
  }, [])

  const empty = <span>&nbsp;</span>

  return (
    <div
      className={`apply-form bg-white rounded-rem pt-4x pb-4x pl-3x pr-3x p-6x_lg w-full ${styles.card} ${className}`}
    >
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
            {page.width < MOBILE_BREAKPOINT ? (
              <>
                <div className="flex gap-8 mb-2x">
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
                <div className="flex mb-2x">
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
              </>
            ) : (
              <div className="flex gap-8 mb-2x">
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
            )}
            <div className="flex mb-2x flex-1">
              <Input
                id="hearAboutUs"
                inputName="How did you hear about us?"
                placeholder="Select an option"
                className="flex-1 fz-14p"
                value={hearAboutUs}
                setValue={setHearAboutUs}
                Errors={hearAboutUsErrors}
                setErrors={setHearAboutUsErrors}
                checkValidateValue={checkValidateText}
              />
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
              <Textarea
                id="Qualifications"
                className="flex-1 fz-14p"
                fieldClassName="p-2x border-light l-height-1 w-full rounded-xSmall"
                inputName="Qualifications"
                placeholder="Describe your qualifications"
                value={qualifications}
                setValue={setQualifications}
                Errors={qualificationsErrors}
                setErrors={setQualificationsErrors}
                checkValidateValue={checkValidateMessage}
              />
            </div>
            <div className="flex mb-2x">
              <Textarea
                id="Experience"
                className="flex-1 fz-14p"
                fieldClassName="p-2x border-light l-height-1 w-full rounded-xSmall"
                inputName="Tutoring Experience"
                placeholder="Describe your tutoring experience"
                value={tutoringExperience}
                setValue={setTutoringExperience}
                Errors={tutoringExperienceErrors}
                setErrors={setTutoringExperienceErrors}
                checkValidateValue={checkValidateMessage}
              />
            </div>
            <div className="flex mb-2x flex-1">
              <Textarea
                id="Offered"
                className="flex-1"
                fieldClassName="p-2x border-light l-height-1 w-full rounded-xSmall"
                inputName="Tutoring Offered"
                placeholder="Describe your tutoring offered"
                value={tutoringOffered}
                setValue={setTutoringOffered}
                Errors={tutoringOfferedErrors}
                setErrors={setTutoringOfferedErrors}
                checkValidateValue={checkValidateMessage}
              />
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
                value={linkedInUrl}
                setValue={setLinkedInUrl}
              />
            </div>
            <div className="flex mb-2x">
              <Input
                id="referrer"
                inputName="Referrer"
                placeholder="Enter referrer"
                className="flex-1 fz-14p"
                value={referrer}
                setValue={setReferrer}
              />
            </div>
            <span className="fz-14p fw-500 color-black">Upload a CV</span>
            <div className="flex mb-2x flex-1">
              <div
                className="file-wrapper relative flex items-center justify-center w-full rounded-xSmall border-light p-3x"
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : files.length ? (
                  <p className="flex items-center">
                    <img src={fileIcon.src} alt="file" width="50" className="mr-1x" />
                    <span className="fz-18p fw-600">{files[0].name}</span>
                    <span
                      className="close color-blue fz-32p fw-600 l-height-1 absolute pointer"
                      onClick={() => setFiles([])}
                    >
                      &times;
                    </span>
                  </p>
                ) : (
                  <p>
                    Drop file here{' '}
                    <span
                      className="color-blue fw-500 pointer"
                      style={{ textDecorationLine: 'underline' }}
                    >
                      browse
                    </span>
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-4 items-center justify-between">
              <span>
                <b>3</b>/3 Uploading a CV
              </span>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="btn small btn-gray flex items-center justify-center"
                  onClick={() => {
                    setActiveStep(activeStep - 1)
                  }}
                >
                  <SVG content={arrowLeft()} size={20} />
                </button>
                <button
                  type="button"
                  className="btn small btn-blue"
                  onClick={checkMandatoryFields_step3}
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
