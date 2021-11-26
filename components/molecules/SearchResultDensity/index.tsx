import React from 'react'
import { Select } from 'components/atoms'

type Props = {}

const SearchResultDensity: React.FC<Props> = () => {
  return (
    <div>
      <Select
        id="SearchResultDensity"
        name="name"
        label={'Search result density'}
        className={'mb__0'}
        data={['Compact', 'Detailed', 'Essential']}
      />
    </div>
  )
}

export default SearchResultDensity
