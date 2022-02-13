import React from 'react'
import { useRouter } from 'next/router'

const SortByFilter: React.FC = () => {
  const sortBysList = [
    { name: 'Relevance', value: 'relevance' },
    { name: 'Newest', value: 'date' },
    { name: 'Oldest', value: 'date2' },
  ]

  const router = useRouter()
  const queryString = router.query
  const queryByString = router.query.by || 'relevance'

  const onClick = (item) => {
    router.push({
      pathname: '/search',
      query: { ...queryString, by: item },
    })
  }

  const customsortBys = sortBysList.map((item, id) => {
    const checked = item.value === queryByString

    return (
      <label
        key={id}
        className={`rounded__1 pointer mx__2 my__2 ml__0 mt__0 ${
          checked && 'bg__nut4'
        }`}
        style={{
          border: '1px solid',
          borderColor: 'var(--c-nut4)',
          padding: '4px 12px',
        }}
        onClick={() => onClick(item.value)}
      >
        <small> {item.name} </small>
      </label>
    )
  })

  return <form className="flex flex__wrap py__2 pb__0">{customsortBys}</form>
}

export default SortByFilter
