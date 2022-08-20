import React, { ReactNode } from 'react'
import classnames from 'classnames'

/* __DOC

<CheckBox className={''} id={'it_id'} />

DOC__ */

type Props = {
  label?: string | ReactNode
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
      className={classnames(
        'checkbox block cursor-pointer',
        className && className
      )}
    >
      <input
        className="sr-only"
        // className="checkbox form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg_white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        checked={checked}
        name={name}
        id={id}
        value={value}
        onChange={() => onChange()}
      />
      <div className="relative -top-px inline-block pr-2" />
      {name && <span className="">{label}</span>}
    </label>
  )
}

export default CheckBox
