import React from 'react'
// import { ActionItem } from 'components/atoms'
import SearchResultItemTagTitle from 'components/organisms/SearchResultItemTagTitle'
import classNames from 'classnames'

const SearchResultItemKeywords = ({ keywords = [], all = false }) => {
  if (!keywords.length) return <></>

  return (
    keywords && (
      <div className={classNames('py-1', !all && 'line-clamp-1')}>
        {SearchResultItemTagTitle('Keywords')}
        {keywords
          .slice(0, all ? 20 : 8)
          .map<React.ReactNode>((name, id) => (
            <small key={id} className="text-xs text_nut5 first_letter_caps">
              {name}
            </small>
            // <ActionItem
            //   key={id}
            //   text={name}
            //   href={'/'}
            //   type="link__small"
            //   className="text_nut5"
            // />
          ))
          .reduce((prev, curr) => [prev, ', ', curr])}
      </div>
    )
  )
}

export default SearchResultItemKeywords
