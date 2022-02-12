import React from 'react'
import styles from './index.module.scss'

type SortByFilterProps = {
  sortBy: string
  setSortBy: React.Dispatch<React.SetStateAction<string>>
}

const SortByFilter: React.FC<SortByFilterProps> = ({ sortBy, setSortBy }) => {
  const sortBysList = ['Relevance', 'Newest', 'Oldest']
  React.useEffect(() => {
    if (!sortBy) {
      setSortBy('Relevance')
    }
  })

  const customsortBys = sortBysList.map((item, id) => {
    return (
      <label key={id} className={styles.wrapper + ' py__2 px__2 pt__0 pl__0'}>
        <input
          type="radio"
          checked={item === sortBy}
          value={item}
          id={item}
          onChange={() => setSortBy(item)}
          name="filterSortBy"
        />
        <small className="py__1 px__3 block rounded__1 pointer">{item}</small>
      </label>
    )
  })

  return <form className="flex flex__wrap py__2 pb__0">{customsortBys}</form>
}

export default SortByFilter
