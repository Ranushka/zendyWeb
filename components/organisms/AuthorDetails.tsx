import React from 'react'
import Skeleton from 'react-loading-skeleton'

import { AuthorDetailsProps } from 'types'
import useAuthorDetails from 'fetchHooks/useAuthorDetails'

const ResultsWithData = ({ data }) => {
  var { orcidDetails, firstName, lastName } = data
  var { orcid, organizations, education } = orcidDetails

  return (
    <section className="mb__0 mw__7">
      <div className="bg__nut2 rounded-md px-8 py-8 my-8 mb__0 mx-4">
        <div className="flex">
          <div>
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
              <div key={key} className="py-2 pb__0">
                {organization}
              </div>
            ))}
          </div>

          <div>
            <small className="mute">Education</small>
            {education.map(({ organization, startYear }, key) => (
              <div key={key} className="py-2 pb__0">
                {organization}-{startYear}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const __authorDetailsLoading = () => {
  return (
    <div className="mw__7  py-8 px-8 pb__0">
      <Skeleton height={10} />

      <Skeleton height={10} count={5} />
    </div>
  )
}

const AuthorDetails: React.FC<AuthorDetailsProps> = ({ authorName }) => {
  const { data } = useAuthorDetails(authorName)

  if (!data) {
    return __authorDetailsLoading()
  }

  if (!data || data.error) {
    return <></>
  }

  return <ResultsWithData {...data} />
}

export default AuthorDetails
