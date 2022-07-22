import SVG from '~/components/SVG'
import { error } from '~/utils/svgImages'

export const Textarea = ({
  placeholder = '',
  className = '',
  id = '',
  inputName = 'name',
  value,
  setValue,
  checkValidateValue,
  Errors,
  setErrors,
  title = '',
  style = {},
}) => {
  return (
    <label className={`label relative${Errors.length ? ' error' : ''} ${className}`} style={style}>
      <span className="fw-500 color-black">{inputName}</span>
      <textarea
        id={id}
        value={value}
        name={inputName}
        placeholder={placeholder}
        title={title}
        onChange={(e) => {
          setValue(e.target.value)
          setErrors(checkValidateValue(e.target.value))
        }}
        onBlur={(e) => {
          checkValidateValue(e.target.value.trim()).length
            ? setErrors(checkValidateValue(e.target.value.trim()))
            : setValue(e.target.value.trim())
        }}
      />
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
