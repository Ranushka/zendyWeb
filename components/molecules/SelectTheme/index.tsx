import React from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'
import { Select } from 'components/atoms'

type Props = {}

const SelectTheme: React.FC<Props> = () => {
  function onChange(params: string) {}

  return (
    <div className={classnames(styles.wrapper, 'noSelect')}>
      <Select
        id="selectTheme"
        name="name"
        label={'App theme'}
        className={'mb__0'}
        onChange={() => onChange}
        data={['Light', 'Dark', 'Paper']}
      />
    </div>
  )
}

export default SelectTheme
