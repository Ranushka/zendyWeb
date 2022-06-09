import React from 'react'
import classnames from 'classnames'

type Props = {
  label?: string
  name?: string
  checked?: boolean
  id: string
  value?: string
  className?: string
  onChange?: Function
}

const CheckBox: React.FC<Props> = ({
  label,
  name,
  checked = false,
  id,
  value,
  className,
  onChange = () => {}
}) => {
  return (
    <label
      htmlFor={id}
      className={classnames('block cursor-pointer', className && className)}
    >
      <input
        className="sr-only"
        type="checkbox"
        checked={checked}
        name={name}
        id={id}
        value={value}
        onChange={() => onChange()}
      />

      {name && <span className="">{label}</span>}
    </label>
  )
}

export default CheckBox
