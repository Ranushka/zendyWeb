import React from 'react'
import { ActionLink } from 'components/atoms'
import { getRandomColor } from 'helpers/utils'

const PersonalizedDataItems = ({ data }) => {
  return (
    <div className="m-auto flex max-w-7xl flex-wrap justify-center">
      {data.length &&
        data.map(({ facetLabel, url }, key) => {
          return (
            <ActionLink
              dataName="CategoriesMenuItem"
              className="flex items-center justify-center text-center"
              key={key}
              text={textWrapper(facetLabel)}
              href={url}
            />
          )
        })}
    </div>
  )
}
const textWrapper = (facetLabel) => {
  const randC = getRandomColor(facetLabel)

  return (
    <div
      className="bg_white my-2 mx-2 rounded-md border px-6 py-2 text-base capitalize  hover:shadow-sm"
      style={{
        maxWidth: 180,
        minWidth: 120,
        color: `hsl(${randC}, 24%, 40%)`,
        borderColor: `hsl(${randC}, 24%, 90%)`,
        backgroundColor: `hsl(${randC}, 24%, 96%)`
      }}
    >
      <div className="line-clamp-2">{facetLabel}</div>
    </div>
  )
}

export default React.memo(PersonalizedDataItems)
