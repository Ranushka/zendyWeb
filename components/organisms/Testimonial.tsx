import React from 'react'

/* __DOC

 <Testimonial key={`uspItem`} quote={'quote'} name={'name'} title={'title'} />

DOC__ */

type Props = {
  quote: string
  name: string
  title: string
}

const Testimonial: React.FC<Props> = (props) => {
  const {
    quote = '“Zendy is an excellent resource, and can be especially useful to keep up with latest devolopmets legal comunity.”',
    name = 'Bolta Zayed',
    title = 'Some legal firm'
  } = props

  return (
    <div className="bg_white m-auto my-3 max-w-md rounded p-3 shadow md:m-3">
      <p className="color__nut7">{quote}</p>

      <p className="mt-4">{name}</p>
      <p className="text-sm">{title}</p>
    </div>
  )
}

export default Testimonial
