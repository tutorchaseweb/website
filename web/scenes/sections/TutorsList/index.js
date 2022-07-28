import SVG from '~/components/SVG'
import { awesomeStar, studyHat } from '~/utils/svgImages'
import { getImageUrl } from '~/utils/helpers'
import Link from 'next/link'
import Image from 'next/image'

export const TutorsList = ({ tutors }) => {
  return (
    <div className="flex flex-wrap gap-8">
      {tutors.map((tutor) => {
        return (
          <div
            key={tutor._id}
            className="tutor-card flex w-full border-light rounded-small overflow-hidden"
          >
            <div
              className="w-full flex-1 relative"
              style={{ maxWidth: '15rem', minWidth: '15rem' }}
            >
              <Image
                src={`${getImageUrl(tutor.image.asset._ref).width(300).height(300)}`}
                alt={tutor.name}
                className="block"
                layout="fill"
                objectFit="cover"
              />
            </div>
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
                  <span key={teach._id} className="teach mr-1x mb-1x">
                    {teach.title}
                  </span>
                ))}
              </p>
              <Link href={`/tutors/${tutor.slug.current}`}>
                <a className="btn btn-white w-full">View profile</a>
              </Link>

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
