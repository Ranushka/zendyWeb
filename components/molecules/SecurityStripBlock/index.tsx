import Image from 'next/image'
import React from 'react'
import { Space } from 'components/atoms'

const SecurityStripBlock: React.FC<{}> = ({}) => {
  return (
    <div className="mw__2 my__4 text__center">
      <span className="mute small">
        Your transaction are secured by Stripe, and connection is secured and
        encrypted with SSL
      </span>
      <Space size={2} />
      <Image
        width={256}
        height={28}
        src="/img/trust.png"
        alt="you can pay by card"
        placeholder="empty"
      />
    </div>
  )
}

export default SecurityStripBlock
