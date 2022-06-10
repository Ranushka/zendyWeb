import React from 'react'

type Props = {
  id: string
  content: any
  height?: number
}

const ReadMore: React.FC<Props> = (props) => {
  const { id } = props

  const contentRef = React.useRef(null)
  const [isOpen, isOpenSet] = React.useState(false)

  let content = props.content

  React.useEffect(() => {
    const overFlowState = content.props.items.length > 5

    if (overFlowState) {
      isOpenSet(overFlowState)
    }
  }, [])

  if (isOpen && content.props.items.length > 5) {
    const newItems = content.props.items.slice(0, 5)

    content = {
      ...content,
      props: {
        ...content.props,
        items: newItems
      }
    }
  }

  return (
    <div>
      <div
        // className="overflow-hidden"
        ref={contentRef}
        // style={{ height: isOpen ? height : 'unset' }}
      >
        {content}
      </div>

      {isOpen !== null && (
        <label
          className="readMoreWrapper cursor-pointer block -mt-1"
          htmlFor={id}
        >
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
