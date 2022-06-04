import classnames from 'classnames'
import styles from './index.module.scss'

type Props = {
  type?: 'referenced' | 'reviewed'
}

const FeaturedChip: React.FC<Props> = ({ type = 'Referenced' }) => {
  const __finalClassNames = classnames(
    'small block_inline px-1 first_letter_caps',
    styles.item,
    styles[type]
  )

  return <span className={__finalClassNames}>{type}&nbsp;✓</span>
}

export default FeaturedChip
