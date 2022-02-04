import React, { useContext, useState } from 'react'
import classnames from 'classnames'
import styles from './mobile.module.scss'

import { Space, CheckBox, ButtonFab, ActionItem } from 'components/atoms'
import { ReadMore, SidePopup } from 'components/molecules'
import { IconFilter, IconArrowDown, IconClose } from 'components/icons'

import { lockBody } from 'lib/helpers'

type Props = {}

const filterActions = () => {
  return (
    <div
      className={classnames(
        'flex__center stage__3 mx__3',
        styles.filterActions
      )}
    >
      <ActionItem text={'Clear filters'} href={'/'} />
      <div className="flex__left" />
      <ActionItem text={'Show (2k) Results'} href={'#'} type="btn__primary" />
    </div>
  )
}

const AuthorDetailsTitle = () => {
  return (
    <>
      <div className={classnames(styles.titleWrapper, 'flex flex__center')}>
        <h3 className="mute">Narrow by</h3>
        <div className="flex__left" />
        {/* <small className="mute"> 30K Results</small> */}
        <ActionItem
          text={'Sort by : Relevance'}
          href={'/'}
          icon={<IconArrowDown />}
        />
      </div>
    </>
  )
}

const FilterItems = (items) => {
  return items.map((item, id) => (
    <CheckBox key={id} id={item.id} name={item.name} label={item.name} />
  ))
}

const FilterGroups = (items) => {
  return items.map((item, id) => {
    const accordionContent = (
      <div>
        <Space size={2} />
        {FilterItems(item.items)}
      </div>
    )

    return (
      <div key={id}>
        <h5 className="color__nut6">{item.title}</h5>
        <ReadMore height={208} id={id} content={accordionContent} />
        <Space size={3} />
      </div>
    )
  })
}

const AuthorDetails: React.FC<Props> = ({}) => {
  const [modelOpen, setModelOpenState] = React.useState(false)

  const __getIcon = modelOpen ? <IconClose /> : <IconFilter />

  return (
    <>
      <SidePopup
        content={<SidePopupContent />}
        open={modelOpen}
        openLocation={'none'}
        closeFunc={() => setModelOpenState(false)}
      />

      <div className={classnames(styles.refineSearchBtnWrap)}>
        <ButtonFab
          classNames={'color__primary'}
          onClick={() => setModelOpenState(!modelOpen)}
          icon={__getIcon}
        />
      </div>
    </>
  )
}

const SidePopupContent = () => (
  <>
    {AuthorDetailsTitle()}
    <Space size={3} />
    {FilterGroups(data)}
    {filterActions()}
  </>
)

export default AuthorDetails

const data = [
  {
    title: 'Filter Title',
    items: [
      { id: 'fill0', name: 'some name', amount: '10k' },
      { id: 'fill1', name: 'other name', amount: '10k' },
      { id: 'fill2', name: 'totally deferent', amount: '10k' },
      { id: 'fill3', name: 'same name name', amount: '10k' },
      { id: 'fill4', name: 'deferent name', amount: '10k' },
      { id: 'fill66', name: 'totally deferent', amount: '10k' },
      { id: 'fill35', name: 'same name name', amount: '10k' },
      { id: 'fill44', name: 'deferent name', amount: '10k' },
    ],
  },
  {
    title: 'Filter Title',
    items: [
      { id: 'fill5', name: 'some name', amount: '10k' },
      { id: 'fill6', name: 'other name', amount: '10k' },
      { id: 'fill7', name: 'totally deferent', amount: '10k' },
      { id: 'fill8', name: 'same name name', amount: '10k' },
      { id: 'fill9', name: 'deferent name', amount: '10k' },
    ],
  },
  {
    title: 'Filter Title',
    items: [
      { id: 'fill10', name: 'some name', amount: '10k' },
      { id: 'fill11', name: 'other name', amount: '10k' },
      { id: 'fill12', name: 'totally deferent', amount: '10k' },
      { id: 'fill13', name: 'same name name', amount: '10k' },
      { id: 'fill14', name: 'deferent name', amount: '10k' },
    ],
  },
  {
    title: 'Filter Title',
    items: [
      { id: 'fill15', name: 'some name', amount: '10k' },
      { id: 'fill16', name: 'other name', amount: '10k' },
      { id: 'fill17', name: 'totally deferent', amount: '10k' },
      { id: 'fill18', name: 'same name name', amount: '10k' },
      { id: 'fill19', name: 'deferent name', amount: '10k' },
    ],
  },
]
