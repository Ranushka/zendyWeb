import React from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { Logo } from 'components/atoms'

type Props = {
  isSearchPage?: boolean
  children?: React.ReactNode
}

const LoginRegisterTemplate: React.FC<Props> = ({ children }) => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  const router = useRouter()

  if (!loading && session) {
    router.push('/')
  }

  return (
    <main className="text_nut6 bg_nut0 text-sm w-full h-full flex absolute justify-center items-center">
      <div className="max-w-md w-full p-8 -mt-10 bg_white rounded-lg shadow mx-8">
        <Logo />
        {children}
        <small className="block mt-4">
          Having issues? <a>support@zendy.io</a>
        </small>
      </div>
    </main>
  )
}

export default LoginRegisterTemplate
