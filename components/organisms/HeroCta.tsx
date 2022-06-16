import React from 'react'

import { ActionItem } from 'components/atoms'

type Props = {}

const HeroCta: React.FC<Props> = () => {
  return (
    <>
      <section className="max-w-6xl flex px-4">
        <div className={'mw__3  px-8  pl__0'}>
          <h3>Welcome to Zendy</h3>

          <h1>
            Premium publication database for the price of a Single Research
            Paper!
          </h1>

          <p>
            Zendy plus powered by aggregating content from world renowned
            publishers and their premium content, Our subscription helps to take
            your research to next level and keep you up to date with
            information.
          </p>

          <ActionItem
            text={'Start your Free Trial'}
            href={'#'}
            type="btn__primary"
          />

          <p>( No credit card required )</p>
        </div>

        <div
          className={'mw__3 px-8  pr__0'}
          style={{
            width: '100%',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: 'url(/img/landingImg.png)'
          }}
        />
      </section>
    </>
  )
}

export default HeroCta
