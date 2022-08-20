import React from 'react'
import classnames from 'classnames'
import { analyticsClickEvent } from 'analytics/events'

/* __DOC

<Chip key="checkbox" id="checkbox" checked onClick={() => {}} text={"some checkbox"} dataName="FilterType" />

DOC__ */

type Props = {
  id?: string | number
  text?: string
  dataName: string
  checked?: boolean
  onClick?: Function
}

const Chip: React.FC<Props> = (props) => {
  const { id, text, dataName, checked = false, onClick = () => {} } = props

  const labelClass = classnames(
    'mb-2 rounded-md cursor-pointer px-2 py-1 mr-2 border',
    checked ? 'bg_pri0 border_pri2' : 'bg_white border_nut2'
  )

  const handleClick = () => {
    analyticsClickEvent(props)
    onClick()
  }

  return (
    <label
      key={id}
      data-name={dataName}
      className={labelClass}
      onClick={handleClick}
    >
      <small> {text} </small>
    </label>
  )
}

export default Chip
