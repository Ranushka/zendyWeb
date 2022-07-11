import React from 'react'
import { ActionItem } from 'components/atoms'
import { SubTitleProps } from 'types'

const SubTitle: React.FC<SubTitleProps> = (props) => {
  const { title, linkHref = '#', linkText = '' } = props

  return (
    <section className="container pt-16 pb-4">
      <div className="flex justify-center items-center">
        <div className="text-lg font-serif text_nut5 px-4">{title}</div>/
        {linkText && (
          <strong className={'px-4'}>
            <ActionItem dataName="SubTitle" text={linkText} href={linkHref} />
          </strong>
        )}
      </div>
    </section>
  )
}

export default SubTitle
