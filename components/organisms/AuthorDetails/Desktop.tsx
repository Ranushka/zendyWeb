import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import classnames from 'classnames'
import styles from './desktop.module.scss'

import { Space, CheckBox, ActionItem } from 'components/atoms'
import { IconSavedSearch } from 'components/icons'
import { ReadMore } from 'components/molecules'
import useAuthorDetails from 'fetchHooks/useAuthorDetails'

type Props = {}

const ResultsWithData = ({ data }) => {
  var { orcidDetails, firstName, lastName } = data
  var { orcid, organizations, education } = orcidDetails

  return (
    <section className={'mw__6 px__3 py__4 pb__0 flex'}>
      <div>
        <div>
          <small className="mute">Name</small>
          <div>{`${firstName} ${lastName}`}</div>
        </div>
        <Space size={3} />
        <div>
          <small className="mute">ORCID</small>
          <div>{orcid}</div>
        </div>
      </div>

      <div>{}</div>
      <Space size={4} />
      <div>
        <small className="mute">Organizations</small>
        {organizations.map(({ organization }) => (
          <div>{organization}</div>
        ))}
      </div>
      <Space size={4} />
      <div>
        <small className="mute">Education</small>
        {education.map(({ organization, startYear }) => (
          <div>
            {organization}-{startYear}
          </div>
        ))}
      </div>

      {/* {JSON.stringify(data)} */}
    </section>
  )
}

const AuthorDetails: React.FC<Props> = ({}) => {
  const router = useRouter()
  const queryAuthor: any = router.query.author
  if (!queryAuthor) return <></>

  const { data } = useAuthorDetails(queryAuthor)

  if (!data || data.error) {
    return <></>
  }

  return <ResultsWithData {...data} />
}

export default AuthorDetails
