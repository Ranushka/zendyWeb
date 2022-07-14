import React from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { ButtonFab } from 'components/atoms'
import { IconMore } from 'components/icons'
import LibraryTemplate from 'components/templates/LibraryTemplate'
import { commonMessages } from 'helpers/getMessages'
import routs from 'helpers/routs'

const Searches: React.FC = () => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  const router = useRouter()

  if (!loading && !session) {
    router.push(routs.login)
  }

  return (
    <LibraryTemplate>{dataSet.map((data) => __dataRow(data))}</LibraryTemplate>
  )
}

const __dataRow = ({ id, name, keyWord, filters }) => (
  <div key={id}>
    <div className="px-4 py-4 flex flex__between bg_white shadow rounded-md">
      <div className="first_letter_caps">
        <h3>{name}</h3>
        <div>
          Search for <strong>{keyWord}</strong> as Keyword. Filtered on{' '}
          {__appliedFilters(filters)}. Sorted by relevance.
        </div>
      </div>
      <span>
        <ButtonFab
          dataName="KeywordMore"
          classNames="bg_white"
          icon={<IconMore />}
        />
      </span>
    </div>
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
    filters: ['Books', 'journals']
  },
  {
    id: 13,
    name: 'Trending on micro services',
    keyWord: 'micro services node js',
    filters: ['journals']
  },
  {
    id: 14,
    name: 'Saved search name',
    keyWord: 'car',
    filters: ['Books']
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

export default Searches
