import styles from './style.module.scss'

export const SubjectsFilter = () => {
  return (
    <section className={`filter pt-3x pb-3x ${styles.filter}`}>
      <div className="container">
        <div className="flex items-center justify-between">
          <form>
            <label className="mr-2x">
              <select>
                <option value="unselected" selected disabled>
                  Select subject
                </option>
              </select>
            </label>
            <label className="mr-2x">
              <select>
                <option value="all-levels" selected>
                  All levels
                </option>
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
