import React from 'react'
import { ActionLink } from 'components/atoms'
import { getRandomColor } from 'helpers/utils'
import classNames from 'classnames'

/* __DOC

<PersonalizedDataItems data={[{facetLabel: 'test one', url: '/'}, {facetLabel: 'test two', url: '/'}]} />

DOC__ */

const PersonalizedDataItems = ({ data }) => {
  return (
    <div className="px-4 text-center">
      <div className="m-auto flex max-w-6xl flex-wrap justify-center">
        {data?.length &&
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
    </div>
  )
}

const textWrapper = (facetLabel) => {
  const randC = getRandomColor(facetLabel)

  return (
    <div
      className={classNames(
        'bg_white my-1 mx-1 px-2 py-1 md:mx-2 md:my-2 md:px-6 md:py-2',
        'rounded-md border capitalize  hover:shadow-sm',
        'text-sm md:text-base'
      )}
      style={{
        maxWidth: 210,
        minWidth: 100,
        color: `hsl(${randC}, 24%, 30%)`,
        borderColor: `hsl(${randC}, 24%, 90%)`,
        backgroundColor: `hsl(${randC}, 24%, 96%)`
      }}
    >
      <div className="line-clamp-1 ">{facetLabel}</div>
    </div>
  )
}

export default React.memo(PersonalizedDataItems)
