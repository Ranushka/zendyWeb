import React from 'react'

import countFormatted from 'helpers/countFormatted'
import labelMapping from 'helpers/labelMapping'
import { CheckBox } from 'components/atoms'

/* __DOC

FilterItem

DOC__ */

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
              <small className="text_nut4 ml-2">
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
