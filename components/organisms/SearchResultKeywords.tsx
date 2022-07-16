import React from 'react'
import { ActionLink } from 'components/atoms'
import SearchResultItemTagTitle from 'components/organisms/SearchResultItemTagTitle'
import classNames from 'classnames'

const SearchResultItemKeywords = ({ keywords = [], all = false }) => {
  if (!keywords.length) return <></>

  return (
    keywords && (
      <div className={classNames('py-1 text_nut4', !all && 'line-clamp-1')}>
        {SearchResultItemTagTitle('Keywords')}
        {keywords
          .slice(0, all ? 20 : 8)
          .map<React.ReactNode>((name, id) => (
            <ActionLink
              dataName="keywords"
              key={id}
              text={name}
              href={'/'}
              type="link__small"
              className="text_nut6 ml-2 first_letter_caps"
            />
          ))
          .reduce((prev, curr) => [prev, ',', curr])}
      </div>
    )
  )
}

export default SearchResultItemKeywords
