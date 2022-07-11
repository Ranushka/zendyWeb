import React from 'react'
import { useTranslations } from 'next-intl'
import isArray from 'lodash/isArray'
import { IconArrowDown } from 'components/icons'
import { ActionItem } from 'components/atoms'

const CategoriesMenu: React.FC<{}> = () => {
  const trans = useTranslations('header')

  return (
    <div className="desktopMenu textNoWrap hidden md:flex">
      <ActionItem
        dataName="CategoriesMenu"
        href="/"
        wrap
        text={trans('mega_menu_btn')}
        icon={<IconArrowDown />}
        type="btn__default"
        className="mx-3"
        onClick={() => {}}
      />
      <section className="bg_white rounded-md shadow-lg absolute mt-10 hidden menu">
        <div className="flex py-8">{__getMenuColumns()}</div>
      </section>
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
          <small className="text_nut5 mb-4">{title}</small>
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
      return (
        <ActionItem
          dataName="CategoriesMenuItem"
          className="my-2 block"
          key={key}
          text={label}
          href={path}
        />
      )
    })
  )
}

export default CategoriesMenu
