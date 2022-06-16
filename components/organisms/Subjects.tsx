import React from 'react'
import get from 'lodash/get'
import { CardSubject } from 'components/molecules'
import useGetSubjects from 'fetchHooks/useGetSubjects'

const Subjects: React.FC<any> = () => {
  const { data } = useGetSubjects()
  const subjectsData = get(data, 'data.attributes.common.subjects', null)

  if (!subjectsData) return <div>loading...</div>

  return (
    <section className="container text-center py-4">
      {subjectsData.slice(0, 18).map(({ title, href }, id) => (
        <CardSubject key={`subject${id}`} href={href} title={title} />
      ))}
    </section>
  )
}

export default Subjects
