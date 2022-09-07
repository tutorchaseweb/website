import SVG from '~/components/SVG'
import { error } from '~/utils/svgImages'

export const Input = ({
  half = false,
  placeholder = '',
  className = '',
  id = '',
  inputName = 'name',
  type = 'text',
  value,
  setValue = () => null,
  checkValidateValue,
  Errors = [],
  setErrors = () => null,
  title = '',
  style = {},
}) => {
  return (
    <label
      className={`label relative${half ? ' w50' : ''}${Errors.length ? ' error' : ''} ${className}`}
      style={style}
    >
      <span className="fw-500 color-black">{inputName}</span>
      <input
        type={type}
        id={id}
        value={value}
        name={inputName}
        placeholder={placeholder}
        title={title}
        onChange={(e) => {
          setValue(e.target.value)
          if (checkValidateValue) {
            setErrors(checkValidateValue(e.target.value))
          }
        }}
        onBlur={(e) => {
          if (checkValidateValue) {
            checkValidateValue(e.target.value.trim()).length
              ? setErrors(checkValidateValue(e.target.value.trim()))
              : setValue(e.target.value.trim())
          } else {
            setValue(e.target.value.trim())
          }
        }}
        className="p-1x border-light l-height-2 w-full rounded-xSmall"
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
