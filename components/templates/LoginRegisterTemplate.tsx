import React from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { Logo } from 'components/atoms'
import IconCheckMark from 'components/icons/IconCheckMark'

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
      <section className="h-screen">
        <div className="h-full px-6">
          <div className="flex h-full flex-wrap items-center justify-center md:flex-nowrap md:justify-center">
            <div className="p-8">
              <ReasonsToSign />
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

const ReasonsToSign = () => {
  const data = [
    {
      title: 'It is FREE, and has many benefits',
      text: 'Save research queries, See history, personalize search'
    },
    {
      title: 'Keep track of your search history',
      text: 'Save research queries, See history, personalize search'
    },
    {
      title: 'Save your research to collections',
      text: 'Save research queries, See history, personalize search'
    },
    {
      title: 'Keep track on your selected topics',
      text: 'Save research queries, See history, personalize search'
    },
    {
      title: 'Easy upgrade to premium',
      text: 'Select your premium publishers pay only for that'
    },
    {
      title: 'Be part of a knowledge creating community',
      text: 'Research is creating new knowledge'
    }
  ]

  return (
    <div>
      <h4 className="text_nut5 mb-2 text-lg">Why you need an account?</h4>
      {data.map(({ title, text }, key) => {
        return (
          <div className="mb-4 flex" key={key}>
            <IconCheckMark className="text_pri6 mr-2 -ml-2 h-8 w-8 scale-125" />
            <div>
              <p className="font-serif text-lg">{title}</p>
              <small className="text_nut5 text-sm">{text}</small>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default LoginRegisterTemplate
