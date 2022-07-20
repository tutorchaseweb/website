import { useRef } from 'react'
import { Dropdown } from '../Dropdown'
import SVG from '~/components/SVG'
import { error } from '~/utils/svgImages'

export const Select = ({
  half = false,
  list,
  selected,
  className = '',
  id = '',
  inputName = 'name',
  checkValidateValue = () => null,
  Errors = [],
  setErrors = () => null,
  setValue = () => null,
}) => {
  const inputRef = useRef()

  const changeCurrentItem = (item) => {
    inputRef.current.value = item.title
    setValue(item)
    setErrors(checkValidateValue(list[0], item))
  }
  return (
    <label
      className={`label relative${half ? ' w50' : ''}${Errors.length ? ' error' : ''} ${className}`}
    >
      <input
        ref={inputRef}
        type="text"
        id={id}
        name={inputName}
        className="hidden"
        style={{ display: 'none' }}
      />
      <span className="fw-500 color-black">{inputName}</span>
      <Dropdown items={list} selected={selected} handler={changeCurrentItem} />
      {Errors.length !== 0 && (
        <span className="error-wrap absolute">
          <SVG content={error()} size={16} />
          <span title={title} className="errors block absolute l-height-1">
            {Errors.map((error) => {
              return (
                <span key={error.type} className="block">
                  {error.message}
                </span>
              )
            })}
          </span>
        </span>
      )}
    </label>
  )
}
