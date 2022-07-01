import React from 'react'
import { useRouter } from 'next/router'
import FilterGroupTitle from 'components/organisms/FilterGroupTitle'
import FilterItem from 'components/organisms/FilterItem'

const FilterAccessType: React.FC = () => {
  const sortBysList = [
    { name: 'Only open access', value: 'openAccess' },
    { name: 'Only premium', value: 'premium' },
    { name: 'Peer reviewed', value: 'reviewed' },
    { name: 'Results with PDF', value: 'PDF' }
  ]

  const router = useRouter()
  const queryString = router.query
  const queryByString = router.query.access

  const onClick = (item) => {
    router.push({
      pathname: '/search',
      query: { ...queryString, [item]: true }
    })
  }

  const customSortBys = sortBysList.map((item, id) => {
    const checked = item.value === queryByString
    const keyId = 'cusFil' + id

    return (
      <FilterItem
        key={keyId}
        id={keyId}
        checked={checked}
        facetLabel={item.name}
        onClick={() => onClick(item.value)}
      />
    )
  })

  return (
    <div className="mb-8">
      <FilterGroupTitle title="Result type" />
      <form className="flex flex-wrap">{customSortBys}</form>
    </div>
  )
}

export default FilterAccessType
