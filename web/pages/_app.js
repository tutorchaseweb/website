import { ApolloProvider } from '@apollo/client'
import apolloClient from '~/utils/apollo-client'

import 'swiper/swiper.scss'
import '../styles/index.scss'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
