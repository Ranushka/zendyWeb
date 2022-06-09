import React from 'react'
import { Chip } from 'components/atoms'
import { IconClear } from 'components/icons'
import { Space, Input, ButtonFab, ActionItem } from 'components/atoms'

type SortByFilterProps = {
  year: string
  setYear: React.Dispatch<React.SetStateAction<string>>
}

const SortByFilter: React.FC<SortByFilterProps> = ({ year, setYear }) => {
  const yearsList = [
    'Any time',
    'from 2021',
    'from 2020',
    '5 years back',
    '10 years back',
    'custom'
  ]
  React.useEffect(() => {
    if (!year) {
      setYear('Any time')
    }
  })

  const customYears = yearsList.map((item, id) => {
    return (
      <Chip
        key={id}
        id={id}
        checked={item === year}
        onClick={() => setYear(item)}
        label={item}
      />
    )
  })

  const customYearsRange = (
    <div className="relative">
      <div className="flex__between">
        <span>Custom range</span>
        <ButtonFab
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
        <Space size={4} />
        <Input
          type="number"
          id="year_to"
          name="year_to"
          label={'Year to'}
          placeholder="yyyy"
          required
        />
      </div>
      <ActionItem
        className="bg__nut2"
        text={'Apply range'}
        onClick={() => {}}
        type="btn__small"
        block
      />
    </div>
  )

  return (
    <form className="flex flex-wrap">
      {year === 'custom' ? customYearsRange : customYears}
    </form>
  )
}

export default SortByFilter
