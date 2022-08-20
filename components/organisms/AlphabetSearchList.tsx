import React from 'react'

import { ActionLink, Input } from 'components/atoms'
import countFormatted from 'helpers/countFormatted'
import routs from 'helpers/routs'

const AlphabetSearchList: React.FC<any> = ({ data, urlKey }) => {
  const [searchInput, setSearchInput] = React.useState('')

  const onSearchInputChange = (e) => {
    setSearchInput(e.target.value)
  }

  // const prepareAlphabets = () => {
  //   let result = []
  //   for (let i = 65; i < 91; i++) {
  //     result.push(
  //       <button
  //         type="button"
  //         key={i}
  //         onClick={onSearchInputChange}
  //         value={String.fromCharCode(i)}
  //         className="text-lg font-serif mr-8 mb-2"
  //       >
  //         {String.fromCharCode(i)}
  //       </button>
  //     )
  //   }
  //   return result
  // }

  const filteredList = data?.filter((item) => {
    return (
      item.facetLabel.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
    )
  })

  return (
    <div>
      <div className="my-4">
        <div className="mb-8 max-w-xs">
          <Input
            id="searchAlp"
            onChange={onSearchInputChange}
            placeholder="Search publishers"
          />
        </div>
        {/* {prepareAlphabets()} */}
      </div>
      <div className="columns-3">
        {filteredList?.map(({ facetLabel, count }, key) => {
          const text = (
            <>
              {facetLabel}
              <span className="text_nut4 text-xs">
                {` (${countFormatted(count)}) `}
              </span>
            </>
          )

          return (
            <ActionLink
              dataName={`SearchList_${urlKey}`}
              key={key}
              text={text}
              href={routs[urlKey](facetLabel)}
              type="link"
              className="inline-block w-full pr-4 pb-5"
            />
          )
        })}
      </div>
    </div>
  )
}

export default AlphabetSearchList
