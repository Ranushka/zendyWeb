import React from 'react'
import { useTranslations } from 'next-intl'
import { ActionBtn, Input, Select } from 'components/atoms'

type Props = {}

const EmailSubscription: React.FC<Props> = () => {
  const trans = useTranslations('subscribe')

  return (
    <section className="bg_white py-16">
      <div className={'m-auto max-w-lg px-4 md:max-w-3xl'}>
        <h2 className="mb-2 font-serif text-3xl">{trans('title')}</h2>
        <p className="mb-4">{trans('subtitle')}</p>

        <form className=" items-center md:flex">
          <Select
            block
            id="primaryInterest"
            name="name"
            data={['Researcher', 'Mathematics']}
          />
          <div className="my-2 block w-full md:mx-4 md:max-w-xs">
            <Input
              id="subscribeEmail"
              placeholder="your@email.com"
              name="name"
              type="email"
              autoComplete="email"
              block
              required
            />
          </div>
          <ActionBtn
            dataName="EmailSubscriptionBtn"
            text={trans('btn')}
            href={'#'}
            type="btn__secondary"
          />
        </form>

        <small className="block pt-2 text-xs">{trans('description')}</small>
      </div>
    </section>
  )
}

export default EmailSubscription
