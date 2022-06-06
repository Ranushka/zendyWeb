import React from 'react'
import { CardSubject } from 'components/molecules'
import { attributes as Data } from 'data/widgets/subjects.md'

type Props = {}

const Subjects: React.FC<Props> = () => {
  const subList = Data.subjects && Data.subjects.slice(0, 15)

  return (
    <section className="container text-center py-4">
      {subList.map(({ title, href }, id) => (
        <CardSubject key={`subject${id}`} href={href} title={title} />
      ))}
    </section>
  )
}

export default Subjects
