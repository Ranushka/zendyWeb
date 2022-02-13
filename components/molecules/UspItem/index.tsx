import Image from 'next/image'
import styles from './index.module.scss'
import { Space } from 'components/atoms'

type Props = {
  src: string
  title: React.ReactNode
  content: React.ReactNode
}

const UspItem: React.FC<Props> = (props) => {
  const { src, title, content } = props

  return (
    <div className={styles.wrapper}>
      <Image
        width={64}
        height={64}
        src={src}
        alt={title.toString()}
        placeholder="empty"
      />
      <Space size={3} />
      <h3>{title}</h3>
      <Space size={2} />
      <small>{content}</small>
    </div>
  )
}

export default UspItem
