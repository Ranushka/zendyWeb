import React from 'react'
import classnames from 'classnames'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { analyticsClickEvent } from 'analytics/events'

type Props = {
  type?:
    | 'link'
    | 'link__title'
    | 'link__small'
    | 'btn__small'
    | 'btn__default'
    | 'btn__secondary'
    | 'btn__primary'
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
  submit?: boolean
  disabled?: boolean
  wrap?: boolean
  tabIndex?: number
  style?: React.CSSProperties
  children?: React.ReactChild
}

const ActionItem: React.FC<Props> = (props) => {
  const { onClick, children } = props

  if (onClick) {
    return __btn(props)
  }

  if (children) {
    return __linkWithChildren(props)
  }

  return __link(props)
}

const __btn = (props: Props) => {
  const {
    text = 'Button text',
    title = '',
    onClick = () => {},
    dataName,
    type,
    style,
    icon,
    block,
    submit,
    tabIndex = 1,
    disabled,
    className
  } = props

  const finalClassNames = classnames(
    getType(type),
    icon && 'inline-flex whitespace-nowrap',
    block && 'w-full',
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
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  )
}

const __link = (props: Props) => {
  const router = useRouter()
  const {
    text = 'Link text',
    href = '#',
    as,
    type = 'link',
    wrap = false,
    tabIndex = 1,
    icon,
    block,
    disabled,
    className,
    dataName,
    newWindow
  } = props

  const finalClassNames = classnames(
    getType(type),
    icon && 'inline-flex whitespace-nowrap',
    block && 'block',
    router.pathname === href && 'active',
    disabled ? 'disabled' : 'pointer',
    disabled && 'mute',
    wrap && 'whitespace-nowrap',
    className
  )

  if (newWindow) {
    return (
      <a
        data-name={dataName}
        onClick={() => analyticsClickEvent(props)}
        className={finalClassNames}
        target="_blank"
        href={href}
        tabIndex={tabIndex}
        rel="noreferrer"
      >
        {text}
        {icon && icon}
      </a>
    )
  }

  return (
    <NextLink href={href} as={as}>
      <a
        data-name={dataName}
        className={finalClassNames}
        tabIndex={tabIndex}
        onClick={() => analyticsClickEvent(props)}
      >
        <span>{text}</span>
        {icon && icon}
      </a>
    </NextLink>
  )
}

const __linkWithChildren = (props: Props) => {
  const {
    href = '#',
    as,
    type = 'link__content',
    dataName,
    block,
    tabIndex = 1,
    className,
    children
  } = props
  const finalClassNames = classnames(type, block && 'block', className)

  return (
    <NextLink href={href} as={as}>
      <a
        aria-label="Get Help"
        className={finalClassNames}
        tabIndex={tabIndex}
        data-name={dataName}
        onClick={() => analyticsClickEvent(props)}
      >
        {children}
      </a>
    </NextLink>
  )
}

const getType = (type) => {
  const types = {
    link: 'hover:text_pri6 active:scale-95 duration-150',
    link__title: 'hover:text_pri6 duration-150 text_nut7',
    link__small: 'text-xs hover:text_pri6 active:scale-95 duration-150',
    btn__small: 'btn__small',
    btn__default: classnames(
      'py-2 px-3 rounded-md flex items-center',
      'duration-300 active:bg_pri1 active:scale-95'
    ),
    btn__secondary: classnames(
      'outline-1 outline-offset-2',
      'border py-2 px-3 rounded-md flex justify-center duration-300',
      'shadow-sm hover:shadow active:shadow-none',
      'border_pri1 bg_pri0 active:scale-95 text_pri7'
    ),
    btn__primary: classnames(
      'outline-1 outline-offset-2 border border_pri7',
      'py-2 px-3 rounded-md flex justify-center duration-300 uppercase',
      'shadow-md active:shadow-sm tracking-wide',
      'bg_pri7 active:bg_pri8 active:scale-95 text_pri0'
    )
  }

  return types[type] || ''
}

export default ActionItem
