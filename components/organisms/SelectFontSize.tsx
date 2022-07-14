import React from 'react'
import { useTranslations } from 'next-intl'
import { Select } from 'components/atoms'
import { applyFontSize, saveFontSize, getFontSize } from 'helpers/fontSize'

type Props = {}

const SelectFontSize: React.FC<Props> = () => {
  const trans = useTranslations('settings')
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
        label={trans('select_size')}
        onChange={(data) => onChange(data)}
        data={['Small', 'Medium', 'Larg']}
      />
    </div>
  )
}

export default React.memo(SelectFontSize)
