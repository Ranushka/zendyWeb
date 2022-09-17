import React from 'react'
import NextArticle from 'components/organisms/NextArticle'
/* __DOC

  TitleDetailNextPrevResult 

DOC__ */

type Props = {}

const TitleDetailNextPrevResult: React.FC<Props> = () => {
  return (
    <div className="sticky bottom-4">
      <div className="bottom-1/4 z-10 inline-block w-40">
        <NextArticle
          url="/"
          prev
          title="Platform Competition in the Sharing Economy: Understanding How Ride-Hailing Services Influence New Car Purch..."
        />
      </div>

      <div className="bottom-1/4 z-10 float-right inline-block w-40">
        <NextArticle
          url="/"
          title="Platform Competition in the Sharing Economy: Understanding How Ride-Hailing Services Influence New Car Purch..."
        />
      </div>
    </div>
  )
}

export default TitleDetailNextPrevResult
