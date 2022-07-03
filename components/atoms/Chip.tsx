import React from 'react'
import classnames from 'classnames'

type Props = {
  id?: string | number
  label?: string
  checked?: boolean
  onClick?: Function
}

const Chip: React.FC<Props> = ({
  id,
  label,
  checked = false,
  onClick = () => {}
}) => {
  const labelClass = classnames(
    'bg_white border-gray-200 mb-2 rounded-md cursor-pointer px-2 py-1 mr-2 border',
    checked && 'bg_nut2 border-gray-300'
  )

  return (
    <label key={id} className={labelClass} onClick={() => onClick()}>
      <small> {label} </small>
    </label>
  )
}

export default Chip
