import React from 'react'
import { ActionLink } from 'components/atoms'

const PersonalizedDataItems = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center m-auto max-w-7xl">
      {data.length &&
        data.map(({ facetLabel, url }, key) => {
          return (
            <ActionLink
              dataName="CategoriesMenuItem"
              className="my-2 shadow-sm px-6 py-2 bg_white rounded-md hover:shadow mx-2 justify-center text-center flex items-center"
              key={key}
              text={textWrapper(facetLabel)}
              href={url}
            />
          )
        })}
    </div>
  )
}
const textWrapper = (facetLabel) => (
  <span
    className="capitalize text-base line-clamp-2"
    style={{ maxWidth: 180, minWidth: 120 }}
  >
    {facetLabel}
  </span>
)
export default React.memo(PersonalizedDataItems)
