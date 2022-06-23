// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import siteConfig from './documents/siteConfig'
import homePage from './documents/homePage'

// Object types
import logo from './objects/brandLogo'
import mainImage from './objects/mainImage'
import link from './objects/link'
import firstScreen from './objects/homePage/firstScreen'

// We import object and document schemas
import blockContent from './blockContent'
import simpleContent from './simpleContent'
import category from './category'
import post from './post'
import author from './author'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    siteConfig,
    homePage,
    logo,
    mainImage,
    link,
    // The following are document types which will appear
    // in the studio.
    post,
    author,
    category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    simpleContent,
    firstScreen,
  ]),
})
