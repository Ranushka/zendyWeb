import React from 'react'
import classnames from 'classnames'
import styles from './index.module.scss'

type Props = {
  rightLabel: React.ReactNode
  leftLabel: React.ReactNode
  name?: string
  id: string
  checked: boolean
  onChange?: Function
  className?: string
}

const Switch: React.FC<Props> = ({
  rightLabel,
  leftLabel,
  name,
  id,
  checked,
  onChange = () => {},
  className,
}) => {
  return (
    <div className={classnames(styles.switchWrapper, className)}>
      <input
        className={'input__hide'}
        type="checkbox"
        name={name}
        checked={checked}
        id={id}
        onChange={() => onChange()}
      />

      <label htmlFor={id}>
        {leftLabel}
        <div />
        {rightLabel}
      </label>
    </div>
  )
}

export default Switch
