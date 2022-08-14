import { PortableText } from '@portabletext/react'
import { getImageUrl } from '~/utils/helpers'
import { ILink } from '~/components/Link'
import styles from './style.module.scss'

export const PartOfSection = ({ section, className = '' }) => {
  return (
    <div className={`page-part flex flex-wrap gap-4 items-center ${className} ${styles.section}`}>
      <div className="w-full w-1/2_lg">
        {Boolean(section.image) && (
          <img
            src={`${getImageUrl(section.image.asset._ref).width(650).height(450)}`}
            alt={section.title}
            className="block rounded-small overflow-hidden"
          />
        )}
      </div>
      <div className="w-full w-1/2_lg">
        <div className="text-wrapper ml-12x_lg">
          {Boolean(section.preTitle) && (
            <p className="before-title fw-600 uppercase color-lightGray mb-3x">
              {section.preTitle}
            </p>
          )}
          {Boolean(section.title) && (
            <h2 className="section-title fw-600 mb-4x mx-auto">{section.title}</h2>
          )}
          {Boolean(section.description) && (
            <div className="description l-height-1/5 mb-4x mb-7x_lg">
              <PortableText value={section.description} />
            </div>
          )}
          {Boolean(section.list) && (
            <ul className="ordered-list">
              {section.list.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          )}
          {Boolean(section.button) && <ILink link={section.button} className="btn btn-blue" />}
        </div>
      </div>
    </div>
  )
}

export default PartOfSection
