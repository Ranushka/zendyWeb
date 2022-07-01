import React from 'react'
import get from 'lodash/get'
import { useSession } from 'next-auth/react'

import useGlobal from 'context/GlobalContext'
import { ActionItem, ButtonFab } from 'components/atoms'
import { IconCite, IconBookmark, IconLink } from 'components/icons'

const SearchResultItemActions = ({
  link = [],
  resultId = '',
  downloadLink = ''
}) => {
  const [state, setState] = useGlobal()
  const { data: session } = useSession()
  const href = get(link, '[0].url')

  const onClickDownload = () => {
    if (session) {
      window.open(downloadLink)
    } else {
      setState({ ...state, premiumPopupVisibility: true })
    }
  }

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
        onClick={onClickDownload}
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
