import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ProfilePage } from 'components/organisms'
import { BaseTemplate } from 'components/templates'
import { commonMessages } from 'lib/getMessages'

const Profile: React.FC = () => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  const router = useRouter()

  if (!loading && !session) {
    router.push('/')
  }

  return (
    <BaseTemplate>
      <ProfilePage />
    </BaseTemplate>
  )
}

export async function getStaticProps({ locale }) {
  const commonMsg = await commonMessages(locale)

  return {
    props: {
      messages: {
        ...commonMsg
      }
    }
  }
}

export default Profile
