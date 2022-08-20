import React from 'react'
import classnames from 'classnames'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { analyticsClickEvent } from 'analytics/events'

/* __DOC

<ActionLink dataName="ResendOTP" text={'Resend OTP'} href={'/authenticate'} type="link__small" />

DOC__ */

type Props = {
  type?: 'link' | 'link__title' | 'link__small'
  icon?: React.ReactNode
  text?: React.ReactNode | string
  title?: string
  href?: string
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

const ActionLink: React.FC<Props> = (props) => {
  const { children } = props

  if (children) {
    return __linkWithChildren(props)
  }

  return __link(props)
}

const __link = (props: Props) => {
  const router = useRouter()
  const {
    text = 'Link text',
    href = '#',
    as,
    type = 'link',
    wrap = false,
    tabIndex = 0,
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

  const handleClick = () => {
    analyticsClickEvent(props)
  }

  if (newWindow) {
    return (
      <a
        data-name={dataName}
        onClick={handleClick}
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
        onClick={handleClick}
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
    tabIndex = 0,
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
    link: classnames(
      'hover:underline decoration-2 underline-offset-2',
      'decoration-sky-500 decoration-amber-400',
      'active:scale-95 duration-150'
    ),
    link__title: classnames(
      'hover:text_pri7 duration-150 text_nut7',
      'inline-block text-gray-700 font-serif',
      'text-xl'
    ),
    link__small: 'text-xs hover:text_pri6 active:scale-95 duration-150',
    btn__small: 'btn__small'
  }

  return types[type] || ''
}

export default ActionLink
