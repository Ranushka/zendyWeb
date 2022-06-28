import React from 'react'
import get from 'lodash/get'

import { ActionItem, ButtonFab } from 'components/atoms'
import { IconCite, IconBookmark, IconLink } from 'components/icons'

const SearchResultItemActions = ({
  link = [],
  resultId = '',
  downloadLink = ''
}) => {
  const href = get(link, '[0].url')

  return (
    <div key={resultId}>
      <div className="flex justify-around my-4">
        <ButtonFab icon={<IconCite />} small />
        <ButtonFab icon={<IconLink />} small />
        <ButtonFab icon={<IconBookmark />} small />
      </div>

      <ActionItem
        className="mb-4 mt-2"
        text={'Download'}
        onClick={() => window.open(downloadLink)}
        type="btn__secondary"
        block
      />
      <ActionItem
        text="Read"
        href={href}
        onClick={() => window.open(href)}
        type="btn__primary"
        block
      />
    </div>
  )
}

export default SearchResultItemActions
