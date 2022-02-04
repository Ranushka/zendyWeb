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
    icon,
    block,
    submit,
    className,
  } = props

  const finalClassNames = classnames(
    type,
    icon && 'btn__icon',
    block && 'block',
    'pointer',
    className
  )

  const handleClick = () => {
    onClick()
  }

  return (
    <a
      className={finalClassNames}
      onClick={() => handleClick()}
      type={submit ? 'submit' : 'button'}
    >
      {text}
      {icon && icon}
    </a>
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
    className,
    newWindow,
  } = props
  const finalClassNames = classnames(
    type,
    icon && 'btn__icon',
    block && 'block',
    router.pathname === href && 'active',
    className
  )

  if (newWindow) {
    return (
      <a className={finalClassNames} target="_blank" href={href}>
        {text}
        {icon && icon}
      </a>
    )
  }

  return (
    <NextLink href={href} as={as}>
      <a className={finalClassNames}>
        {text}
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
    children,
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

export default ActionItem
