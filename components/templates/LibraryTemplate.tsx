import React from 'react'
import { ProfileTabs } from 'components/organisms'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import routs from 'helpers/routs'
import BaseTemplate from './BaseTemplate'

/* __DOC

LibraryTemplate

DOC__ */

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
      <div className="min-h mx-auto mb-8 max-w-4xl px-4 pt-10">
        <ProfileTabs />
        {children}
      </div>
    </BaseTemplate>
  )
}

export default LibraryTemplate
