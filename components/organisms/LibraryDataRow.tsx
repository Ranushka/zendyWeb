import React from 'react'
import { ButtonFab } from 'components/atoms'
import { IconMore } from 'components/icons'

const LibraryDataRow: React.FC<any> = (props) => {
  const { name = '#', count = 0 } = props

  return (
    <div className="my-1">
      <div className="bg_white flex items-center justify-between rounded-md px-4 py-2 align-baseline shadow">
        <div>
          <span className="first_letter_caps">{name}</span>
          <span className="ml-2 font-bold">{count}</span>
        </div>

        <ButtonFab
          dataName="LibraryDataMore"
          classNames="bg_white"
          icon={<IconMore />}
        />
      </div>
    </div>
  )
}

export default LibraryDataRow
