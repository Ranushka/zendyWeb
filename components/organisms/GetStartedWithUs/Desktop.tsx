import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ActionItem, Space } from 'components/atoms'

type Props = {}

const GetStartedWithUs: React.FC<Props> = ({}) => {
  const trans = useTranslations('cta_final')

  return (
    <section className={'mw__6 px__3 py__5 text__center'}>
      <Space />
      <div className={'relative stage__2 rounded__2 bg__white px__3 py__5'}>
        <Image
          placeholder="empty"
          objectFit="cover"
          className="rounded__2"
          layout="fill"
          alt="water_portrait"
          src="/img/lastCallBackground.png"
        />
        <div className="relative z__1">
          <h2>{trans('title')}</h2>
          <p>{trans('subtitle')}</p>
          <Space />
          <ActionItem text={trans('btn')} href={'#'} type="btn__primary" />
        </div>
      </div>
    </section>
  )
}

export default GetStartedWithUs
