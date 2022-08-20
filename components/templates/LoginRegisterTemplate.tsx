import React from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { Logo } from 'components/atoms'

/* __DOC

LoginRegisterTemplate

DOC__ */

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
    <main className="text_nut6 bg_nut0 absolute flex h-full w-full items-center justify-center text-sm">
      <div className="-mt-10 w-full max-w-md pt-8">
        <Logo />
        <div className="bg_white mx-8 mt-8 rounded-lg p-8 shadow">
          {children}
          <small className="mt-8 block">
            Having issues? <a>support@zendy.io</a>
          </small>
        </div>
      </div>
    </main>
  )
}

export default LoginRegisterTemplate
