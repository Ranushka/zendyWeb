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
    <main className="text_nut6 bg_nut0 h-full w-full items-center justify-center text-sm">
      {/* <div className="-mt-10 w-full max-w-md pt-8"> */}
      {/* <Logo /> */}
      {/* <div className="bg_white mx-8 mt-8 rounded-lg p-8 shadow">
          {children}
          <small className="mt-8 block">
            Having issues? <a>support@zendy.io</a>
          </small>
        </div> */}
      {/* </div> */}

      <section className="h-screen">
        <div className="h-full px-6 text-gray-800">
          <div className="flex h-full flex-wrap items-center justify-center md:flex-nowrap md:justify-center">
            <div className="p-8">
              <h4 className="mb-2 font-serif text-lg">
                Why you need an account?
              </h4>
              <div>
                <div>It is FREE and has many benefits</div>
                <div>Keep track of your reading list</div>
                <div>Save your research to collections</div>
                <div>Receive FREE updates every week</div>
                <div>Keep track on your selected topics</div>
                <div>
                  Upgrade to <em>Premium</em> any time
                </div>
              </div>
            </div>
            <div className="mb-12 w-full max-w-md">
              <Logo />
              <div className="bg_white mx-8 mt-8 rounded-lg p-8 shadow">
                {children}
                <small className="mt-8 block">
                  Having issues? <a>support@zendy.io</a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LoginRegisterTemplate
