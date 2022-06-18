import React from 'react'
import striptags from 'striptags'
import { CheckBox, ActionItem } from 'components/atoms'
import { generateTitleUrlPath } from 'lib/helpers'
import useGlobal from 'context/GlobalContext'

const SearchResultItemTitle = (
  title = '',
  permanentLinkId,
  publicationType = '',
  publicationYear = ''
) => {
  const titleId = generateTitleUrlPath(title, permanentLinkId)
  const [state] = useGlobal()
  const { selectionMode } = state

  return (
    <div className="block">
      {selectionMode && (
        <div className="-ml-9 pl-2 py-2 absolute shadow rounded-md bg-white">
          <CheckBox className={''} id={'it_id' + permanentLinkId} />
        </div>
      )}
      <div className="block">
        <small className="block text-gray-500">
          {publicationType} - {publicationYear}
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

export default SearchResultItemTitle
