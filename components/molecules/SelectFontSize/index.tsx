import React from 'react'
import { Select } from 'components/atoms'
import { applyFontSize, saveFontSize, getFontSize } from 'lib/fontSize'

type Props = {}

const SelectFontSize: React.FC<Props> = () => {
  function onChange(params) {
    const newFontSize = params.target.value
    applyFontSize(newFontSize)
    saveFontSize(newFontSize)
  }

  return (
    <div className={'noSelect'}>
      <Select
        id="SelectFontSize"
        name="SelectFontSize"
        value={getFontSize()}
        label={'Font size'}
        className={'mb__0'}
        onChange={(data) => onChange(data)}
        data={['Small', 'Medium', 'Larg']}
      />
    </div>
  )
}

export default SelectFontSize
