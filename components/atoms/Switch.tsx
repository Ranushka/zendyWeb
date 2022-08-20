import React from 'react'

/* __DOC

Switch

DOC__ */

type Props = {
  rightLabel: React.ReactNode
  leftLabel: React.ReactNode
  name?: string
  id: string
  checked: boolean
  onChange?: Function
  className?: string
}

const Switch: React.FC<Props> = ({
  rightLabel,
  leftLabel,
  name,
  id,
  checked,
  onChange = () => {},
  className
}) => {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="flex w-full cursor-pointer items-center justify-center"
      >
        {leftLabel}
        <div className="mx-4 flex cursor-pointer items-center">
          <div className="relative">
            <input
              className="sr-only"
              type="checkbox"
              name={name}
              checked={checked}
              id={id}
              onChange={() => onChange()}
            />
            <div className="bg_nut5 block h-6 w-10 rounded-full"></div>
            <div className="dot bg_white absolute left-1 top-1 h-4 w-4 rounded-full transition"></div>
          </div>
        </div>
        {rightLabel}
      </label>
    </div>
  )
}

export default Switch
