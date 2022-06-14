import React from 'react'
import * as NextLink from 'next/link'
import classnames from 'classnames'
import { useRouter } from 'next/router'

type Props = {
  href: string | Object
  children: React.ReactNode
}

const Tab: React.FC<Props> = ({ children, href }) => {
  const router = useRouter()
  const finalClassNames = classnames(
    'font-serif text-3xl mr-8',
    router.pathname === href && 'text-orange-600'
  )

  return (
    <NextLink.default href={href}>
      <a className={finalClassNames}>{children}</a>
    </NextLink.default>
  )
}

export default Tab
