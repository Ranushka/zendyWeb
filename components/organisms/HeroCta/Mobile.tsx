import React from 'react'

import { ActionItem, Space } from 'components/atoms'

type Props = {}

const HeroCta: React.FC<Props> = () => {
  return (
    <>
      <section className="mw__3 px-4">
        <Space size={5} />
        <h3>Welcome to Zendy</h3>
        <Space size={3} />
        <h1>
          Premium publication database for the price of a Single Research Paper!
        </h1>
        <Space size={4} />
        <p>
          Zendy plus powered by aggregating content from world renowned
          publishers and their premium content, Our subscription helps to take
          your research to next level and keep you up to date with information.
        </p>
        <Space size={4} />
        <div className="text-center">
          <ActionItem
            text={'Start your Free Trial'}
            href={'#'}
            type="btn__primary"
          />
          <Space size={3} />
          <p>( No credit card required )</p>
        </div>
      </section>
    </>
  )
}

export default HeroCta
