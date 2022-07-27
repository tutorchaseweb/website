import { useState, useEffect } from 'react'
import client from '~/utils/sanity-client'

import { useGlobalState } from '~/utils/state'
import styles from './style.module.scss'

export const SubjectsFilter = () => {
  const [, setLevelQuery] = useGlobalState('levelQuery', false)
  const [, setSubjectQuery] = useGlobalState('subjectQuery', false)
  const [levelsList, setLevelsList] = useState([])
  const [subjectsList, setSubjectsList] = useState([])
  const query = `
    *[_type in ['level', 'subject']] {
      _type == 'level' => {
        ...,
      },
      _type == 'subject' => {
        ...,
      },
    }
  `
  useEffect(() => {
    client.fetch(query).then((data) => {
      const subjects = data.filter((item) => item._type === 'subject')
      setSubjectsList(subjects)
      console.log(subjects)
      const levels = data.filter((item) => item._type === 'level')
      setLevelsList(levels)
      console.log(levels)
    })
  }, [])

  return (
    <section className={`filter pt-3x pb-3x ${styles.filter}`}>
      <div className="container">
        <div className="flex items-center justify-between">
          <form
            onChange={(e) => {
              const [title, _id] = e.target.value.split('/')
              const obj = { _id, title }
              if (e.target.ariaLabel === 'levels') {
                setLevelQuery(e.target.value !== 'all-levels' ? obj : null)
              }
              if (e.target.ariaLabel === 'subjects') {
                setSubjectQuery(e.target.value !== 'all-subjects' ? obj : null)
              }
            }}
          >
            <label className="mr-2x">
              <select aria-label="subjects" defaultValue="all-subjects">
                <option value="all-subjects">All subjects</option>
                {Boolean(subjectsList.length) &&
                  subjectsList.map((item) => {
                    return (
                      <option key={item._id} value={`${item.title}/${item._id}`}>
                        {item.title}
                      </option>
                    )
                  })}
              </select>
            </label>
            <label className="mr-2x">
              <select aria-label="levels" defaultValue="all-levels">
                <option value="all-levels">All levels</option>
                {Boolean(levelsList.length) &&
                  levelsList.map((item) => {
                    return (
                      <option key={item._id} value={`${item.title}/${item._id}`}>
                        {item.title}
                      </option>
                    )
                  })}
              </select>
            </label>
          </form>
          <p className="fz-18p">
            Fully flexible pay-as-you-go tutoring |
            <span className="label-blue fz-20p l-height-1 fw-700 bg-blue color-white ml-1x">
              From £49/Hour
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SubjectsFilter
