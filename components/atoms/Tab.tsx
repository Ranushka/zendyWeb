import React from 'react'
import * as NextLink from 'next/link'
import classnames from 'classnames'
import { useRouter } from 'next/router'

/* __DOC

<Tab href={'#'}>Tab Content</Tab>

DOC__ */

type Props = {
  href: string | Object
  children: React.ReactNode
}

const Tab: React.FC<Props> = ({ children, href }) => {
  const router = useRouter()
  const finalClassNames = classnames(
    'font-serif text-2xl text-center text-gray-400 w-48',
    router.pathname === href
      ? 'text_pri6 hover:text_pri6 text-4xl'
      : 'hover:text-gray-500'
  )

  return (
    <NextLink.default href={href}>
      <div className={finalClassNames}>{children}</div>
    </NextLink.default>
  )
}

export default Tab
