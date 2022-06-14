import React from 'react'
import classnames from 'classnames'
import Skeleton from 'react-loading-skeleton'
import isArray from 'lodash/isArray'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'

import routs from 'lib/routs'
import { useMediaQuery } from 'react-responsive'

import { ActionItem, Logo, ButtonFab } from 'components/atoms'
import {
  SelectLanguage,
  SelectTheme,
  SelectFontSize,
  SearchForm,
  // SearchFormAdvanced,
  CategoriesMenu,
  SidePopup
} from 'components/molecules'
import {
  IconArrowDown,
  // IconClear,
  IconSettings,
  IconGlobal
} from 'components/icons'
import { useSession } from 'next-auth/react'
import MobileHeaderNav from './MobileHeaderNav'

const Header = () => {
  const router = useRouter()
  const trans = useTranslations('header')
  const { data: session, status } = useSession()
  const btnGuestOrUser = session ? __getLoggedInUser(session) : <GetLoginBtn />
  const loading = status === 'loading'
  const isSearchPage = router.pathname === '/search'
  const [open, setOpen] = React.useState(false)
  const isMobile = useMediaQuery({
    query: '(max-width: 786px)'
  })

  return (
    <>
      <section className="bg-gray-200">
        <div className="flex justify-end px-4 py-1">
          <NavItems />
          <div className="mx-4">|</div>
          <div
            className="pointer flex"
            onClick={() => setOpen(true)}
            title="set language, theme, font size"
          >
            <ButtonFab small icon={<IconSettings />} />
            <ButtonFab small icon={<IconGlobal />} />
          </div>
        </div>
      </section>
      <nav
        className={classnames(
          'bg-white shadow-none md:shadow dark:bg-gray-800 relative md:sticky top-0 z-30',
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
          <div className="ml-auto flex">
            {loading ? <Skeleton height={40} width={156} /> : btnGuestOrUser}
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
        content={<SettingsPopUpContent />}
        open={open}
        openLocation={'center'}
        closeFunc={() => setOpen(false)}
      />
    </>
  )
}

const SettingsPopUpContent = () => {
  const trans = useTranslations('settings')

  return (
    <div className="px-8 py-8">
      <h2 className="text-xl font-medium mb-4 font-serif">{trans('title')}</h2>
      <SelectLanguage />
      <SelectTheme />
      <SelectFontSize />
    </div>
  )
}

// const AdvanceSearchBlock = ({ show }) => {
//   return (
//     show && (
//       <div key="advancedSearch" className="bg-white shadow ">
//         <section className="flex items-center mw__7 px-4 py-2">
//           <div className="items-center block">
//             <SearchFormAdvanced id="advancedSearch" />
//           </div>
//         </section>
//       </div>
//     )
//   )
// }

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
  const textBlock = (
    <div className="w-28 truncate">{__getUserNameInitials(session.user)}</div>
  )

  return (
    <ActionItem
      text={textBlock}
      icon={<IconArrowDown />}
      href={'/profile'}
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

export default Header
