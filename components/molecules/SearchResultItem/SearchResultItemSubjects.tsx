import React from 'react'
import { ActionItem } from 'components/atoms'
import SearchResultItemTagTitle from './SearchResultItemTagTitle'

const SearchResultItemSubjects = (subjects: [string]) => {
  if (!subjects.length) return <></>
  return (
    <div className="py-1 line-clamp-1">
      {SearchResultItemTagTitle('Subjects')}
      {subjects
        .slice(0, 8)
        .map<React.ReactNode>((name, id) => (
          <ActionItem key={id} text={name} href={'/'} type="link__small" />
        ))
        .reduce((prev, curr) => [prev, ', ', curr])}
    </div>
  )
}

export default SearchResultItemSubjects
