import React from 'react'
import { useTranslations } from 'next-intl'

import SearchResultsPerPage from 'components/organisms/SearchResultsPerPage'
import SearchResultDensity from 'components/organisms/SearchResultDensity'
import SelectFontSize from 'components/organisms/SelectFontSize'
import SelectTheme from 'components/organisms/SelectTheme'

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
