import { useTranslations } from 'next-intl'

import { Space } from 'components/atoms'

type Props = {}

const Desktop: React.FC<Props> = () => {
  const trans = useTranslations('common')

  return (
    <section className="font-serif text-center mt-20 mb-4">
      <h3 className="text-2xl text-gray-500">{trans('cta_sub')}</h3>
      <h1 className="text-4xl">{trans('cta')}</h1>
    </section>
  )
}

export default Desktop
