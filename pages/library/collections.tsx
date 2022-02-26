import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { Space, ActionItem, ButtonFab } from 'components/atoms'
import { ProfileTabs } from 'components/molecules'
import { IconAdd, IconMore } from 'components/icons'
import { useCollections } from 'fetchHooks/useCollections'
import { BaseTemplate } from 'components/templates'
import { commonMessages } from 'lib/getMessages'

const Collections: React.FC = () => {
  const { data } = useCollections()
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  const router = useRouter()

  if (!loading && !session) {
    router.push('/authenticate')
  }

  return (
    <BaseTemplate>
      <div className="px__3 mw__5 min__h">
        <ProfileTabs />
        {(loading || !data) && __skeletonCollection()}
        {session && data && __dataCollection(data)}
      </div>
    </BaseTemplate>
  )
}

const __dataCollection = (data) => {
  return (
    <div>
      {data.map((item) => __dataRow(item))}

      <Space size={4} />
      <div className="px__3">
        <ActionItem
          text={'Create new collection'}
          href={'/'}
          icon={<IconAdd />}
        />
      </div>
    </div>
  )
}

const __dataRow = ({ id, name, count }) => (
  <div key={id}>
    <div className="px__3 flex flex__between bg__white stage__2 rounded__1">
      <span className="first_letter_caps">{name}</span>
      <div className="flex__left"></div>
      <span>{count}</span>
      <Space size={3} />
      <span>
        <ButtonFab classNames="bg__white" icon={<IconMore />} />
      </span>
    </div>
    <Space size={2} />
  </div>
)

const __skeletonCollection = () => {
  return [1, 2, 3].map((id) => (
    <article key={'skeletonCollection' + id} className="mw__5 ml__0">
      <Skeleton height={30} />
      <Space size={3} />
    </article>
  ))
}

export async function getStaticProps({ locale }) {
  const commonMsg = await commonMessages(locale)

  return {
    props: {
      messages: {
        ...commonMsg,
      },
    },
  }
}

export default Collections
