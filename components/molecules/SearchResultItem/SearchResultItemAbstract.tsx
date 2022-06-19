import React from 'react'

const SearchResultItemAbstract = (abstract: string) => {
  if (!abstract) return <></>
  return (
    <div className="block pb-2">
      <div
        className="text_nut5 line-clamp-4"
        dangerouslySetInnerHTML={{ __html: abstract }}
      />
    </div>
  )
}

export default SearchResultItemAbstract
