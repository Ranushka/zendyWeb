import React from 'react'
import { Select } from 'components/atoms'
import { applyTheme, saveTheme, getTheme } from 'lib/theme'

type Props = {}

const SelectTheme: React.FC<Props> = () => {
  const [themeName, setThemeName] = React.useState('')

  React.useEffect(() => {
    setThemeName(getTheme())
  }, [])

  function onChange(params) {
    const newTheme = params.target.value
    setThemeName(newTheme)
    applyTheme(newTheme)
    saveTheme(newTheme)
  }

  return (
    <div className={'noSelect'}>
      <Select
        id="selectTheme"
        name="selectTheme"
        value={themeName}
        label={'App theme'}
        className={'mb__0'}
        onChange={(data) => onChange(data)}
        data={['Light', 'Dark', 'Paper']}
      />
    </div>
  )
}

export default SelectTheme
