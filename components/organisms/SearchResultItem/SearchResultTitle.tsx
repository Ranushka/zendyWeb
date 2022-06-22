import React from 'react'
import striptags from 'striptags'
import { CheckBox, ActionItem } from 'components/atoms'
import { generateTitleUrlPath } from 'lib/helpers'
import IconOa from 'components/icons/IconOa'
import useGlobal from 'context/GlobalContext'

const SearchResultTitle = (
  title = '',
  permanentLinkId,
  publicationType = '',
  publicationYear = '',
  isPremium = false
) => {
  const titleId = generateTitleUrlPath(title, permanentLinkId)
  const [state] = useGlobal()
  const { selectionMode } = state

  return (
    <div className="block">
      {selectionMode && (
        <div className="-ml-9 pl-2 py-2 absolute shadow rounded-md bg_white">
          <CheckBox className={''} id={'it_id' + permanentLinkId} />
        </div>
      )}
      <div className="block">
        <small className="block text_nut5">
          {publicationType} - {publicationYear}{' '}
          {!isPremium && (
            <IconOa className="inline-block h-5 relative -top-1" />
          )}
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
