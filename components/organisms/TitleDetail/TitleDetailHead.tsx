import React from 'react'
import classnames from 'classnames'
import Router from 'next/router'
import {
  IconSocialLinkedIn,
  IconSocialTwitter,
  IconSocialFacebook
} from 'components/icons'
import { ActionItem, ButtonFab } from 'components/atoms'

const TitleDetailHead = () => {
  return (
    <div className={classnames('flex items-center')}>
      <ActionItem
        text={'← Back to results'}
        onClick={() => Router.back()}
        type="link__small"
        className="pl__0"
      />

      <span className="flex__left" />
      <ButtonFab icon={<IconSocialFacebook />} small />
      <ButtonFab icon={<IconSocialLinkedIn />} small />
      <ButtonFab icon={<IconSocialTwitter />} small />
    </div>
  )
}

export default TitleDetailHead
