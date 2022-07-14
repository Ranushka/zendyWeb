import React from 'react'
// import { useTranslations } from 'next-intl'

import { ActionItem } from 'components/atoms'
import routs from 'helpers/routs'

const PremiumPopUpContent = () => {
  // const trans = useTranslations('settings')

  return (
    <div className="px-8 py-8 text-center">
      <h2 className="text-xl mb-4 font-serif">
        Subscribe to get your premium content
      </h2>
      <div className="mb-8">
        You reach the free limit, it is required to activate your subscription.
      </div>
      <div className="inline-block">
        <ActionItem
          dataName="BtnSubscribeToPlan"
          text="Subscribe to a plan"
          href={routs.pricing}
          type="btn__primary"
        />
      </div>
    </div>
  )
}

export default PremiumPopUpContent
