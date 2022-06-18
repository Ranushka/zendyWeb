import React from 'react'
import classnames from 'classnames'
import Skeleton from 'react-loading-skeleton'
import isArray from 'lodash/isArray'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'

import routs from 'lib/routs'
import { useMediaQuery } from 'react-responsive'

import { ActionItem, Logo } from 'components/atoms'
import { SearchForm, CategoriesMenu, SidePopup } from 'components/molecules'
import SettingsPopUpContent from 'components/molecules/SettingsPopUpContent'
import LanguagePopUpContent from 'components/molecules/LanguagePopUpContent'

import { useSession } from 'next-auth/react'
import MobileHeaderNav from './MobileHeaderNav'

const Header = () => {
  const router = useRouter()
  const trans = useTranslations('header')
  const { data: session, status } = useSession()

  const loading = status === 'loading'
  const isSearchPage = router.pathname === '/search'
  const [open, setOpen] = React.useState(false)
  const [openLangPopUp, setOpenLangPopUp] = React.useState(false)
  const isMobile = useMediaQuery({
    query: '(max-width: 786px)'
  })
  const btnGuestOrUser = () => {
    if (loading) return <Skeleton height={40} width={126} />
    if (session) return __getLoggedInUser(session)
    return <GetLoginBtn />
  }

  return (
    <>
      <section className="bg-gray-200">
        <div className="flex justify-end items-center px-4 py-1">
          <NavItems />
          <div className="mx-4">|</div>
          <div
            className="cursor-pointer select-none mx-2"
            onClick={() => setOpenLangPopUp(true)}
            title="set language"
          >
            En عربى සිං
          </div>
          <div
            className="cursor-pointer select-none mx-2"
            onClick={() => setOpen(true)}
            title="set theme, font size"
          >
            Settings
          </div>
        </div>
      </section>
      <nav
        className={classnames(
          'bg-white shadow-none md:shadow relative md:sticky top-0 z-30',
          !isMobile && 'shadow'
        )}
      >
        <div className="container px-4 py-2 flex items-center md:justify-between">
          <MobileHeaderNav />

          <Logo flag className="max-h-9 mr-3 pl-4 md:pl-0" />

          <CategoriesMenu />

          {!isMobile && (
            <div className="w-full justify-center flex top-0">
              <SearchForm id="mainSearch" />
            </div>
          )}

          <ActionItem
            className={classnames(
              'px-4 hidden md:block',
              !isSearchPage && 'hidden md:flex'
            )}
            text={trans('my_link')}
            href="/library/collections"
          />
          <div
            className="ml-auto w-full overflow-ellipsis overflow-auto"
            style={{ maxWidth: '8rem' }}
          >
            {btnGuestOrUser()}
          </div>
        </div>
      </nav>
      {isMobile && (
        <div className="w-full justify-center flex sticky top-0 bg-white px-4 pb-4 pt-3 shadow z-10">
          <SearchForm id="mainSearchMobile" />
        </div>
      )}
      <SidePopup
        small
        content={<LanguagePopUpContent />}
        open={openLangPopUp}
        openLocation="center"
        closeFunc={() => setOpenLangPopUp(false)}
      />
      <SidePopup
        small
        content={<SettingsPopUpContent />}
        open={open}
        openLocation="center"
        closeFunc={() => setOpen(false)}
      />
    </>
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
              <ActionItem className="mx-2" text={label} href={path} />
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
      className="whitespace-nowrap"
      text={trans('login_btn_name')}
      href={routs.login}
      type="btn__secondary"
    />
  )
}

const __getLoggedInUser = (session) => {
  return (
    <ActionItem
      // className="overflow-ellipsis "
      text={__getUserNameInitials(session.user)}
      href={'/profile'}
      type="link"
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

export default Header
