import React from 'react'
import { useTranslations } from 'next-intl'
import isArray from 'lodash/isArray'
import styles from './index.module.scss'
import classnames from 'classnames'
import { IconArrowDown } from 'components/icons'
import { ActionItem } from 'components/atoms'
// import { attributes as Data } from 'data/header.md'

const CategoriesMenu: React.FC<{}> = () => {
  const trans = useTranslations('header')

  return (
    <div className={classnames(styles.wrapper, 'textNoWrap hidden md:flex')}>
      <ActionItem
        href="/"
        text={trans('mega_menu_btn')}
        icon={<IconArrowDown />}
        type="btn__default"
        className="mx-3"
        onClick={() => {}}
      />
      <div className={classnames('bg-white rounded-md stage__3', styles.menu)}>
        <div className="flex py-8">{__getMenuColumns()}</div>
      </div>
    </div>
  )
}

const __getMenuColumns = () => {
  const trans = useTranslations('header')
  const mega_menu_items = trans.raw('mega_menu_items')

  return (
    isArray(mega_menu_items) &&
    mega_menu_items.map(({ title, items }, key) => {
      return (
        <div className="px-8" key={key}>
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
