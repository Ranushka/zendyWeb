import React from 'react'
import classnames from 'classnames'
import Skeleton from 'react-loading-skeleton'
import { useSession } from 'next-auth/react'
import styles from './mobile.module.scss'
import { SidePopup } from 'components/molecules'
import { ActionItem, Space, Logo } from 'components/atoms'
import { SearchForm } from 'components/molecules'
import { IconMenu } from 'components/icons'
import { attributes as t } from 'data/header.md'

type Props = {
  isSearchPage?: boolean
}

const __sidePopupContent = () => (
  <div className={styles.menu__inner}>
    <Logo />
    <Space size={3} />
    <div className={styles.menu__inner__items}>
      <ActionItem text={'Pricing'} href={'/pricing'} />
    </div>
    <div className={styles.menu__inner__items}>
      <ActionItem text={'About'} href={'/about'} />
    </div>
    <div className={styles.menu__inner__items}>
      <ActionItem text={'FAQs'} href={'/faq'} />
    </div>
    <div className={styles.menu__inner__items}>
      <ActionItem text={'Contact'} href={'/contact'} />
    </div>
    <div className={styles.menu__inner__items}>
      <ActionItem text={'Magazines'} href={'/magazines'} />
    </div>
    <div className={styles.menu__inner__items}>
      <ActionItem text={'News'} href={'/news'} />
    </div>
    <div className={styles.menu__inner__items}>
      <ActionItem text={'Platform'} href={'/platform'} />
    </div>
    <div className={styles.menu__inner__items}>
      <ActionItem text={'CSR'} href={'/csr'} />
    </div>
    <div className={styles.menu__inner__items}>
      <ActionItem text={'Feedback'} href={'/feedback'} />
    </div>
    <div className={styles.menu__inner__items}>
      <ActionItem text={'Careers'} href={'/careers'} />
    </div>
    <div className={styles.menu__inner__items}>
      <ActionItem text={'Login/Register'} href={'/'} />
    </div>
  </div>
)

const __searchContent = () => (
  <section className={classnames('max-w-6xl py-2 bg-white shadow')}>
    <div className={classnames(styles.searchContainerInner, 'px-4')}>
      <SearchForm id="mainSearch" />
    </div>
  </section>
)

const __headerContent = () => {
  const [modelOpen, setModelOpen] = React.useState(false)
  const { data: session, status } = useSession()

  const btnGuestOrUser = session ? __getLoggedInUser(session) : __getLoginBtn()
  const loading = status === 'loading'

  return (
    <>
      <section className={classnames('py-2 bg-white shadow')}>
        <div className={classnames('px-4 flex flex__between')}>
          <ActionItem
            text=""
            className={styles.menuBtn}
            onClick={() => setModelOpen(true)}
            icon={<IconMenu />}
          />
          <Space size={2} />
          <Logo flag className={classnames('flex items-center', styles.logo)} />
          <div className="flex__left" />
          {loading ? <Skeleton height={48} width={60} /> : btnGuestOrUser}
        </div>
      </section>
      <SidePopup
        fullHeight
        content={__sidePopupContent()}
        open={modelOpen}
        closeFunc={() => setModelOpen(false)}
      />
    </>
  )
}

const MobileHeader = ({ isSearchPage }: Props) => {
  return (
    <header className={classnames(' block')}>
      {isSearchPage ? __searchContent() : __headerContent()}
    </header>
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
      text={__getUserNameInitials(session.user)}
      href={'/profile'}
      type="btn__secondary"
      className={styles.userProfile}
    />
  )
}

const __getUserNameInitials = ({ firstName, lastName }) => {
  if (firstName || lastName) {
    return `${firstName} ${lastName}`
  }

  return 'Good day,'
}

export default MobileHeader
