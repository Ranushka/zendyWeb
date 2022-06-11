import React from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

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

  return <main className="text-gray-600 bg-gray-50 text-sm">{children}</main>
}

export default LoginRegisterTemplate
