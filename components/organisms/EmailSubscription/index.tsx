import { useTranslations } from 'next-intl'
import classnames from 'classnames'
import styles from './index.module.scss'
import { ActionItem, Input, Space, Select } from 'components/atoms'

type Props = {}

const GetStartedWithUs: React.FC<Props> = ({}) => {
  const trans = useTranslations('subscribe')

  return (
    <section className={classnames('bg__white py__5 stage__2')}>
      <div className={'mw__4 px__3'}>
        <h2>{trans('title')}</h2>
        <p>{trans('subtitle')}</p>
        <Space />
        <form className={styles.formWrapper}>
          <Select
            block
            id="primaryInterest"
            name="name"
            data={['Researcher', 'Mathematics']}
          />
          <Input
            id="subscribeEmail"
            placeholder="your@email.com"
            name="name"
            type="email"
            autoComplete="name"
            block
            required
          />
          <ActionItem text={trans('btn')} href={'#'} type="btn__secondary" />
        </form>
        <Space size={3} />
        <small>{trans('description')}</small>
      </div>
    </section>
  )
}

export default GetStartedWithUs
