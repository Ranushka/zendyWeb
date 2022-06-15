import React from 'react'

import { SidePopup } from 'components/molecules'
import { ActionItem, Logo } from 'components/atoms'

const __sidePopupContent = () => (
  <div className="mx-8 my-8">
    <Logo />
    <div className="pt-4" />
    <div className="my-2">
      <ActionItem className="block py-2" text={'Pricing'} href={'/pricing'} />
    </div>
    <div className="my-2">
      <ActionItem className="block py-2" text={'About'} href={'/about'} />
    </div>
    <div className="my-2">
      <ActionItem className="block py-2" text={'FAQs'} href={'/faq'} />
    </div>
    <div className="my-2">
      <ActionItem className="block py-2" text={'Contact'} href={'/contact'} />
    </div>
    <div className="my-2">
      <ActionItem
        className="block py-2"
        text={'Magazines'}
        href={'/magazines'}
      />
    </div>
    <div className="my-2">
      <ActionItem className="block py-2" text={'News'} href={'/news'} />
    </div>
    <div className="my-2">
      <ActionItem className="block py-2" text={'Platform'} href={'/platform'} />
    </div>
    <div className="my-2">
      <ActionItem className="block py-2" text={'CSR'} href={'/csr'} />
    </div>
    <div className="my-2">
      <ActionItem className="block py-2" text={'Feedback'} href={'/feedback'} />
    </div>
    <div className="my-2">
      <ActionItem className="block py-2" text={'Careers'} href={'/careers'} />
    </div>
    <div className="my-2">
      <ActionItem className="block py-2" text={'Login/Register'} href={'/'} />
    </div>
  </div>
)

const MobileToggleMenu = ({ setModelOpen }) => {
  return (
    <div className="flex md:hidden">
      <button
        onClick={() => setModelOpen()}
        type="button"
        className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
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

const MobileHeaderNav = () => {
  const [modelOpen, setModelOpen] = React.useState(false)

  const toggle = () => {
    setModelOpen(!modelOpen)
  }

  return (
    <>
      <MobileToggleMenu setModelOpen={toggle} />
      <SidePopup
        fullHeight
        openLocation="left"
        content={__sidePopupContent()}
        open={modelOpen}
        closeFunc={() => setModelOpen(false)}
      />
    </>
  )
}

export default MobileHeaderNav
