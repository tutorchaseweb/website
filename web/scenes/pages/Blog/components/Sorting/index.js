export const Sorting = () => {
  return (
    <form>
      <label className="sorting">
        <select
          name="sorting"
          defaultValue="DEFAULT"
          className="p-1x border-light l-height-1 w-full rounded-xSmall"
        >
          <option value="DEFAULT">Sort By</option>
          <option value="new">New</option>
          <option value="old">Old</option>
        </select>
      </label>
    </form>
  )
}

export default Sorting
