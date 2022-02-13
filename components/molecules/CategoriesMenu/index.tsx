import React from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'
import { IconArrowDown } from 'components/icons'
import { ActionItem } from 'components/atoms'
import { attributes as Data } from 'data/header.md'

const CategoriesMenu: React.FC<{}> = (props) => {
  return (
    <div className={classnames(styles.wrapper, 'textNoWrap')}>
      <ActionItem
        href="/"
        text={Data.mega_menu_btn}
        icon={<IconArrowDown />}
        type="btn__default"
        onClick={() => {}}
      />
      <div className={classnames('bg__white rounded__1 stage__3', styles.menu)}>
        <div className="flex py__4">{__getMenuColumns()}</div>
      </div>
    </div>
  )
}

const __getMenuColumns = () => {
  return (
    Data.mega_menu_items &&
    Data.mega_menu_items.map(({ title, items }, key) => {
      return (
        <div className="px__4" key={key}>
          <small className="mute">{title}</small>
          <div className="gaps__3"></div>
          {__getMenuItems(items)}
        </div>
      )
    })
  )
}

const __getMenuItems = (list: []) => {
  return (
    list &&
    list.map(({ label, path }, key) => {
      return <ActionItem key={key} text={label} href={path} />
    })
  )
}

export default CategoriesMenu
