import React from 'react'
import classnames from 'classnames'

type Props = {
  type?: 'referenced' | 'reviewed'
}

function styles(type: Props) {
  const data = {
    referenced: 'text-green-800',
    reviewed: 'text-yellow-800'
  }

  return data[type.toString()]
}

const FeaturedChip: React.FC<Props> = ({ type = 'Referenced' }) => {
  const __finalClassNames = classnames(
    'small inline-block px-1 first_letter_caps',
    styles[type]
  )

  return <span className={__finalClassNames}>{type}&nbsp;✓</span>
}

export default FeaturedChip
