import React from 'react'
import { useTranslations } from 'next-intl'
import { ActionLink } from 'components/atoms'

const FooterPrivacyList = () => {
  const trans = useTranslations('footer')
  const privacy_list = trans.raw('privacy_list')

  if (!Array.isArray(privacy_list)) return <></>

  return (
    <>
      {privacy_list?.map(({ label, path }, key) => {
        return (
          <React.Fragment key={key}>
            <ActionLink
              dataName="PrivacyListItem"
              text={label}
              href={path}
              type="link__small"
              className="mr-3"
            />
          </React.Fragment>
        )
      })}
    </>
  )
}

export default FooterPrivacyList
