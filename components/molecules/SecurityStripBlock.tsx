import React from 'react'
import Image from 'next/image'

const SecurityStripBlock: React.FC<{}> = () => {
  return (
    <div className="max-w-sm my-8 text-center m-auto">
      <div className="block mb-3 text-xs text_nut5">
        Your transaction are secured by Stripe, and connection is secured and
        encrypted with SSL
      </div>

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
