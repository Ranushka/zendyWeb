import React from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'

type Props = {
  id: string
  content: React.ReactNode
  height?: number
}

function isOverflownY(element, height) {
  return element.scrollHeight > height
}

const ReadMore: React.FC<Props> = (props) => {
  const { id, content, height = 100 } = props
  const contentRef = React.useRef(null)
  const [isOpen, isOpenSet] = React.useState(null)

  React.useEffect(() => {
    const overFlowState = isOverflownY(contentRef.current, height)

    if (overFlowState) {
      isOpenSet(overFlowState)
    }
  }, [])

  return (
    <div className={classnames(styles.wrapper)}>
      <div
        className={styles.content}
        ref={contentRef}
        style={{ height: isOpen ? height : 'unset' }}
      >
        {content}
      </div>

      {isOpen !== null && (
        <label
          className={classnames(
            'pointer block text__right py__2',
            styles.readMoreWrapper
          )}
          htmlFor={id}
        >
          <input
            type="checkbox"
            checked={isOpen}
            onChange={() => isOpenSet(!isOpen)}
            id={id}
          />
          <small>More filters [{isOpen ? '+' : '-'}]</small>
        </label>
      )}
    </div>
  )
}

export default ReadMore
