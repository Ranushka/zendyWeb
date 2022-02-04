import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import { Space, ButtonFab } from 'components/atoms'
import { ProfileTabs } from 'components/molecules'
import { IconMore } from 'components/icons'
import { BaseTemplate } from 'components/templates'

const Searches = () => {
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
        <div>{dataSet.map((data) => __dataRow(data))}</div>
        <Space size={4} />
      </div>
    </BaseTemplate>
  )
}

const __dataRow = ({ id, name, keyWord, filters }) => (
  <div key={id}>
    <div className="px__3 py__3 flex flex__between bg__white stage__2 rounded__1">
      <div className="first_letter_caps">
        <h3>{name}</h3>
        <Space size={2} />
        <div>
          Search for <strong>{keyWord}</strong> as Keyword. Filtered on{' '}
          {__appliedFilters(filters)}. Sorted by relevance.
        </div>
      </div>
      <Space size={3} />
      <span>
        <ButtonFab classNames="bg__white" icon={<IconMore />} />
      </span>
    </div>
    <Space size={2} />
  </div>
)

const __appliedFilters = (filters: [string]) => {
  const data: Array<any> = filters.map((data: string, id: number) => (
    <span key={id}>{data}</span>
  ))

  return data.reduce((pv, cv) => [pv, ', ', cv], 0)
}

const dataSet = [
  {
    id: 12,
    name: 'Saved search name',
    keyWord: 'car',
    filters: ['Books', 'journals'],
  },
  {
    id: 13,
    name: 'Trending on micro services',
    keyWord: 'micro services node js',
    filters: ['journals'],
  },
  {
    id: 14,
    name: 'Saved search name',
    keyWord: 'car',
    filters: ['Books'],
  },
]

export default Searches
