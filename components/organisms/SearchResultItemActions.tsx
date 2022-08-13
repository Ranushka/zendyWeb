import React from 'react'
// import get from 'lodash/get'
import { useSession } from 'next-auth/react'

import useGlobal from 'context/GlobalContext'
import { ActionBtn, ButtonFab } from 'components/atoms'
import { IconCite, IconBookmark, IconLink } from 'components/icons'
import IconExternalLink from 'components/icons/IconExternalLink'
import IconDownload from 'components/icons/IconDownload'

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
      <div className="my-4 flex justify-around">
        <ButtonFab dataName="BtnGetCite" icon={<IconCite />} small />
        <ButtonFab dataName="BtnGetLink" icon={<IconLink />} small />
        <ButtonFab dataName="BtnGetBookmark" icon={<IconBookmark />} small />
      </div>
      {link && downloadLink && (
        <ActionBtn
          icon={<IconDownload className="text_nut6 h-4" />}
          dataName="BtnDownload"
          className="mb-4 mt-2 "
          text={'Download'}
          onClick={onClickDownload}
          type="btn__primary"
          block
        />
      )}
      {!downloadLink && link && (
        <ActionBtn
          icon={<IconExternalLink className="text_nut6 h-4" />}
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
