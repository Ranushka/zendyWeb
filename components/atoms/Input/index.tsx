import React from 'react'
import classnames from 'classnames'

type Props = {
  label?: string
  type?: 'text' | 'search' | 'email' | 'password' | 'number'
  value?: string
  name?: string
  id: string
  required?: boolean
  center?: boolean
  placeholder?: string
  autoFocus?: boolean
  onChange?: React.ChangeEventHandler
  autoComplete?: string
  block?: boolean
  content?: React.ReactNode
}

const Input: React.FC<Props> = ({
  label,
  type = 'text',
  value,
  name,
  id,
  required = false,
  placeholder = '',
  autoFocus,
  onChange,
  center,
  autoComplete,
  block,
  content,
}) => {
  return (
    <div className={classnames('input__wrapper', block && 'block')}>
      {label && (
        <label className="py__1 pt__0" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={center && 'text__center'}
        type={type}
        name={name}
        value={value}
        id={id}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        autoFocus={autoFocus}
        autoComplete={autoComplete || 'off'}
        // accessKey={accessKey}
      />
      {content && content}
    </div>
  )
}

export default Input
