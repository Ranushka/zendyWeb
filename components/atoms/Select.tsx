import React from 'react'
import classnames from 'classnames'

type Props = {
  label?: string
  name?: string
  small?: boolean
  // dark?: boolean
  id: string
  data?: string[]
  block?: boolean
  className?: string
  value?: string
  onChange?: React.ChangeEventHandler
}

const Select: React.FC<Props> = ({
  label,
  name,
  small,
  // dark,
  id,
  data,
  block,
  value,
  className,
  onChange
}) => {
  return (
    <div
      className={classnames(
        small && 'selectSmall small',
        block && 'block',
        className && className
      )}
    >
      {label && (
        <label htmlFor={id} className="pb-1 pt-4 block">
          {label}
        </label>
      )}

      <select
        className={classnames(
          'h-10 appearance-none w-full bg_nut0 border border_nut4 py-2 px-4 pr-8 rounded-md block',
          small && 'border border_nut3 px-2 py-1 h-8 text-xs'
        )}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
      >
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
