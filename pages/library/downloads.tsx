import React from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { Space, ButtonFab } from 'components/atoms'
import { ProfileTabs } from 'components/molecules'
import { IconMore } from 'components/icons'
import { BaseTemplate } from 'components/templates'
import { commonMessages } from 'lib/getMessages'

type DataRowProps = {
  id: number
  name: string
}

const Downloads: React.FC = () => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  const router = useRouter()

  if (!loading && !session) {
    router.push('/authenticate')
  }

  return (
    <BaseTemplate>
      <div className="px-4 mw__5 min-h">
        <ProfileTabs />
        {dataSet.map((data: DataRowProps) => __dataRow(data))}
      </div>
    </BaseTemplate>
  )
}

const __dataRow = ({ id, name }: DataRowProps) => (
  <div key={id}>
    <div className="px-4 py-4 flex flex__between bg-white shadow rounded-md">
      <span className="first_letter_caps">{name}</span>
      <div className="flex__left"></div>

      <Space size={3} />
      <span>
        <ButtonFab classNames="bg-white" icon={<IconMore />} />
      </span>
    </div>
    <Space size={2} />
  </div>
)

const dataSet = [
  {
    id: 23,
    name:
      'optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut'
  },
  {
    id: 24,
    name: 'dolore veritatis porro provident adipisci blanditiis et sunt'
  },
  {
    id: 25,
    name: 'quaerat velit veniam amet cupiditate aut numquam ut sequi'
  }
]

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

export default Downloads
