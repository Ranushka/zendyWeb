import React from 'react'
import isArray from 'lodash/isArray'
import { useTranslations } from 'next-intl'
import { ActionLink } from 'components/atoms'

export const ExploreList = () => {
  const trans = useTranslations('footer')
  const explore_list = trans.raw('explore_list')

  return (
    isArray(explore_list) &&
    explore_list.map(({ label, path }, key) => {
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
    })
  )
}

export const NewsList = () => {
  const trans = useTranslations('footer')
  const news_list = trans.raw('news_list')

  return (
    isArray(news_list) &&
    news_list.map(({ label, path }, key) => {
      return (
        <React.Fragment key={key}>
          <ActionLink
            dataName="NewsListItem"
            text={label}
            href={path}
            type="link"
            className="block mb-4"
          />
        </React.Fragment>
      )
    })
  )
}

export const PrivacyList = () => {
  const trans = useTranslations('footer')
  const privacy_list = trans.raw('privacy_list')

  return (
    isArray(privacy_list) &&
    privacy_list.map(({ label, path }, key) => {
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
    })
  )
}
