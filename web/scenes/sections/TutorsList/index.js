import { gql, useQuery } from '@apollo/client'
import { Loader } from '~/components/Loader'
import SVG from '~/components/SVG'
import { awesomeStar, studyHat } from '~/utils/svgImages'
import React from 'react'

// import tutors from '~/scenes/pages/aLevel/data.json'

export const TutorsList = ({ tutors }) => {
  console.log(tutors)

  const QUERY = gql`
    query getTutors {
      SiteConfig(id: "global-config") {
        _id
        _updatedAt
        title
        description
        keywords
        url
        logo {
          alt
          asset {
            url
          }
        }
        primaryPhone
        secondaryPhone
        email
        facebook
        twitter
        linkedIn
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

  if (data) {
    console.log(data)
  }

  return (
    <div className="flex flex-wrap gap-8">
      {tutors.map((tutor) => {
        return (
          <div key={tutor.id} className="tutor-card flex w-full border-light rounded-small">
            <img src={tutor.avatar} alt={tutor.name} className="block" />
            <div className="content p-4x">
              <p className="flex items-center mb-4x">
                <span className="fz-22p fw-600 mr-3x">{tutor.name}</span>
                <SVG content={awesomeStar()} size={24} />
                <span className="fz-14p fw-500 ml-1x">{tutor.position}</span>
              </p>
              <p className="flex items-center fw-500 mb-2x">
                <SVG content={studyHat()} size={24} className="mr-1x" />
                {tutor.education}
              </p>
              <p className="l-height-1/5">{tutor.description}</p>
            </div>
            <div className="actions">
              <p className="fz-14p fw-600 l-height-1/4 pt-4x pb-4x pl-3x pr-3x">
                <span className="mr-1x">Teaches:</span>
                {tutor.teaches.map((teach) => (
                  <span className="teach mr-1x mb-1x">{teach}</span>
                ))}
              </p>
              <a href="" className="btn btn-white w-full">
                View profile
              </a>
              <a href="" className="btn btn-blue w-full">
                Hire a tutor
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TutorsList
