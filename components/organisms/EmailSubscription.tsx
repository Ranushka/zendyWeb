import React from 'react'
import { useTranslations } from 'next-intl'
import { ActionBtn, Input, Select } from 'components/atoms'

type Props = {}

const EmailSubscription: React.FC<Props> = () => {
  const trans = useTranslations('subscribe')

  return (
    <section className="bg_white py-16">
      <div className={'max-w-3xl px-4 m-auto'}>
        <h2 className="text-3xl font-serif mb-2">{trans('title')}</h2>
        <p className="mb-4">{trans('subtitle')}</p>

        <form className="flex items-center">
          <Select
            block
            id="primaryInterest"
            name="name"
            data={['Researcher', 'Mathematics']}
          />
          <div className="mx-4 block w-full max-w-xs">
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

        <small>{trans('description')}</small>
      </div>
    </section>
  )
}

export default EmailSubscription
