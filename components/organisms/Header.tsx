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
import { ActionItem, Logo } from 'components/atoms'
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
    if (loading) return <Skeleton height={38} width={126} />
    if (session) return __getLoggedInUser(session)
    return <GetLoginBtn />
  }

  return (
    <React.Fragment key="header">
      <section key="headerTop" className="bg_nut2">
        <div className="flex justify-end items-center px-4 py-2 md:py-0">
          <NavItems />
          <div className="hidden sm:flex">
            <div className="mx-4 py-0.5">|</div>
            <ActionItem
              dataName="SetLanguage"
              className="mx-2"
              text={'En عربى සිං'}
              title="set language"
              onClick={() => setGlobalState({ openLangPopUp: true })}
            />
            <ActionItem
              dataName="SetSettings"
              className="mx-2 py-1.5"
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
          isHomePage ? 'bg_white' : 'bg_white md:sticky shadow-none md:shadow'
        )}
      >
        <div className="container px-4 py-2 md:py-3 flex items-center md:justify-between">
          <MobileHeaderNav />

          <Logo flag className="max-h-9 mr-3 pl-4 md:pl-0" />

          <CategoriesMenu />

          {!isMobile && (
            <div className="w-full justify-center flex top-0 h-12">
              {!isHomePage && <SearchForm id="mainSearch" />}
            </div>
          )}

          <ActionItem
            dataName="SetSettings"
            className={classnames(
              'px-4 hidden md:block',
              !isHomePage && 'hidden md:flex'
            )}
            wrap
            text={trans('my_link')}
            href="/library/collections"
          />
          <div className="ml-auto w-full" style={{ maxWidth: '8rem' }}>
            {btnGuestOrUser()}
          </div>
        </div>
      </nav>

      {!isHomePage && isMobile && (
        <section
          key="headerMobileSearch"
          className="w-full justify-center flex sticky top-0 bg_white pl-4 pb-2 pt-2.5 shadow z-10"
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
              <ActionItem
                dataName="NavItem"
                className="mx-2"
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

  return (
    <ActionItem
      dataName="HeaderLoginBtn"
      className="whitespace-nowrap"
      text={trans('login_btn_name')}
      href={routs.login}
      type="btn__secondary"
    />
  )
}

const __getLoggedInUser = (session) => {
  return (
    <div className="overflow-ellipsis overflow-auto">
      <ActionItem
        dataName="HeaderLoggedInUserBtn"
        text={__getUserNameInitials(session.user)}
        href={'/profile'}
        type="link"
      />
    </div>
  )
}

const __getUserNameInitials = ({ firstName, lastName, email }) => {
  if (firstName || lastName) {
    return `${firstName} ${lastName}`
  }

  if (email) {
    return `${email}`
  }

  return 'Good, day!'
}

export default Header
