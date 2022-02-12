import React from 'react'
import Skeleton from 'react-loading-skeleton'

import { Space } from 'components/atoms'
import { AuthorDetailsProps } from 'types'
import useAuthorDetails from 'fetchHooks/useAuthorDetails'

const ResultsWithData = ({ data }) => {
  var { orcidDetails, firstName, lastName } = data
  var { orcid, organizations, education } = orcidDetails

  return (
    <section className="mb__0 mw__7">
      <div className="bg__nut2 rounded__1 px__4 py__4 my__4 mb__0 mx__3">
        <div className="flex">
          <div>
            <small className="mute">Name</small>
            <div>{`${firstName} ${lastName}`}</div>
          </div>
          <Space size={4} />
          <div>
            <small className="mute">ORCID</small>
            <div>{orcid}</div>
          </div>
        </div>

        <Space size={4} />
        <div className="flex">
          <div>
            <small className="mute">Organizations</small>
            {organizations.map(({ organization }, key) => (
              <div key={key} className="py__2 pb__0">
                {organization}
              </div>
            ))}
          </div>
          <Space size={4} />
          <div>
            <small className="mute">Education</small>
            {education.map(({ organization, startYear }, key) => (
              <div key={key} className="py__2 pb__0">
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
    <div className="mw__7  py__4 px__4 pb__0">
      <Skeleton height={10} />
      <Space size={3} />
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
