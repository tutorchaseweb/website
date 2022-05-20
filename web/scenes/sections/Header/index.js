import { gql, useQuery } from '@apollo/client'
import { Loader } from '~/components/Loader'

export const Header = () => {
  const QUERY = gql`
    query Config {
      SiteConfig(id: "global-config") {
        _id
        title
        description
        logo {
          alt
          asset {
            url
          }
          hotspot {
            width
            height
          }
        }
      }
    }
  `
  const { data, loading, error } = useQuery(QUERY)

  if (loading) {
    return <Loader />
  }
  if (error) {
    console.error(error)
    return null
  }


  const { SiteConfig } = data
  console.log(SiteConfig)

  return Boolean(SiteConfig) && (
    <header className="py-3x pt-3x pb-3x">
      <div className="container wide flex justify-between">
        <img src={SiteConfig?.logo?.asset?.url} alt={SiteConfig?.logo?.alt} />
        <nav className="flex-1 flex justify-center">
          <ul>
            <li>Online Tutoring</li>
            <li>University Admissions</li>
            <li>About Us</li>
            <li>Reviews</li>
          </ul>
        </nav>
        <a href="tel:+18882763561" className="flex items-center font-semibold mr-4x">
          <svg className="phone-icon mr-1x" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="15" fill="#171D23"/>
            <path d="M19.8 17.2L18.1333 17C17.7333 16.9333 17.3333 17.0667 17.0667 17.4L15.8667 18.6C14 17.6667 12.4 16.0667 11.4667 14.2L12.7333 12.9333C13 12.6667 13.1333 12.2667 13.1333 11.8667L12.8 10.2C12.7333 9.53333 12.1333 9 11.4667 9H10.3333C9.6 9 9 9.6 9 10.4C9.33333 16.0667 13.9333 20.6667 19.6 21C20.3333 21 21 20.4 21 19.6667V18.5333C21 17.8 20.4667 17.2667 19.8 17.2Z" fill="#F9FAFB"/>
          </svg>
          +1 (888) 2763561
        </a>
        <button className="btn btn-gray small">Hire a tutor</button>
      </div>

      header
    </header>
  )
}

// export async function getServerSideProps() {
//   const QUERY = groq`
//     *[_type == "post"] {
//       ...,
//     }
//   `
//   const data = await client.fetch(QUERY)
//
//   return {
//     props: {
//       config: data
//     },
//   }
// }

export default Header