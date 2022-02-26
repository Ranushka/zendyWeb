import React from 'react'
import { Select } from 'components/atoms'
import { applyFontSize, saveFontSize, getFontSize } from 'lib/fontSize'

type Props = {}

const SelectFontSize: React.FC<Props> = () => {
  const [size, setSize] = React.useState('')

  React.useEffect(() => {
    setSize(getFontSize())
  }, [])

  function onChange(params) {
    const newFontSize = params.target.value
    setSize(newFontSize)
    applyFontSize(newFontSize)
    saveFontSize(newFontSize)
  }

  return (
    <div className={'noSelect'}>
      <Select
        id="SelectFontSize"
        name="SelectFontSize"
        value={size}
        label={'Font size'}
        className={'mb__0'}
        onChange={(data) => onChange(data)}
        data={['Small', 'Medium', 'Larg']}
      />
    </div>
  )
}

export default SelectFontSize
