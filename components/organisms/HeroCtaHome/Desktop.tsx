import { useTranslations } from 'next-intl'

import { Space } from 'components/atoms'

type Props = {}

const Desktop: React.FC<Props> = ({}) => {
  const trans = useTranslations('common')

  return (
    <section className="px__3">
      <Space size={6} />
      <h3 className="text__center mute">{trans('cta_sub')}</h3>
      <h1 className="text__center">{trans('cta')}</h1>
      <Space size={4} />
    </section>
  )
}

export default Desktop
