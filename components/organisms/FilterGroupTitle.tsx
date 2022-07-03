import React from 'react'

type Props = {
  title?: string
}

const FilterTitle: React.FC<Props> = ({ title }) => {
  return <h5 className="text_nut5 font-serif pb-3">{title}</h5>
}

export default FilterTitle
