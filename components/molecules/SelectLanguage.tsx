import React from 'react'
import { ActionItem } from 'components/atoms'
import { useRouter } from 'next/router'
import { getDir } from 'lib/helpers'
import classNames from 'classnames'

const SelectLanguage = () => {
  const langPlaceholder = 'Ab عرب සිං'
  const { locale, pathname, asPath, push } = useRouter()
  const [currentLang, setCurrentLang] = React.useState('')

  React.useEffect(() => {
    setCurrentLang(locale)
  }, [locale])

  function onChange(value: string) {
    if (langPlaceholder === value) return

    const newLocal = value
      .split('-')[0]
      .trim()
      .toLowerCase()

    const d = document.documentElement
    const e = getDir(newLocal)

    d.setAttribute('dir', e)

    push(pathname, asPath, { locale: newLocal })
  }

  return (
    <div key="selectLang">
      {['EN - English ', 'AR - عربي ', 'SI - සිංහල '].map((item, key) => {
        const newLocal = item
          .split('-')[0]
          .trim()
          .toLowerCase()

        return (
          <ActionItem
            key={key}
            text={item}
            className={classNames(
              'block py-1 p-1',
              currentLang === newLocal && 'text-orange-700'
            )}
            onClick={() => onChange(item)}
          />
        )
      })}
    </div>
  )
}

export default React.memo(SelectLanguage)
