import React from 'react'
import classnames from 'classnames'

/* __DOC

Select

DOC__ */

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
        <label htmlFor={id} className="block pb-1 pt-4">
          {label}
        </label>
      )}

      <select
        className={classnames(
          'bg_nut0 border_nut4 block h-10 w-full appearance-none rounded-md border py-2 pl-3 pr-6',
          small && 'border_nut3 h-8 border px-2 py-1 text-xs'
        )}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
      >
        {data &&
          data.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>
    </div>
  )
}

export default Select
