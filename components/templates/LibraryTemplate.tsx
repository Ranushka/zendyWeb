import React from 'react'
import { ProfileTabs } from 'components/molecules'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import routs from 'lib/routs'
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
      <div className="px-4 container min-h pt-10">
        <ProfileTabs />
        {children}
      </div>
    </BaseTemplate>
  )
}

export default LibraryTemplate
