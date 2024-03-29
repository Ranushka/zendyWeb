import React from 'react'
import { IconArrowUp } from 'components/icons'

type Props = {
  id: string
  title: React.ReactNode
  content: React.ReactNode
  open?: boolean
}

/* __DOC

  <p>This is an Accordion component</p>
  
  <Accordion id={'Accordion'} open={true} title={ <h4 className="text-sm font-serif font-light w-full">Title</h4> } content={'Accordion content'} />
  
DOC__ */

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
        className="mb-2 flex cursor-pointer select-none justify-between"
        htmlFor={id}
      >
        {title} <IconArrowUp />
      </label>
      <div className="mb-4">{content}</div>
    </div>
  )
}

export default Accordion
