import React from 'react'

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
        className="flex items-center justify-center w-full cursor-pointer"
      >
        {leftLabel}
        <div className="flex items-center cursor-pointer mx-4">
          <div className="relative">
            <input
              className="sr-only"
              type="checkbox"
              name={name}
              checked={checked}
              id={id}
              onChange={() => onChange()}
            />
            <div className="block bg-gray-500 w-10 h-6 rounded-full"></div>
            <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
          </div>
        </div>
        {rightLabel}
      </label>
    </div>
  )
}

export default Switch
