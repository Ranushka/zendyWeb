import React from 'react'

const TitleDetailAbstract = (abstract) => {
  return (
    <div className="py-2 text__justify">
      <div dangerouslySetInnerHTML={{ __html: abstract }} />
    </div>
  )
}

export default TitleDetailAbstract
