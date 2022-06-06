import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ActionItem } from 'components/atoms'

type Props = {}

const GetStartedWithUs: React.FC<Props> = () => {
  const trans = useTranslations('cta_final')

  return (
    <section className={'container px-5 py-10 text-center'}>
      <div className="relative rounded-xl shadow overflow-hidden max-w-5xl m-auto">
        <Image
          placeholder="empty"
          objectFit="cover"
          className="rounded__2"
          layout="fill"
          alt="water_portrait"
          src="/img/lastCallBackground.png"
        />
        <div className="relative py-16 px-4">
          <h2 className="text-3xl font-serif mb-2">{trans('title')}</h2>
          <p>{trans('subtitle')}</p>
          <ActionItem
            text={trans('btn')}
            href={'#'}
            type="btn__primary"
            className="max-w-xs m-auto mt-4"
          />
        </div>
      </div>
    </section>
  )
}

export default GetStartedWithUs
