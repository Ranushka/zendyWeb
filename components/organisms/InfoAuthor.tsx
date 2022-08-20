import React from 'react'
import Skeleton from 'react-loading-skeleton'

import useInfoAuthor from 'fetchHooks/useInfoAuthor'

/* __DOC

InfoAuthor

DOC__ */

const ResultsWithData = ({ data }) => {
  var { orcidDetails, firstName, lastName } = data
  var { orcid, organizations, education } = orcidDetails

  return (
    <section className="container">
      <div className="bg_nut1 mx-4 mt-8 flex justify-between rounded-md px-8 py-8">
        <div className="">
          <div className="mb-4">
            <small className="mute">Name</small>
            <div>{`${firstName} ${lastName}`}</div>
          </div>

          <div>
            <small className="mute">ORCID</small>
            <div>{orcid}</div>
          </div>
        </div>

        <div className="flex">
          <div>
            <small className="mute">Organizations</small>
            {organizations.map(({ organization }, key) => (
              <div key={key} className="pb__0 py-2">
                {organization}
              </div>
            ))}
          </div>
        </div>

        <div className="flex">
          <div>
            <small className="mute">Education</small>
            {education.map(({ organization, startYear }, key) => (
              <div key={key} className="pb__0 py-2">
                {organization}-{startYear}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const __dataLoading = () => {
  return (
    <div className="pb__0 container py-8 px-8">
      <Skeleton height={10} count={6} />
    </div>
  )
}

const InfoAuthor: React.FC<any> = ({ authorName }) => {
  const { data } = useInfoAuthor(authorName)

  if (!data) {
    return __dataLoading()
  }

  if (!data || data.error) {
    return <></>
  }

  return <ResultsWithData {...data} />
}

export default InfoAuthor
