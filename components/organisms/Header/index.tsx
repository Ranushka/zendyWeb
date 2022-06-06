import React from 'react'
import classnames from 'classnames'
import Skeleton from 'react-loading-skeleton'
import isArray from 'lodash/isArray'
import { useTranslations } from 'next-intl'

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
// import useGlobal from 'context/GlobalContext'

type Props = {
  isSearchPage?: boolean
}

const DesktopHeader = ({ isSearchPage }: Props) => {
  const trans = useTranslations('header')
  const { data: session, status } = useSession()
  const btnGuestOrUser = session ? __getLoggedInUser(session) : <GetLoginBtn />
  // const [state, setState] = useGlobal()
  const loading = status === 'loading'

  const [open, setOpen] = React.useState(false)
  return (
    <>
      <section className="bg-gray-200 hidden md:block">
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
      <nav className="bg-white shadow dark:bg-gray-800 sticky top-0 z-10">
        <div className="container px-4 py-2 flex items-center md:justify-between">
          {!isSearchPage && <MobileToggleMenu />}

          <Logo
            flag
            className={classnames(
              'max-h-9 mr-3 pl-4 md:pl-0',
              isSearchPage && 'hidden md:block'
            )}
          />

          <CategoriesMenu />

          <div
            className={classnames(
              'w-full justify-center flex',
              !isSearchPage && 'hidden md:flex'
            )}
          >
            <div className="w-full max-w-2xl">
              <SearchForm id="mainSearch" />
            </div>
          </div>

          <ActionItem
            className={classnames(
              'px-4 hidden md:block',
              !isSearchPage && 'hidden md:flex'
            )}
            text={trans('my_link')}
            href="/library/collections"
          />

          <div
            className={classnames('ml-auto', isSearchPage && 'hidden md:flex')}
          >
            {loading ? <Skeleton height={40} width={156} /> : btnGuestOrUser}
          </div>
        </div>
      </nav>
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
//           <div className="flex flex items-center block">
//             <SearchFormAdvanced id="advancedSearch" />
//           </div>
//         </section>
//       </div>
//     )
//   )
// }

const MobileToggleMenu = () => {
  return (
    <div className="flex md:hidden">
      <button
        type="button"
        className="text-gray-500
                       dark:text-gray-200
                       hover:text-gray-600
                       dark:hover:text-gray-400
                       focus:outline-none focus:text-gray-600
                       dark:focus:text-gray-400
                       "
        aria-label="toggle menu"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path
            fillRule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          ></path>
        </svg>
      </button>
    </div>
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
