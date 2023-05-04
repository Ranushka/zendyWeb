import React from 'react'
import Image from "next/image"
import { useTranslations } from 'next-intl'
import { ActionBtn } from 'components/atoms'

type Props = {}

const GetStartedWithUs: React.FC<Props> = () => {
  const trans = useTranslations('cta_final')

  return (
    <section className={'container px-5 py-16 text-center'}>
      <div className="relative m-auto max-w-5xl overflow-hidden rounded-xl shadow">
        <Image
          placeholder="empty"
          className="rounded__2"
          alt="water_portrait"
          src="/img/lastCallBackground.png"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover"
          }} />
        <div className="relative py-16 px-4">
          <h2 className="mb-2 font-serif text-3xl">Try Zendy Plus for Free</h2>
          <p className="text-base">{trans('subtitle')}</p>
          <ActionBtn
            dataName="GetStartedWithUs"
            text={trans('btn')}
            href={'#'}
            type="btn__primary"
            className="m-auto mt-4 max-w-xs"
          />
        </div>
      </div>
    </section>
  );
}

export default GetStartedWithUs
