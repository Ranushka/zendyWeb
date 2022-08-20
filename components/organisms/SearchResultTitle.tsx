import React from 'react'
import striptags from 'striptags'
import { SearchResultItemProps } from 'types'
import { CheckBox, ActionLink } from 'components/atoms'
import { generateTitleUrlPath } from 'helpers/utils'
import IconOa from 'components/icons/IconOa'
import useGlobal from 'context/GlobalContext'

/* __DOC

SearchResultTitle

DOC__ */

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
  const [{ selectionMode }] = useGlobal()

  return (
    <div className="block">
      {selectionMode && (
        <div className="bg_white absolute -ml-9 rounded-md py-2 pl-2 shadow">
          <CheckBox className={''} id={'it_id' + resultId} />
        </div>
      )}
      <div className="block">
        <small className="text_nut5 block">
          {publicationType} - {publicationYear}
          {!isPremium && (
            <IconOa className="relative -top-1 inline-block h-5" />
          )}
          {downloadLink && <span className="text_nut4 font-bold">PDF</span>}
        </small>
        <ActionLink
          dataName="SearchResultTitle"
          text={striptags(title?.toString())}
          href="/title/[id]"
          as={`/title/${titleId}`}
          type="link__title"
          className="inline-block font-serif text-gray-700"
        />
      </div>
    </div>
  )
}

export default SearchResultTitle
