import React from 'react'
import Skeleton from 'react-loading-skeleton'
// import { ActionLink } from 'components/atoms'

import useInfoPublisher from 'fetchHooks/useInfoPublisher'
// import SearchFormNarrow from 'components/organisms/SearchFormNarrow'

/* __DOC

InfoPublisher

DOC__ */

const ResultsWithData = ({ extract, title, description }) => {
  return (
    <section className="container">
      <div className="w-full">
        <div className="mx-4 flex justify-between pt-8 pb-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl">{title}</h1>
            <small className="mb-4 block">{description}</small>
            <div>{extract}</div>
            {/* <ActionLink
              dataName="searchByAuthor"
              text={`Search content published by ${title}`}
              as={`/search?author=${name}`}
              href={`/search?author=${name}`}
              type="link"
              className="text_nut6 first_letter_caps pt-8 pb-4 underline underline-offset-2"
            /> */}
          </div>
        </div>

        {/* <SearchFormNarrow id="lll" /> */}
        <div className="border_pri2 mx-4 border-b" />
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

const InfoPublisher: React.FC<any> = ({ publisherName }) => {
  const { data } = useInfoPublisher(publisherName)

  if (!data) {
    return __dataLoading()
  }

  if (!data || !data.extract) {
    return <></>
  }

  return <ResultsWithData {...data} />
}

export default InfoPublisher
