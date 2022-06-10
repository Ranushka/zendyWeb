import React from 'react'
import classnames from 'classnames'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

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
  href?: string
  onClick?: Function
  as?: string
  className?: string | object
  newWindow?: boolean
  block?: boolean
  submit?: boolean
  disabled?: boolean
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
    onClick = () => {},
    type,
    style,
    icon,
    block,
    submit,
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
    onClick()
  }

  return (
    <button
      style={style}
      className={finalClassNames}
      onClick={() => handleClick()}
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
    icon,
    block,
    disabled,
    className,
    newWindow
  } = props

  const finalClassNames = classnames(
    getType(type),
    icon && 'inline-flex whitespace-nowrap',
    block && 'block',
    router.pathname === href && 'active',
    disabled ? 'disabled' : 'pointer',
    disabled && 'mute',
    className
  )

  if (newWindow) {
    return (
      <a
        className={finalClassNames}
        target="_blank"
        href={href}
        rel="noreferrer"
      >
        {text}
        {icon && icon}
      </a>
    )
  }

  return (
    <NextLink href={href} as={as}>
      <a className={finalClassNames}>
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
    block,
    className,
    children
  } = props
  const finalClassNames = classnames(type, block && 'block', className)

  return (
    <NextLink href={href} as={as}>
      <a aria-label="Get Help" className={finalClassNames}>
        {children}
      </a>
    </NextLink>
  )
}

const getType = (type) => {
  const types = {
    link:
      'whitespace-nowrap hover:text-orange-600 active:text-orange-600 duration-150',
    link__title:
      'text-gray-700 hover:text-orange-600 active:text-orange-500 duration-150',
    link__small:
      'text-xs hover:text-orange-500 active:text-orange-500 duration-150',
    btn__small: 'btn__small',
    btn__default:
      'py-2 px-3 rounded-md flex items-center duration-300 active:bg-orange-100',
    btn__secondary:
      'border py-2 px-3 rounded-md flex justify-center duration-300 shadow-sm hover:shadow-md active:shadow-md border-orange-500 bg-orange-50 active:bg-orange-100 text-orange-600',
    btn__primary:
      'border py-2 px-3 rounded-md flex justify-center duration-300 shadow-md active:shadow-sm tracking-wide text-base uppercase border-orange-600 text-orange-50 bg-orange-600 active:bg-orange-700'
  }

  return types[type] || ''
}

export default ActionItem
