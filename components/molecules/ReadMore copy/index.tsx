import React from 'react'

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
  }, [height])

  return (
    <div>
      <div
        className="overflow-hidden"
        ref={contentRef}
        style={{ height: isOpen ? height : 'unset' }}
      >
        {content}
      </div>

      {isOpen !== null && (
        <label className="readMoreWrapper cursor-pointer block" htmlFor={id}>
          <input
            className="sr-only"
            type="checkbox"
            checked={isOpen}
            onChange={() => isOpenSet(!isOpen)}
            id={id}
          />
          <small className="mute">More filters [{isOpen ? '+' : '-'}]</small>
        </label>
      )}
    </div>
  )
}

export default ReadMore
