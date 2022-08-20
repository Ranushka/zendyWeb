import React from 'react'
import Router from 'next/router'
import { ActionBtn } from 'components/atoms'

/* __DOC

<WentSomethingWrong msg="something went wrong. with this article" />

DOC__ */

type Props = { msg: string }

const WentSomethingWrong: React.FC<Props> = ({
  msg = 'something went wrong.'
}) => {
  return (
    <div className={'mw__3 py__6 px-4'}>
      <h2>We are sorry,</h2>
      <h3>{msg}</h3>
      <div className="gaps__4" />
      <p>We have already sent an alert to our developers on behalf of you</p>
      <div className="gaps__2" />
      <small>Thanks in advance for your patients</small>
      <div className="gaps__4" />
      <ActionBtn
        dataName="BackToResults"
        text={'← Back to results'}
        onClick={() => Router.back()}
        type="btn__primary"
      />
    </div>
  )
}

export default WentSomethingWrong
