import React from 'react'
import isArray from 'lodash/isArray'
import { useTranslations } from 'next-intl'

import { Testimonial } from 'components/organisms'

type Props = {}

const Testimonials: React.FC<Props> = () => {
  const trans = useTranslations('testimonial')
  const testimonialsList = trans.raw('testimonials')

  return (
    <section className="container my-16">
      <div className="text-center m-4">
        <h2 className="text-3xl font-serif">{trans('title')}</h2>
        <p>{trans('subtitle')}</p>
      </div>

      <div className="md:flex justify-center items-stretch mx-4 mt-8">
        {isArray(testimonialsList) &&
          testimonialsList.map(({ name, quote, title }, id) => (
            <Testimonial
              key={`uspItem${id}`}
              quote={quote}
              name={name}
              title={title}
            />
          ))}
      </div>
    </section>
  )
}

export default Testimonials
