import React from 'react'
import { Space, ActionItem } from 'components/atoms'
import { SubTitleProps } from 'types'

const SubTitle: React.FC<SubTitleProps> = (props) => {
  const { title, linkHref = '#', linkText = '' } = props

  return (
    // <div className="mw__6 px__3 py__4">
    <div className="mw__6 px__3">
      <Space size={5} />
      <div className={'flex__align_center'}>
        <h4 className="mute px__3">{title}</h4>/
        {linkText && (
          <strong className={'px__3'}>
            <ActionItem text={linkText} href={linkHref} />
          </strong>
        )}
      </div>
      <div className="flex__left"></div>
      <Space size={4} />
    </div>
  )
}

export default SubTitle
