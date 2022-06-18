import React from 'react'
import { useTranslations } from 'next-intl'
import { SelectLanguage } from 'components/molecules'

const LanguagePopUpContent = () => {
  const trans = useTranslations('settings')

  return (
    <div className="px-8 py-8">
      <h2 className="text-xl font-medium mb-4 font-serif">{trans('title')}</h2>
      <SelectLanguage />
    </div>
  )
}

export default LanguagePopUpContent
