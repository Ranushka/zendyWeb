import React from 'react'

import { Chip } from 'components/atoms'
import { IconClear } from 'components/icons'
import { Input, ButtonFab, ActionBtn } from 'components/atoms'
import FilterGroupTitle from 'components/organisms/FilterGroupTitle'

const customYearsRange = (setYear) => {
  return (
    <div className="relative">
      <div className="flex__between">
        <span>Custom range</span>
        <ButtonFab
          dataName="CustomYearsRangeBtn"
          href="/search"
          icon={<IconClear />}
          classNames={'pointer rounded'}
          onClick={() => setYear('Any time')}
        />
      </div>
      <div className={'flex'}>
        <Input
          type="number"
          id="year_from"
          name="year_from"
          label={'Year from'}
          placeholder="yyyy"
          required
        />

        <Input
          type="number"
          id="year_to"
          name="year_to"
          label={'Year to'}
          placeholder="yyyy"
          required
        />
      </div>
      <ActionBtn
        dataName="ApplyRange"
        className="bg__nut2"
        text={'Apply range'}
        onClick={() => {}}
        type="btn__small"
        block
      />
    </div>
  )
}

const FilterDateRange: React.FC = () => {
  const [year, setYear] = React.useState('Any time')

  const yearsList = [
    'Any time',
    'from 2021',
    'from 2020',
    '5 years back',
    '10 years back',
    'custom'
  ]

  const customYears = yearsList.map((item, id) => {
    return (
      <Chip
        key={id}
        id={id}
        checked={item === year}
        onClick={() => setYear(item)}
        text={item}
        dataName="YearsRange"
      />
    )
  })

  return (
    <div className="mb-8">
      <FilterGroupTitle title="Year range" />
      <form className="flex flex-wrap">
        {year === 'custom' ? customYearsRange(setYear) : customYears}
      </form>
    </div>
  )
}

export default FilterDateRange
