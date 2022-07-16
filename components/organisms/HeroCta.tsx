import React from 'react'

import { ActionBtn } from 'components/atoms'

type Props = {}

const HeroCta: React.FC<Props> = () => {
  return (
    <div>
      <section className="max-w-7xl flex px-4 m-auto py-8 justify-between">
        <div className={'px-8 mt-16 max-w-xl'}>
          <h3 className="text-xl text_nut5 font-serif">Welcome to Zendy</h3>

          <h1 className="pt-4 text-4xl text_nut7 font-serif leading-snug">
            Premium publication database for the price of a Single Research
            Paper!
          </h1>

          <p className="text-md py-4">
            Zendy plus powered by aggregating content from world renowned
            publishers and their premium content, Our database helps to take
            your research to next level and keep you up to date with
            information.
          </p>

          <div className="pt-2 pb-2 max-w-xs">
            <ActionBtn
              dataName="BtnStartTrial"
              text={'Start your Free Trial'}
              href={'#'}
              type="btn__primary"
              className="px-8"
            />
          </div>

          <p className="text_nut4 text-xs">( No credit card required )</p>
        </div>

        <div
          className="max-w-lg px-8"
          style={{
            width: '100%',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: 'url(/img/landingImg.png)'
          }}
        />
      </section>
    </div>
  )
}

export default HeroCta
