import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ProfilePage } from 'components/organisms'
import { BaseTemplate } from 'components/templates'

export default function Home() {
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
