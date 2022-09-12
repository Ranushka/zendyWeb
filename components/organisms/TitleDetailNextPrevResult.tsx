import React from 'react'
import NextArticle from 'components/organisms/NextArticle'
/* __DOC

  TitleDetailNextPrevResult 

DOC__ */

type Props = {}

const TitleDetailNextPrevResult: React.FC<Props> = () => {
  return (
    <div className="fixed bottom-1/4 left-0 z-10 w-40">
      <div className="">
        <NextArticle
          url="/"
          prev
          title="Platform Competition in the Sharing Economy: Understanding How Ride-Hailing Services Influence New Car Purch..."
        />
      </div>

      <div className="fixed bottom-1/4 right-0 z-10 w-40">
        <NextArticle
          url="/"
          title="Platform Competition in the Sharing Economy: Understanding How Ride-Hailing Services Influence New Car Purch..."
        />
      </div>
    </div>
  )
}

export default TitleDetailNextPrevResult
