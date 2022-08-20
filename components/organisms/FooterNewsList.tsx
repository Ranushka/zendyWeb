import React from 'react'
import { useTranslations } from 'next-intl'
import { ActionLink } from 'components/atoms'

export const FooterNewsList = () => {
  const trans = useTranslations('footer')
  const news_list = trans.raw('news_list')

  if (!Array.isArray(news_list)) return <></>

  return (
    <>
      {news_list.map(({ label, path }, key) => {
        return (
          <React.Fragment key={key}>
            <ActionLink
              dataName="NewsListItem"
              text={label}
              href={path}
              type="link"
              className="mb-4 block"
            />
          </React.Fragment>
        )
      })}
    </>
  )
}

export default FooterNewsList
