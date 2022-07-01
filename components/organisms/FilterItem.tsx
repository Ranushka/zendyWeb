import React from 'react'

import { countFormatted } from 'lib/helpers'
import labelMapping from 'lib/labelMapping'
import { CheckBox } from 'components/atoms'

const FilterItem = ({ id, facetLabel, onClick, checked, count = null }) => {
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
        id={id}
        name={facetLabel}
        label={
          <span>
            {labelMapping(facetLabel)}
            {count && (
              <small className="ml-2 text_nut4">
                ({countFormatted(count)})
              </small>
            )}
          </span>
        }
      />
    </div>
  )
}

export default FilterItem
