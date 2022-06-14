import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { Space, ActionItem, ButtonFab } from 'components/atoms'
import { IconAdd, IconMore } from 'components/icons'
import { useCollections } from 'fetchHooks/useCollections'
import { LibraryTemplate } from 'components/templates'
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
    <LibraryTemplate>
      {(loading || !data) && __skeletonCollection()}
      {session && data && __dataCollection(data)}
    </LibraryTemplate>
  )
}

const __dataCollection = (data) => {
  return (
    <div>
      {data.map((item) => __dataRow(item))}

      <div className="px-4">
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
    <div className="px-4 flex bg-white shadow rounded-md">
      <span className="first_letter_caps">{name}</span>
      <div className="flex__left"></div>
      <span>{count}</span>
      <Space size={3} />
      <span>
        <ButtonFab classNames="bg-white" icon={<IconMore />} />
      </span>
    </div>
    <Space size={2} />
  </div>
)

const __skeletonCollection = () => {
  return [1, 2, 3].map((id) => (
    <article key={'skeletonCollection' + id} className="container ml__0 pt-10">
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
        ...commonMsg
      }
    }
  }
}

export default Collections
