import React from 'react'
import { useRouter } from 'next/router'

import countFormatted from 'helpers/countFormatted'
import labelMapping from 'helpers/labelMapping'
import { CheckBox } from 'components/atoms'

const checkIsChecked = (str, facetLabel) => {
  const hasFound =
    str && str.split(',').find((element) => element === facetLabel)

  return hasFound && hasFound !== undefined
}

const FilterItems = ({ items, groupId }) => {
  const router = useRouter()
  const queryString = router.query

  return items.map((item, id) => {
    const facetLabel = item.facetLabel

    const checked = checkIsChecked(queryString[groupId], facetLabel)

    const onClick = () => {
      let query = {}

      if (checked) {
        delete queryString[groupId]
        query = queryString
      } else {
        let newFacetLabel
        const currentFacetLabel = queryString[groupId]
        if (currentFacetLabel) {
          newFacetLabel = `${currentFacetLabel},${facetLabel}`
        } else {
          newFacetLabel = facetLabel
        }

        query = { ...queryString, [groupId]: newFacetLabel }
      }

      router.push({
        pathname: '/search',
        query: query
      })
    }

    return (
      <div
        key={'filter' + id}
        onClick={onClick}
        className="text_nut5 hover:text_nut6"
      >
        <CheckBox
          checked={checked}
          className="py-1"
          key={id}
          id={item.id}
          name={item.facetLabel}
          label={
            <span>
              {labelMapping(item.facetLabel)}
              <small className="ml-2 text_nut4">
                ({countFormatted(item.count)})
              </small>
            </span>
          }
        />
      </div>
    )
  })
}

export default FilterItems
