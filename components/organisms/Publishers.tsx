import React from 'react'
import Image from 'next/image'

type Props = {}

const data = ['ebsco', 'sage', 'openAccess', 'ieee', 'wiley']

const Publishers: React.FC<Props> = () => {
  return (
    <div className="py-10">
      <h3 className="py-8 px-4 text-center text-3xl text_nut5 font-serif">
        You will get access to the premium content from
      </h3>
      <section className="text-center overflowScroll flex justify-center mx-auto">
        {data.map((item, id) => (
          <div key={`publisher${id}`} className="mx-4 mix-blend-darken">
            <Image
              width={160}
              height={60}
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
