import React from 'react'
import Image from 'next/image'
import classnames from 'classnames'
import styles from './index.module.scss'

type Props = {}

const data = ['ebsco', 'sage', 'openAccess', 'ieee', 'wiley']

const Publishers: React.FC<Props> = ({}) => {
  return (
    <div>
      <h3 className="pt__0 py__4 px__3 color__nut6 text__center">
        You will get access to the premium and open content from
      </h3>
      <section
        className={classnames(
          'mw__6 text__center overflowScroll flex__center',
          styles.wrapper
        )}
      >
        {data.map((item, id) => (
          <div key={`publisher${id}`} className="mx__3">
            <Image
              width={200}
              height={70}
              src={`/publishers/${item}.png`}
              alt={item}
              placeholder="empty"
            />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Publishers
