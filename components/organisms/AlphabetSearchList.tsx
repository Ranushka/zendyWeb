import React from 'react'

import { ActionLink, Input } from 'components/atoms'
import countFormatted from 'helpers/countFormatted'

const AlphabetSearchList: React.FC<any> = ({ data }) => {
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

  const filteredList = data.filter((item) => {
    return (
      item.facetLabel.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
    )
  })

  return (
    <div>
      <div className="my-4">
        <div className="max-w-xs mb-8">
          <Input
            id="searchAlp"
            onChange={onSearchInputChange}
            placeholder="Search publishers"
          />
        </div>
        {/* {prepareAlphabets()} */}
      </div>
      <div className="columns-3">
        {filteredList.map(({ facetLabel, count }, key) => {
          const text = (
            <>
              {facetLabel}
              <span className="text-xs text_nut4">
                {` (${countFormatted(count)}) `}
              </span>
            </>
          )

          return (
            <ActionLink
              dataName="AlphabetSearchList"
              key={key}
              text={text}
              href={`/publisher/${facetLabel.replace(/ /g, '_')}`}
              type="link"
              className="inline-block pr-4 pb-5 w-full"
            />
          )
        })}
      </div>
    </div>
  )
}

export default AlphabetSearchList
