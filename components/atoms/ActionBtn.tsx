import React from 'react'
import classnames from 'classnames'
import { analyticsClickEvent } from 'analytics/events'

/* __DOC

<ActionBtn dataName="advanceSearch" text="Search" href={'#'} type="btn__primary" className="ml-2" />

DOC__ */

type Props = {
  type?: 'btn__small' | 'btn__default' | 'btn__secondary' | 'btn__primary'
  icon?: React.ReactNode
  text?: React.ReactNode | string
  title?: string
  href?: string
  onClick?: Function
  as?: string
  dataName: string
  className?: string | object
  newWindow?: boolean
  block?: boolean
  bold?: boolean
  submit?: boolean
  disabled?: boolean
  wrap?: boolean
  tabIndex?: number
  style?: React.CSSProperties
  children?: React.ReactChild
}

const ActionBtn: React.FC<Props> = (props) => {
  const {
    text = 'Button text',
    title = '',
    onClick = () => {},
    dataName,
    type,
    style,
    icon,
    block,
    bold,
    submit,
    tabIndex = 0,
    disabled,
    className
  } = props

  const finalClassNames = classnames(
    getType(type),
    icon && 'inline-flex whitespace-nowrap',
    block && 'w-full',
    bold && 'font-bold',
    disabled ? 'disabled' : 'pointer',
    className
  )

  const handleClick = () => {
    analyticsClickEvent(props)
    onClick()
  }

  return (
    <button
      title={title}
      style={style}
      tabIndex={tabIndex}
      className={finalClassNames}
      onClick={() => handleClick()}
      data-name={dataName}
      type={submit ? 'submit' : 'button'}
    >
      {text}
      {icon && <span className="h ml-2">{icon}</span>}
    </button>
  )
}

const getType = (type) => {
  const types = {
    btn__small: 'text-xs hover:text_pri6',
    btn__default: classnames(
      'py-2 px-3 rounded-md flex items-center',
      'duration-300 hover:bg_pri1 active:bg_pri1 active:scale-95'
    ),
    btn__secondary: classnames(
      'outline-1 outline-offset-2 text-base items-center',
      'border py-2 px-4 rounded-md flex justify-center duration-300',
      'shadow-sm hover:shadow active:shadow-none',
      'border_pri2 bg_pri0 active:scale-95 text_nut6'
    ),
    btn__primary: classnames(
      'flex items-center justify-center',
      'outline-1 outline-offset-2 font-bold text-base',
      'py-2 px-4 leading-relaxed rounded-md  duration-300 l',
      'shadow-md active:shadow-sm tracking-wide',
      'bg_pri5 active:bg_pri6 active:scale-95 text_pri9'
    )
  }

  return types[type] || ''
}

export default ActionBtn
