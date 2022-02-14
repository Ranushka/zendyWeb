import React from 'react'
import classnames from 'classnames'
import Skeleton from 'react-loading-skeleton'
import styles from './desktop.module.scss'
import { ActionItem, Space, Logo, ButtonFab } from 'components/atoms'
import {
  SearchForm,
  SearchFormAdvanced,
  CategoriesMenu,
} from 'components/molecules'
import { IconArrowDown, IconClear } from 'components/icons'
import { attributes as t } from 'data/header.md'
import { useSession } from 'next-auth/react'
import useGlobel from 'context/GlobelContext'

const DesktopHeader: React.FC = ({}) => {
  const { data: session, status } = useSession()
  const btnGuestOrUser = session ? __getLoggedInUser(session) : __getLoginBtn()
  const [state, setState] = useGlobel()
  const loading = status === 'loading'

  return (
    <>
      <header
        key="headerContainer"
        className="edgeContainer bg__nut8 relative z__2"
      >
        <section className="mw__7">
          <div className={'px__3 py__1 flex__center'}>
            <div className="flex__left" />
            <NavItems />
          </div>
        </section>
      </header>
      <div
        key="searchContainer"
        className={classnames(
          'bg__white stage__2',
          !state.toggleAdvanceSearch && 'sticky',
          styles.searchContainer
        )}
      >
        <section className="flex__center mw__7 px__3 py__3">
          <Logo flag className={'flex__center mw__1'} />
          <CategoriesMenu />
          <div className="flex flex__center mw__4 block">
            {state.toggleAdvanceSearch ? (
              <div className="flex__center">
                <h2 className="color__nut7">Advanced Search</h2>
                <ButtonFab
                  href="/search"
                  icon={<IconClear />}
                  classNames={'pointer rounded'}
                  onClick={() =>
                    setState({ ...state, toggleAdvanceSearch: false })
                  }
                />
              </div>
            ) : (
              <SearchForm id="mainSearch" />
            )}
          </div>

          <ActionItem
            className="px__3"
            text="My Library"
            href="/library/collections"
          />
          <div className="text__right" style={{ width: '160px' }}>
            {loading ? <Skeleton height={40} width={156} /> : btnGuestOrUser}
          </div>
        </section>
      </div>
      {state.toggleAdvanceSearch && (
        <div key="advancedSearch" className={classnames('bg__white stage__2 ')}>
          <section className="flex__center mw__7 px__3 py__3">
            <div className="flex flex__center block">
              <SearchFormAdvanced id="advancedSearch" />
            </div>
          </section>
        </div>
      )}
    </>
  )
}

const NavItems = () => {
  return (
    t.nav_items &&
    t.nav_items.map(({ label, path }, key) => {
      return (
        <React.Fragment key={key}>
          <ActionItem text={label} href={path} className="color__white" />
          <Space />
        </React.Fragment>
      )
    })
  )
}

const __getLoginBtn = () => {
  return (
    <ActionItem
      className="textNoWrap"
      text={t.login_btn_name}
      href={'/authenticate'}
      type="btn__secondary"
    />
  )
}

const __getLoggedInUser = (session) => {
  return (
    <ActionItem
      text={__getUserNameInitials(session.user)}
      icon={<IconArrowDown />}
      href={'/profile'}
      className={styles.userProfile}
      type="btn__default"
    />
  )
}

const __getUserNameInitials = ({ firstName, lastName, email }) => {
  if (firstName || lastName) {
    return `${firstName} ${lastName}`
  }

  if (email) {
    return `${email}${email}`
  }

  return 'Good, day!'
}

export default DesktopHeader
