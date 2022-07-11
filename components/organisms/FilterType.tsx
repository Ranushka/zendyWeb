import React from 'react'
import { useRouter } from 'next/router'
import { Chip } from 'components/atoms'
import FilterGroupTitle from 'components/organisms/FilterGroupTitle'

const FilterType: React.FC = () => {
  const sortBysList = [
    { name: 'Relevance', value: 'relevance' },
    { name: 'Newest', value: 'date' },
    { name: 'Oldest', value: 'date2' }
  ]

  const router = useRouter()
  const queryString = router.query
  const queryByString = router.query.by || 'relevance'

  const onClick = (item) => {
    router.push({
      pathname: '/search',
      query: { ...queryString, by: item }
    })
  }

  const customSortBys = sortBysList.map((item, id) => {
    const checked = item.value === queryByString

    return (
      <Chip
        key={id}
        id={id}
        checked={checked}
        onClick={() => onClick(item.value)}
        text={item.name}
        dataName="FilterType"
      />
    )
  })

  return (
    <div className="mb-8">
      <FilterGroupTitle title="Sort by" />
      <form className="flex flex-wrap">{customSortBys}</form>
    </div>
  )
}

export default FilterType
