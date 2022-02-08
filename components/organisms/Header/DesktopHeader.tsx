import React from 'react'
import classnames from 'classnames'
import Skeleton from 'react-loading-skeleton'
import styles from './desktop.module.scss'
import { ActionItem, Space, Logo } from 'components/atoms'
import { SearchForm, CategoriesMenu } from 'components/molecules'
import { IconLibrary } from 'components/icons'
import { attributes as t } from 'data/header.md'
import { useSession } from 'next-auth/react'

const DesktopHeader: React.FC = ({}) => {
  const { data: session, status } = useSession()
  const btnGuestOrUser = session ? __getLoggedInUser(session) : __getLoginBtn()
  const loading = status === 'loading'

  return (
    <>
      <header
        key="headerContainer"
        className="edgeContainer bg__white relative z__2"
      >
        <section className="mw__6">
          <div className={'px__3 py__3 flex__center'}>
            <Logo flag className={'flex__center mw__1'} />
            <Space size={2} />
            <div className="flex__left" />
            <CategoriesMenu />
            <NavItems />
            <div className="flex__left" />
            {loading ? <Skeleton height={48} width={158} /> : btnGuestOrUser}
          </div>
        </section>
      </header>
      <div
        key="searchContainer"
        className={classnames('bg__white stage__2', styles.searchContainer)}
      >
        <section className="mw__6">
          <Space size={2} />
          <div className="flex flex__center px__3 mw__4">
            <SearchForm id="mainSearch" />
          </div>
          <Space size={2} />
        </section>
      </div>
    </>
  )
}

const NavItems = () => {
  return (
    t.nav_items &&
    t.nav_items.map(({ label, path }, key) => {
      return (
        <React.Fragment key={key}>
          <ActionItem text={label} href={path} />
          <Space />
        </React.Fragment>
      )
    })
  )
}

const __getLoginBtn = () => {
  return (
    <ActionItem
      text={t.login_btn_name}
      href={'/authenticate'}
      type="btn__secondary"
    />
  )
}

const __getLoggedInUser = (session) => {
  console.log(session.user)

  return (
    <ActionItem
      text={__getUserNameInitials(session.user)}
      href={'/profile'}
      type="btn__secondary"
      // className={styles.profilePic}
    />
  )
}

const __getUserNameInitials = ({ firstName, lastName }) => {
  if (firstName || lastName) {
    return `${firstName} ${lastName}`
  }

  return 'Good day Sir,'
}

export default DesktopHeader
