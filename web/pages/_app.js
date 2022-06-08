import { ApolloProvider } from '@apollo/client'
import apolloClient from '~/utils/apollo-client'

import 'swiper/scss'
import 'swiper/css/bundle'
import '../styles/index.scss'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
