import { useGlobalState } from '~/utils/state'

import styles from './style.module.scss'

export const Sorting = () => {
  const [, setPostsOrder] = useGlobalState('postsOrder', null)

  return (
    <form className={styles.wrapper}>
      <label className="sorting">
        <select
          name="sorting"
          defaultValue="DEFAULT"
          className="p-1x border-light fw-600 l-height-1 w-full rounded-xSmall"
          onChange={(event) => {
            setPostsOrder(event.target.value === 'DEFAULT' ? null : event.target.value)
          }}
        >
          <option value="DEFAULT">Sort By</option>
          <option value="_createdAt desc">Newest</option>
          <option value="_createdAt asc">Oldest</option>
        </select>
      </label>
    </form>
  )
}

export default Sorting
