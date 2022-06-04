import React from 'react'
import { Space, ActionItem } from 'components/atoms'
import { SubTitleProps } from 'types'

const SubTitle: React.FC<SubTitleProps> = (props) => {
  const { title, linkHref = '#', linkText = '' } = props

  return (
    <section className="mw__6 px-4">
      <Space size={5} />
      <div className={'flex__between'}>
        <h4 className="mute">{title}</h4>
        {linkText && (
          <strong>
            <ActionItem text={linkText} href={linkHref} />
          </strong>
        )}
      </div>
      <Space size={2} />
    </section>
  )
}

export default SubTitle
