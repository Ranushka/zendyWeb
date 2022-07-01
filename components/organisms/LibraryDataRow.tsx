import React from 'react'
import { ButtonFab } from 'components/atoms'
import { IconMore } from 'components/icons'

const LibraryDataRow: React.FC<any> = (props) => {
  const { name = '#', count = 0 } = props

  return (
    <div className="my-1">
      <div className="px-4 py-2 flex justify-between align-baseline bg_white shadow rounded-md">
        <div>
          <span className="first_letter_caps">{name}</span>
          <span>{count}</span>
        </div>

        <ButtonFab classNames="bg_white" icon={<IconMore />} />
      </div>
    </div>
  )
}

export default LibraryDataRow
