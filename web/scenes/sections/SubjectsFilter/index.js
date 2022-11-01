import { useState, useEffect } from 'react'
import client from '~/utils/sanity-client'
import { useRouter } from 'next/router'
import { useGlobalState } from '~/utils/state'
import styles from './style.module.scss'

export const SubjectsFilter = ({ filterDescription: { price, description } = {} }) => {
  const router = useRouter()
  const [levelQuery, setLevelQuery] = useGlobalState('levelQuery', null)
  const [subjectQuery, setSubjectQuery] = useGlobalState('subjectQuery', null)
  const [levelsList, setLevelsList] = useState([])
  const [subjectsList, setSubjectsList] = useState([])

  const query = `{
    'levels': ${
      subjectQuery === null
        ? `*[_type == 'level' && !(_id in path("drafts.**"))] | order(order) {
      ...,
    }`
        : `*[_type == 'subject' && _id == '${subjectQuery?._id}' && !(_id in path("drafts.**"))][0] {
          levels[]->,
        }`
    },
    'subjects': *[_type == 'subject' && !(_id in path("drafts.**"))] | order(lower(title) asc) {
      ...,
      levels[]->,
      tutors[] {
        rating,
        tutor-> {
          _id,
          _rev,
          _type,
          _createdAt,
          _updatedAt,
          slug,
          image,
          name,
          description,
          education,
          position,
          elected,
          'teaches': *[_type == 'subject' && references(^._id)] {
            _id,
            _createdAt,
            title,
            slug,
          },
        }
      }
    }
  }
  `

  useEffect(() => {
    client.fetch(query).then((data) => {
      const { subjects, levels } = data || {}
      setSubjectsList(subjects)
      setLevelsList(subjectQuery === null ? levels : levels.levels)
    })
    if (
      router?.pathname === '/oxbridge' ||
      router?.pathname === '/tutors' ||
      router?.pathname === '/us-college-admissions'
    ) {
      setLevelQuery(null), setSubjectQuery(null)
    }
  }, [subjectQuery])

  const filterHandler = (e) => {
    if (e.target.ariaLabel === 'levels') {
      const currentLevel = levelsList.filter((item) => item._id === e.target.value)[0]
      setLevelQuery(e.target.value !== 'all-levels' ? currentLevel : null)

      let path = ''
      if (currentLevel && subjectQuery) {
        path = `/${currentLevel.slug.current}/${subjectQuery.slug.current}`
      }
      if (currentLevel && !subjectQuery) {
        path = `/${currentLevel.slug.current}`
      }
      if (!currentLevel && subjectQuery) {
        path = `/${subjectQuery.slug.current}`
      }
      if (!currentLevel && !subjectQuery) {
        path = '/tutors'
      }
      router.push(path)
    }

    if (e.target.ariaLabel === 'subjects') {
      const currentSubject = subjectsList.filter((item) => item._id === e.target.value)[0]
      setSubjectQuery(e.target.value !== 'all-levels' ? currentSubject : null)

      const presenceOfLevel = currentSubject?.levels?.filter(({ slug }) => {
        return slug.current === levelQuery?.slug?.current
      })

      let path = ''
      if (currentSubject) {
        path =
          currentSubject?.hasOwnProperty('levels') && presenceOfLevel?.length !== 0
            ? `/${levelQuery.slug.current}/${currentSubject.slug.current}`
            : `/${currentSubject.slug.current}`
      }
      if (!currentSubject && levelQuery) {
        path = `/${levelQuery.slug.current}`
      }
      if (!currentSubject && !levelQuery) {
        path = '/tutors'
      }
      router.push(path)
    }
  }

  return (
    <section className={`filter bg-lightGray pt-3x pb-3x ${styles.filter}`}>
      <div className="container">
        <div className="wrapper flex flex-wrap items-center justify-between">
          <form className="form flex flex-wrap gap-4" onChange={(e) => filterHandler(e)}>
            <label className="label">
              <select
                aria-label="subjects"
                defaultValue={subjectQuery ? subjectQuery._id : 'all-subjects'}
              >
                <option value="all-subjects">All subjects</option>
                {Boolean(subjectsList.length) &&
                  subjectsList.map((item) => {
                    return (
                      <option
                        key={item._id}
                        value={item._id}
                        selected={item._id === subjectQuery?._id}
                      >
                        {item.title}
                      </option>
                    )
                  })}
              </select>
            </label>
            <label className="label">
              <select aria-label="levels" defaultValue={levelQuery ? levelQuery._id : 'all-levels'}>
                <option value="all-levels">All levels</option>
                {Boolean(levelsList?.length) &&
                  levelsList.map((item) => {
                    return (
                      <option
                        key={item._id}
                        value={item._id}
                        selected={item._id === levelQuery?._id}
                      >
                        {item.title}
                      </option>
                    )
                  })}
              </select>
            </label>
          </form>
          <p className="fz-18p">
            <span className="text">{description}</span>
            <span className="label-blue fz-20p l-height-1 fw-700 bg-blue color-white">{price}</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SubjectsFilter
