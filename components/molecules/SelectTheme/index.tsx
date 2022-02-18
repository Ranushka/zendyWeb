import React from 'react'
import { Select } from 'components/atoms'
import { applyTheme, saveTheme, getTheme } from 'lib/theme'

type Props = {}

const SelectTheme: React.FC<Props> = () => {
  function onChange(params) {
    const newTheme = params.target.value
    applyTheme(newTheme)
    saveTheme(newTheme)
  }

  return (
    <div className={'noSelect'}>
      <Select
        id="selectTheme"
        name="selectTheme"
        value={getTheme()}
        label={'App theme'}
        className={'mb__0'}
        onChange={(data) => onChange(data)}
        data={['Light', 'Dark', 'Paper']}
      />
    </div>
  )
}

export default SelectTheme
