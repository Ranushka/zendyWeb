import React from 'react'
import { useTranslations } from 'next-intl'
import { Select } from 'components/atoms'
import { applyTheme, saveTheme, getTheme } from 'lib/theme'
import { useRouter } from 'next/router'
import { getDir } from 'lib/helpers'

const SelectLanguage = () => {
  const trans = useTranslations('settings')
  const langPlaceholder = 'Ab عرب සිං'
  const { locale, pathname, asPath, push } = useRouter()
  const [currentLang, setCurrentLang] = React.useState('')

  React.useEffect(() => {
    setCurrentLang(locale)
  }, [locale])

  function onChange(evt) {
    const value = evt.target.value
    if (langPlaceholder === value) return

    const newLocal = value.split('-')[0].trim().toLowerCase()

    const d = document.documentElement
    const e = getDir(newLocal)

    d.setAttribute('dir', e)

    push(pathname, asPath, { locale: newLocal })
  }

  return (
    <div key="selectLang">
      <Select
        label={trans('select_lang')}
        id="selectLang"
        name="selectLang"
        value={currentLang}
        className={'mb__0 color__white'}
        onChange={(evt) => onChange(evt)}
        data={[langPlaceholder, 'EN - English ', 'AR - عربي ', 'SI - සිංහල ']}
      />
    </div>
  )
}

export default React.memo(SelectLanguage)
