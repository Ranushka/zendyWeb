import React from 'react'
import classnames from 'classnames'
import Skeleton from 'react-loading-skeleton'
import styles from './desktop.module.scss'
import { ActionItem, Space, Logo } from 'components/atoms'
import { SearchForm, CategoriesMenu } from 'components/molecules'
import { IconLibrary } from 'components/icons'
import { attributes as t } from 'data/header.md'
import { useSession } from 'next-auth/client'

const DesktopHeader: React.FC = ({}) => {
  const [session, loading] = useSession()
  const btnGuestOrUser = session ? __getLoggedInUser(session) : __getLoginBtn()

  return (
    <>
      <header
        key="headerContainer"
        className={classnames(
          'edgeContainer bg__white',
          styles.headerContainer
        )}
      >
        <section className="mw__6">
          <div className={classnames('px__3 py__3 flex__align_center')}>
            <Logo
              flag
              className={classnames('flex__align_center', styles.logo)}
            />
            <CategoriesMenu />
            <ActionItem text={'Magazines'} href={'/magazines'} />
            <div className="flex__left" />
            <NavItems />
            {loading ? <Skeleton height={48} width={60} /> : btnGuestOrUser}
          </div>
        </section>
      </header>
      <div
        key="searchContainer"
        className={classnames('bg__white stage__2', styles.searchContainer)}
      >
        <section className="mw__6">
          <Space size={2} />
          <div className={classnames('flex flex__space_between px__3')}>
            <SearchForm id="mainSearch" />
            <Space />
            <ActionItem
              className="flex__wrap__no"
              text={t.advanced_search}
              href={'/advanced_search'}
            />
            <Space />
            <ActionItem
              text={t.my_library}
              href={'/library/collections'}
              icon={<IconLibrary />}
            />
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
  return (
    <ActionItem
      text={__getUserNameInitials(session.user.name)}
      href={'/profile'}
      type="btn__secondary"
      className={styles.profilePic}
    />
  )
}

const __getUserNameInitials = (name) => {
  if (name) {
    return name.substring(0, 2)
  }

  return 'na'
}

export default DesktopHeader
