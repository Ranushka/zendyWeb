import React from 'react'
import { useTranslations } from 'next-intl'

type Props = {}

const Desktop: React.FC<Props> = () => {
  const trans = useTranslations('common')

  return (
    <section className="font-serif text-center pt-4 pb-6 md:pb-10 bg_white">
      <div className="mx-6 text_nut5">
        <h3 className="text-xl ">{trans('cta_sub')}</h3>
        <h1 className="text-4xl font-light">{trans('cta')}</h1>
      </div>
    </section>
  )
}

export default Desktop
