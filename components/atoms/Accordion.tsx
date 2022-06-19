import React from 'react'
import { IconArrowUp } from 'components/icons'

type Props = {
  id: string
  title: React.ReactNode
  content: React.ReactNode
  open?: boolean
}

const Accordion: React.FC<Props> = (props) => {
  const { id, title, content, open = true } = props

  return (
    <div className="accordion mb-4">
      <input
        className="sr-only"
        type="checkbox"
        defaultChecked={!open}
        id={id}
      />
      <label
        className="flex justify-between mb-2 cursor-pointer select-none"
        htmlFor={id}
      >
        {title} <IconArrowUp />
      </label>
      <div className="mb-4">{content}</div>
    </div>
  )
}

export default Accordion
