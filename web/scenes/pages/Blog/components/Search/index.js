import SVG from '~/components/SVG'
import { magnifier } from '~/utils/svgImages'

export const Search = () => {
  return (
    <form>
      <label className="search relative">
        <SVG content={magnifier()} size={24} />
        <input type="search" placeholder="Search" />
      </label>
    </form>
  )
}

export default Search
