import isArray from 'lodash/isArray'
import { useTranslations } from 'next-intl'
import classnames from 'classnames'
import { Testimonial } from 'components/molecules'
import { Space } from 'components/atoms'
import styles from './desktop.module.scss'
import { attributes as Data } from 'data/widgets/testimonials.md'

type Props = {}

const Testimonials: React.FC<Props> = ({}) => {
  const trans = useTranslations('testimonial')
  const testimonialsList = trans.raw('testimonials')

  return (
    <section className="my__5">
      <div className="text__center">
        <h2>{trans('title')}</h2>
        <p>{trans('subtitle')}</p>
      </div>

      <Space size={4} />
      <div className={classnames(styles.testimonialsWrap, 'mw__6 px__3')}>
        {isArray(testimonialsList) &&
          testimonialsList.map(({ name, quote, title }, id) => (
            <Testimonial
              key={`uspItem${id}`}
              quote={quote}
              name={name}
              title={title}
            />
          ))}
      </div>
    </section>
  )
}

export default Testimonials
