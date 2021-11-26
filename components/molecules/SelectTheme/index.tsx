import React from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'
import { IconArrowUp } from 'components/icons'
import { Select } from 'components/atoms'

type Props = {}

const SelectTheme: React.FC<Props> = () => {
  return (
    <div className={classnames(styles.wrapper, 'noSelect')}>
      <Select
        id="selectTheme"
        name="name"
        label={'App theme'}
        className={'mb__0'}
        data={['Light', 'Dark', 'Paper']}
      />
    </div>
  )
}

export default SelectTheme
