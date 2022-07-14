import React from 'react'
import classNames from 'classnames'
import { ActionItem } from 'components/atoms'
import SearchResultItemTagTitle from 'components/organisms/SearchResultItemTagTitle'

const SearchResultSubjects = ({ subjects = [], all = false }) => {
  if (!subjects?.length) return <></>
  return (
    <div className={classNames('py-1', !all && 'line-clamp-1')}>
      {SearchResultItemTagTitle('Subjects')}
      {subjects
        .slice(0, all ? 20 : 8)
        .map<React.ReactNode>((name, id) => (
          <ActionItem
            dataName="SearchResultSubject"
            key={id}
            text={name}
            as={`/search?subject=${name}`}
            href={`/search?subject=${name}`}
            type="link__small"
            className="text_nut5 first_letter_caps"
          />
        ))
        .reduce((prev, curr) => [prev, ', ', curr])}
    </div>
  )
}

export default SearchResultSubjects
