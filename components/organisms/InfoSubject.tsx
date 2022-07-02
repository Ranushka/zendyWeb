import React from 'react'
import Skeleton from 'react-loading-skeleton'

import useInfoSubject from 'fetchHooks/useInfoSubject'

const ResultsWithData = ({ extract, title, description }) => {
  return (
    <section className="container">
      <div className="bg_nut1 rounded-md px-8 py-8 mt-8 mx-4 flex justify-between">
        <div className="">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-serif">{title}</h1>
            <small className="mb-4 block">{description}</small>
            <div>{extract}</div>
          </div>
        </div>
      </div>
      <small className="mt-2 mx-4 block text_nut4 text-right">
        Powered by wikipedia
      </small>
    </section>
  )
}

const __dataLoading = () => {
  return (
    <div className="container">
      <div className="bg_nut1 rounded-md px-8 py-8 mt-8 mx-4">
        <Skeleton height={20} className="mb-4 max-w-sm" />
        <Skeleton height={10} count={6} />
      </div>
    </div>
  )
}

const InfoSubject: React.FC<any> = ({ subject }) => {
  const { data } = useInfoSubject(subject)

  console.log('---', data)

  if (!data) {
    return __dataLoading()
  }

  if (!data || !data.extract) {
    return <></>
  }

  return <ResultsWithData {...data} />
}

export default InfoSubject
