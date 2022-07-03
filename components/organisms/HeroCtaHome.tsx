import React from 'react'
import { useTranslations } from 'next-intl'

type Props = {}

const Desktop: React.FC<Props> = () => {
  const trans = useTranslations('common')

  return (
    <section className="font-serif text-center my-10">
      <h3 className="text-2xl text_nut5">{trans('cta_sub')}</h3>
      <h1 className="text-4xl">{trans('cta')}</h1>
    </section>
  )
}

export default Desktop
