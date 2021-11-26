import classnames from 'classnames'
import styles from './index.module.scss'

type Props = {
  price: number
  large?: boolean
}

const Price: React.FC<Props> = ({ large, price }) => {
  const fullAmount = price.toFixed(2).toString().split('.')
  const priceNumber = fullAmount[0]
  const priceFloat = fullAmount[1]
  const currency = 'AED'

  if (large) {
    return (
      <div className={'flex__align_center'}>
        <span className={styles.currency}>{currency}</span>
        <span className={styles.number}>{priceNumber}</span>
        <span className={styles.float}>.{priceFloat}</span>
      </div>
    )
  }

  return (
    <div className={'flex__align_center'}>
      {currency} {priceNumber}.{priceFloat}
    </div>
  )
}

export default Price
