import React from 'react'

import { Space } from 'components/atoms'

type Props = {}

const Mobile: React.FC<Props> = () => {
  return (
    <section className="px-4">
      <Space size={5} />
      <h3 className="text-center mute">Welcome to Zendy</h3>
      <h1 className="text-center">“Research is creating new knowledge.”</h1>
    </section>
  )
}

export default Mobile
