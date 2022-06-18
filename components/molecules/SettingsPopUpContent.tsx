import React from 'react'
import { useTranslations } from 'next-intl'

import SearchResultsPerPage from 'components/molecules/SearchResultsPerPage'
import SearchResultDensity from 'components/molecules/SearchResultDensity'
import SelectFontSize from 'components/molecules/SelectFontSize'
import SelectTheme from 'components/molecules/SelectTheme'

const SettingsPopUpContent = () => {
  const trans = useTranslations('settings')

  return (
    <div className="px-8 py-8">
      <h2 className="text-xl font-medium mb-4 font-serif">{trans('title')}</h2>

      <SelectTheme />
      <SelectFontSize />
      <SearchResultDensity />
      <SearchResultsPerPage />
    </div>
  )
}

export default SettingsPopUpContent
