import React from 'react'

import { ActionItem } from 'components/atoms'

const TitleDetailSource = (title, journal, year) => {
  return (
    <div className="py-4">
      <strong className="color__nut7">Journal - {year}</strong>
      <ActionItem
        className="px-4"
        text={title}
        href={`/search?q=${journal.title}`}
        type="link__small"
      />
    </div>
  )
}

export default TitleDetailSource
