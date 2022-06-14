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
  content
}) => {
  const inputClass = classnames(
    'w-full h-10 rounded-md border border-slate-400 px-4 outline-blue-200 outline-1 outline-offset-4 appearance-none hover:shadow-md active:shadow-md focus:shadow-md',
    center && 'text-center'
  )
  return (
    <div className={classnames(block && 'block')}>
      {label && (
        <label className="pb-1 pt-4 block" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={inputClass}
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
