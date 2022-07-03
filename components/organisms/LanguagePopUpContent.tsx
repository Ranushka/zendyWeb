import React from 'react'
import { SelectLanguage } from 'components/organisms'

const LanguagePopUpContent = () => {
  return (
    <div className="px-8 py-8">
      <h2 className="text-xl font-medium mb-4 font-serif">Select language</h2>
      <SelectLanguage />
    </div>
  )
}

export default LanguagePopUpContent
