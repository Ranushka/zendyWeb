import React from 'react'
import { ProfileTabs } from 'components/organisms'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import routs from 'helpers/routs'
import BaseTemplate from './BaseTemplate'

type Props = {
  children?: React.ReactNode
}

const LibraryTemplate: React.FC<Props> = ({ children }) => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  const router = useRouter()

  if (!loading && !session) {
    router.push(routs.login)
  }

  return (
    <BaseTemplate>
      <div className="px-4 max-w-4xl mx-auto min-h pt-10 mb-8">
        <ProfileTabs />
        {children}
      </div>
    </BaseTemplate>
  )
}

export default LibraryTemplate
