// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import siteConfig from './documents/siteConfig'
import homePage from './documents/pages/homePage'
import blogPage from './documents/pages/blogPage'
import termAndConditions from './documents/pages/termsConditionsPage'
import privacyPolicy from './documents/pages/privacyPolicyPage'
import post from './documents/post'
import author from './documents/author'
import category from './documents/category'
import university from './documents/university'
import tutor from './documents/tutor'
import review from './documents/review'
import subject from './documents/subject'
import level from './documents/level'
import hireForm from './documents/hireForm'
import applyForm from './documents/applyForm'

// Object types
import logo from './objects/brandLogo'
import blockContent from './objects/blockContent'
import simpleContent from './objects/simpleContent'
import mainImage from './objects/mainImage'
import floatImage from './objects/floatImage'
import link from './objects/link'
import firstScreen from './objects/homePage/firstScreen'
import qualification from './objects/tutor/qualification'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    siteConfig,
    homePage,
    blogPage,
    termAndConditions,
    privacyPolicy,
    tutor,
    review,
    subject,
    level,
    university,
    hireForm,
    applyForm,
    logo,
    mainImage,
    floatImage,
    link,
    post,
    author,
    category,
    blockContent,
    simpleContent,
    firstScreen,
    qualification,
  ]),
})
