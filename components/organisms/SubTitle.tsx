import React from 'react'
import { ActionLink } from 'components/atoms'
import { SubTitleProps } from 'types'

/* __DOC

SubTitle

DOC__ */

const SubTitle: React.FC<SubTitleProps> = (props) => {
  const { title, linkHref = '#', linkText = '' } = props

  return (
    <section className="container px-6 pt-8 pb-2 md:pb-4 md:pt-16">
      <div className="flex items-center justify-center">
        <div className="text_nut5 pr-4 font-serif text-lg">{title}</div>/
        {linkText && (
          <strong className="whitespace-nowrap px-4">
            <ActionLink dataName="SubTitle" text={linkText} href={linkHref} />
          </strong>
        )}
      </div>
    </section>
  )
}

export default SubTitle
