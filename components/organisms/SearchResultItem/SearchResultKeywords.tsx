import React from 'react'
import { ActionItem } from 'components/atoms'
import SearchResultItemTagTitle from './SearchResultItemTagTitle'

const SearchResultItemKeywords = (keywords: string) => {
  if (!keywords) return <></>
  return (
    keywords && (
      <div className="py-1 line-clamp-1">
        {SearchResultItemTagTitle('Keywords')}
        {keywords
          .split(',')
          .slice(0, 8)
          .map<React.ReactNode>((name, id) => (
            <ActionItem key={id} text={name} href={'/'} type="link__small" />
          ))
          .reduce((prev, curr) => [prev, ', ', curr])}
      </div>
    )
  )
}

export default SearchResultItemKeywords
