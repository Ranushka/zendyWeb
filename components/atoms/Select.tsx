import React from 'react'
import classnames from 'classnames'

type Props = {
  label?: string
  name?: string
  id: string
  data?: string[]
  block?: boolean
  className?: string
  onChange?: React.ChangeEventHandler
}

const Select: React.FC<Props> = ({
  label,
  name,
  id,
  data,
  block,
  className,
  onChange,
}) => {
  return (
    <div
      className={classnames(
        'input__wrapper',
        block && 'block',
        className && className
      )}
    >
      {label && <label htmlFor={id}>{label}</label>}

      <select id={id} name={name} onChange={onChange}>
        {data.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
