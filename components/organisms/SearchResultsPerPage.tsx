import React from 'react'
import { Select } from 'components/atoms'

type Props = {}

const SearchResultsPerPage: React.FC<Props> = () => {
  return (
    <div>
      <Select
        id="SearchResultsPerPage"
        name="name"
        label={'Search results per page'}
        data={['10', '20', '50', '100']}
      />
    </div>
  )
}

export default SearchResultsPerPage
