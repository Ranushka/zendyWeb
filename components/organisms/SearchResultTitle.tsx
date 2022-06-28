import React from 'react'
import striptags from 'striptags'
import { SearchResultItemProps } from 'types'
import { CheckBox, ActionItem } from 'components/atoms'
import { generateTitleUrlPath } from 'lib/helpers'
import IconOa from 'components/icons/IconOa'
import useGlobal from 'context/GlobalContext'

const SearchResultTitle: React.FC<SearchResultItemProps> = (data) => {
  const {
    resultId,
    title,
    publicationYear,
    publicationType,
    isPremium,
    downloadLink
  } = data

  const titleId = generateTitleUrlPath(title, resultId)
  const [state] = useGlobal()
  const { selectionMode } = state

  return (
    <div className="block">
      {selectionMode && (
        <div className="-ml-9 pl-2 py-2 absolute shadow rounded-md bg_white">
          <CheckBox className={''} id={'it_id' + resultId} />
        </div>
      )}
      <div className="block">
        <small className="block text_nut5">
          {publicationType} - {publicationYear}{' '}
          {!isPremium && (
            <IconOa className="inline-block h-5 relative -top-1" />
          )}
          {downloadLink && <span className="font-bold text_nut4">PDF</span>}
        </small>
        <ActionItem
          text={striptags(title.toString())}
          href="/title/[id]"
          as={`/title/${titleId}`}
          type="link__title"
          className="inline-block text-lg text-gray-700 font-serif"
        />
      </div>
    </div>
  )
}

export default SearchResultTitle
