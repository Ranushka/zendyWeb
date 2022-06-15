import React from 'react'
import classnames from 'classnames'
import styles from './index.module.scss'

type Props = {
  type?: 'referenced' | 'reviewed'
}

const FeaturedChip: React.FC<Props> = ({ type = 'Referenced' }) => {
  const __finalClassNames = classnames(
    'small inline-block px-1 first_letter_caps',
    styles[type]
  )

  return <span className={__finalClassNames}>{type}&nbsp;✓</span>
}

export default FeaturedChip
