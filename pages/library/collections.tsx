import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { ActionLink } from 'components/atoms'
import { IconAdd } from 'components/icons'
import { useCollections } from 'fetchHooks/useCollections'
import LibraryTemplate from 'components/templates/LibraryTemplate'
import LibraryDataRow from 'components/organisms/LibraryDataRow'
import { commonMessages } from 'helpers/getMessages'

const Collections: React.FC = () => {
  const { data } = useCollections()
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  const router = useRouter()

  if (!loading && !session) {
    router.push('/login')
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
      {data.map((item, key) => (
        <LibraryDataRow key={'collection' + key} {...item} />
      ))}

      <div className="px-4">
        <ActionLink
          dataName="CreateNewCollection"
          text={'Create new collection'}
          href={'/'}
          icon={<IconAdd />}
        />
      </div>
    </div>
  )
}

const __skeletonCollection = () => {
  return [1, 2, 3].map((id) => (
    <article key={'skeletonCollection' + id} className="container ml__0 pt-10">
      <Skeleton height={30} />
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
