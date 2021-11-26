import React, { useContext } from 'react'
import classnames from 'classnames'
import styles from './index.module.scss'
import DeviceTypeContext from 'context/DeviceTypeContext'

import { ActionItem, Space } from 'components/atoms'
import { url } from 'inspector'

type Props = {}

const HeroCta: React.FC<Props> = ({}) => {
  const { isMobile } = useContext(DeviceTypeContext)

  return (
    <>
      <Space size={5} />
      <section className="mw__6 flex px__3">
        <div className={'mw__3  px__4  pl__0'}>
          <h3>Welcome to Zendy</h3>
          <Space size={3} />
          <h1>
            Premium publication database for the price of a Single Research
            Paper!
          </h1>
          <Space size={4} />
          <p>
            Zendy plus powered by aggregating content from world renowned
            publishers and their premium content, Our subscription helps to take
            your research to next level and keep you up to date with
            information.
          </p>
          <Space size={4} />
          <ActionItem
            text={'Start your Free Trial'}
            href={'#'}
            type="btn__primary"
          />
          <Space size={3} />
          <p>( No credit card required )</p>
        </div>
        {!isMobile && (
          <div
            className={'mw__3 px__4  pr__0'}
            style={{
              width: '100%',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundImage: 'url(/img/landingImg.png)',
            }}
          />
          // <img
          //   className={"mw__3 px__4  pr__0"}
          //   src={`/img/landingImg.png`}
          //   alt={"landing image"}
          // />
        )}
      </section>
    </>
  )
}

export default HeroCta
