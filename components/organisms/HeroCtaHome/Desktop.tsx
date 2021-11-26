import React from 'react'

import { Space } from 'components/atoms'

type Props = {}

const Desktop: React.FC<Props> = ({}) => {
  return (
    <section className="px__3">
      <Space size={6} />
      <h3 className="text__center mute">Welcome to Zendy</h3>
      <h1 className="text__center">“Research is creating new knowledge.”</h1>
      <Space size={4} />
    </section>
  )
}

export default Desktop
