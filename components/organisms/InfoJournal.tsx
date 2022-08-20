import React from 'react'
import Skeleton from 'react-loading-skeleton'

import useInfoJournal from 'fetchHooks/useInfoJournal'

/* __DOC

InfoJournal

DOC__ */

const ResultsWithData = ({ extract, title, description }) => {
  return (
    <section className="container">
      <div className="border_pri2 mx-4 flex justify-between border-b py-8">
        <div className="">
          <div className="max-w-4xl">
            <h1 className="font-serif text-4xl">{title}</h1>
            <small className="mb-4 block">{description}</small>
            <div>{extract}</div>
          </div>
        </div>
      </div>
      <small className="text_nut4 mx-4 mt-2 block text-right">
        Powered by wikipedia
      </small>
    </section>
  )
}

const __dataLoading = () => {
  return (
    <div className="container">
      <div className="border_pri2 mx-4 border-b py-8">
        <Skeleton height={20} className="mb-4 max-w-sm" />
        <Skeleton height={10} count={6} className="max-w-5xl" />
      </div>
    </div>
  )
}

const InfoJournal: React.FC<any> = ({ publicationName }) => {
  const { data } = useInfoJournal(publicationName)

  if (!data) {
    return __dataLoading()
  }

  if (!data || !data.extract) {
    return <></>
  }

  return <ResultsWithData {...data} />
}

export default InfoJournal
