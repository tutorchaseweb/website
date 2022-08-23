import { useState, useEffect } from 'react'
import client from '~/utils/sanity-client'
import { useRouter } from 'next/router'
import { useGlobalState } from '~/utils/state'
import styles from './style.module.scss'

export const SubjectsFilter = () => {
  const router = useRouter()
  const [levelQuery, setLevelQuery] = useGlobalState('levelQuery', null)
  const [subjectQuery, setSubjectQuery] = useGlobalState('subjectQuery', null)
  const [levelsList, setLevelsList] = useState([])
  const [subjectsList, setSubjectsList] = useState([])
  const query = `
    *[_type in ['level', 'subject']] {
      _type == 'level' && !(_id in path("drafts.**")) => {
        ...,
      },
      _type == 'subject' && !(_id in path("drafts.**")) => {
        ...,
      },
    }
  `
  useEffect(() => {
    client.fetch(query).then((data) => {
      const subjects = data.filter((item) => item._type === 'subject')
      setSubjectsList(subjects)
      const levels = data.filter((item) => item._type === 'level')
      setLevelsList(levels)
    })
  }, [])

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
      setSubjectQuery(e.target.value !== 'all-subjects' ? currentSubject : null)
      let path = ''
      if (currentSubject && levelQuery) {
        path = `/${levelQuery.slug.current}/${currentSubject.slug.current}`
      }
      if (currentSubject && !levelQuery) {
        path = `/${currentSubject.slug.current}`
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
                {Boolean(levelsList.length) &&
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
            <span className="text">Fully flexible pay-as-you-go tutoring</span>
            <span className="label-blue fz-20p l-height-1 fw-700 bg-blue color-white">
              From £49/Hour
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SubjectsFilter
