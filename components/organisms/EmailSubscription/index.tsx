import React from 'react'
import classnames from 'classnames'
import styles from './index.module.scss'
import { ActionItem, Input, Space, Select } from 'components/atoms'

type Props = {}

const GetStartedWithUs: React.FC<Props> = ({}) => {
  return (
    <section className={classnames('bg__white py__5 stage__2')}>
      <div className={'mw__4 px__3'}>
        <h2>
          Subscribe to your own weekly briefing of research publications in your
          field.
        </h2>
        <p>
          Be on your toes, stay ahead the cave, get your weekly briefing in to
          your Email.
        </p>
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
          <ActionItem text={'Count me in'} href={'#'} type="btn__secondary" />
        </form>
        <Space size={3} />
        <small>
          We take privacy very seriously we will not sure your or sell your
          email to any third party.You can easily unsubscribe or easily manage
          subscription upon your sign up
        </small>
      </div>
    </section>
  )
}

export default GetStartedWithUs
