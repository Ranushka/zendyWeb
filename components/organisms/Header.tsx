import React from 'react'
import classnames from 'classnames'
import Skeleton from 'react-loading-skeleton'
import isArray from 'lodash/isArray'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { useMediaQuery } from 'react-responsive'

import useGlobal from 'context/GlobalContext'
import routs from 'helpers/routs'
import { ActionLink, Logo, ActionBtn } from 'components/atoms'
import { SearchForm, CategoriesMenu, SidePopup } from 'components/organisms'
import SettingsPopUpContent from 'components/organisms/SettingsPopUpContent'
import LanguagePopUpContent from 'components/organisms/LanguagePopUpContent'
import PremiumPopUpContent from 'components/organisms/PremiumPopUpContent'
import MobileHeaderNav from './MobileHeaderNav'

const Header = () => {
  const router = useRouter()
  const trans = useTranslations('header')
  const { data: session, status } = useSession()

  const loading = status === 'loading'
  const isHomePage = router.pathname === routs.index
  const isMobile = useMediaQuery({
    query: '(max-width: 786px)'
  })
  const [
    { premiumPopupVisibility, openLangPopUp, openSettingsPopUp, setGlobalState }
  ] = useGlobal()

  const btnGuestOrUser = () => {
    if (loading) return <Skeleton height={38} width={150} />
    if (session) return __getLoggedInUser(session)
    return <GetLoginBtn />
  }

  return (
    <React.Fragment key="header">
      <section key="headerTop" className="bg_white relative z-50">
        <div className="-mb-2 hidden items-center justify-end px-4 md:flex">
          <NavItems />
          <div className="flex items-center">
            <div className="mx-4 py-0.5">|</div>
            <ActionBtn
              dataName="SetLanguage"
              className="mx-2 py-2"
              text={'En عربى සිං'}
              title="set language"
              onClick={() => setGlobalState({ openLangPopUp: true })}
            />
            <ActionBtn
              dataName="SetSettings"
              className="mx-2 py-2"
              text="Settings"
              title="set theme, font size"
              onClick={() => setGlobalState({ openSettingsPopUp: true })}
            />
          </div>
        </div>
      </section>
      <nav
        key="headerLogoSection"
        className={classnames(
          'relative top-0 z-30',
          isHomePage ? 'bg_white' : 'bg_white shadow-none md:sticky md:shadow'
        )}
      >
        <div className="container flex items-center px-4 py-4 md:justify-between md:py-3">
          <MobileHeaderNav />

          <Logo flag className="mr-3 ml-4 max-h-9 md:pl-0" />

          <CategoriesMenu />

          {!isMobile && (
            <div className="top-0 flex h-12 w-full justify-center">
              {!isHomePage && <SearchForm id="mainSearch" />}
            </div>
          )}

          <ActionLink
            dataName="SetSettings"
            className={classnames(
              'hidden px-4 md:block',
              !isHomePage && 'hidden md:flex'
            )}
            wrap
            text={trans('my_link')}
            href="/library/collections"
          />
          <div
            className="ml-auto flex w-full justify-end"
            style={{ maxWidth: '10rem' }}
          >
            {btnGuestOrUser()}
          </div>
        </div>
      </nav>

      {!isHomePage && isMobile && (
        <section
          key="headerMobileSearch"
          className="bg_white sticky top-0 z-10 flex w-full justify-center pl-4 pb-2.5 pt-2.5 shadow"
        >
          <SearchForm id="mainSearchMobile" />
        </section>
      )}

      <SidePopup
        key="LanguagePopUpContent"
        small
        content={<LanguagePopUpContent />}
        open={openLangPopUp}
        openLocation="center"
        closeFunc={() => setGlobalState({ openLangPopUp: false })}
      />
      <SidePopup
        key="SettingsPopUpContent"
        small
        content={<SettingsPopUpContent />}
        open={openSettingsPopUp}
        openLocation="center"
        closeFunc={() => setGlobalState({ openSettingsPopUp: false })}
      />
      <SidePopup
        key="PremiumPopUpContent"
        small
        content={<PremiumPopUpContent />}
        open={premiumPopupVisibility}
        openLocation="center"
        closeFunc={() => setGlobalState({ premiumPopupVisibility: false })}
      />
    </React.Fragment>
  )
}

const NavItems = () => {
  const trans = useTranslations('header')
  const nav_items = trans.raw('nav_items')

  return (
    <>
      {isArray(nav_items) &&
        nav_items.map(({ label, path }, key) => {
          return (
            <React.Fragment key={key}>
              <ActionLink
                dataName="NavItem"
                className="mx-2 py-2"
                text={label}
                href={path}
              />
            </React.Fragment>
          )
        })}
    </>
  )
}

const GetLoginBtn = () => {
  const trans = useTranslations('header')
  const router = useRouter()
  return (
    <ActionBtn
      dataName="HeaderLoginBtn"
      className="whitespace-nowrap"
      text={trans('login_btn_name')}
      onClick={() => router.push(routs.login)}
      type="btn__primary"
      bold
    />
  )
}

const __getLoggedInUser = (session) => {
  const router = useRouter()

  return (
    <div className="w-full overflow-visible overflow-ellipsis">
      {/* {JSON.stringify(session.user)} */}

      <ActionBtn
        dataName="HeaderLoginBtn"
        className="w-full whitespace-nowrap rounded-3xl "
        text={__getUserNameInitials(session.user)}
        onClick={() => router.push(routs.profile)}
        type="btn__default"
        bold
      />
    </div>
  )
}

const __getUserNameInitials = ({ firstName, lastName, email }) => {
  if (firstName || lastName) {
    return <span className="truncate">{`${firstName} ${lastName}`}</span>
  }

  if (email) {
    return (
      <span className="truncate">
        {/* <img
          className="absolute w-4"
          src={`https://0.gravatar.com/avatar/${email}=80`}
        /> */}
        <span className="truncate">{email}</span>
      </span>
    )
  }

  return 'Good, day!'
}

export default Header
