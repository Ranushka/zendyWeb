import React from 'react'
// import get from 'lodash/get'
import { useSession } from 'next-auth/react'

import useGlobal from 'context/GlobalContext'
import { ActionBtn, ButtonFab } from 'components/atoms'
import { IconCite, IconBookmark, IconLink } from 'components/icons'

const SearchResultItemActions = ({
  link = '',
  resultId = '',
  downloadLink = ''
}) => {
  const [{ setGlobalState }] = useGlobal()
  const { data: session } = useSession()
  // const href = get(link, '[0].url')
  const href = link

  const onClickDownload = () => {
    if (session) {
      window.open(downloadLink)
    } else {
      setGlobalState({ premiumPopupVisibility: true })
    }
  }

  return (
    <div key={resultId}>
      <div className="flex justify-around my-4">
        <ButtonFab dataName="BtnGetCite" icon={<IconCite />} small />
        <ButtonFab dataName="BtnGetLink" icon={<IconLink />} small />
        <ButtonFab dataName="BtnGetBookmark" icon={<IconBookmark />} small />
      </div>
      {downloadLink && (
        <ActionBtn
          dataName="BtnDownload"
          className="mb-4 mt-2"
          text={'Download'}
          onClick={onClickDownload}
          type="btn__secondary"
          block
        />
      )}
      {link && (
        <ActionBtn
          dataName="BtnRead"
          text="Read"
          href={href}
          onClick={() => window.open(href)}
          type="btn__primary"
          block
        />
      )}
    </div>
  )
}

export default SearchResultItemActions
