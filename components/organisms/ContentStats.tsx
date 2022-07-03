import React from 'react'

type Props = {
  stat?: string
  title?: string
}

const ContentStats: React.FC<Props> = ({
  stat = '88.8 m',
  title = 'Title'
}) => {
  return (
    <div className="bg_nut2 mx-4 mb-8 py-4 rounded-md w-48">
      <h2>{stat}</h2>
      <h3>{title}</h3>
    </div>
  )
}

export default ContentStats
