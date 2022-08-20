import React from 'react'
import { useTranslations } from 'next-intl'
import { ActionLink } from 'components/atoms'

const FooterExploreList = () => {
  const trans = useTranslations('footer')
  const explore_list = trans.raw('explore_list')

  if (!Array.isArray(explore_list)) return <></>

  return (
    <>
      {explore_list.map(({ label, path }, key) => {
        return (
          <React.Fragment key={key}>
            <ActionLink
              dataName="ExploreListItem"
              text={label}
              href={path}
              type="link"
              className="inline-block pr-4 pb-3"
            />
          </React.Fragment>
        )
      })}
    </>
  )
}

export default FooterExploreList
