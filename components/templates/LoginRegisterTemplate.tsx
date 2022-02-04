import React, { useContext } from 'react'
import classnames from 'classnames'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import DeviceTypeContext from 'context/DeviceTypeContext'

type Props = {
  isSearchPage?: boolean
  children?: React.ReactNode
}

const LoginRegisterTemplate: React.FC<Props> = ({ children }) => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  const router = useRouter()

  console.log(session)
  if (!loading && session) {
    router.push('/')
  }

  const { isMobile } = useContext(DeviceTypeContext)
  const finalClassNames = classnames(
    'bg__nut1',
    isMobile ? 'contain__mobile' : 'contain__desktop'
  )

  return <main className={finalClassNames}>{children}</main>
}

export default LoginRegisterTemplate
