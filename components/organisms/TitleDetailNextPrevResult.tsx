import React from 'react'
import NextArticle from 'components/organisms/NextArticle'

type Props = {}

const TitleDetailNextPrevResult: React.FC<Props> = () => {
  return (
    <div className="">
      <div className="">
        <NextArticle
          url="/"
          prev
          title="Platform Competition in the Sharing Economy: Understanding How Ride-Hailing Services Influence New Car Purch..."
        />
      </div>

      <div className="">
        <NextArticle
          url="/"
          title="Platform Competition in the Sharing Economy: Understanding How Ride-Hailing Services Influence New Car Purch..."
        />
      </div>
    </div>
  )
}

export default TitleDetailNextPrevResult
