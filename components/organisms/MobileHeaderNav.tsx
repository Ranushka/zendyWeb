import React from 'react'

import useGlobal from 'context/GlobalContext'
import { SidePopup } from 'components/organisms'
import { ActionBtn, ActionLink, Logo } from 'components/atoms'

const MobileHeaderNavFooter: React.FC<{}> = () => {
  const [{ setGlobalState }] = useGlobal()

  return (
    <div className="my-1 flex justify-between mr-8 pt-4">
      <ActionBtn
        dataName="LinkLanguage"
        className="px-6 py-2 bg_pri1 rounded"
        text={'En عربى සිං'}
        title="set language"
        onClick={() => setGlobalState({ openLangPopUp: true })}
      />
      <ActionBtn
        dataName="LinkSettings"
        className="px-6 py-2 bg_pri1 rounded"
        text="Settings"
        title="set theme, font size"
        onClick={() => setGlobalState({ openSettingsPopUp: true })}
      />
    </div>
  )
}

const __sidePopupContent = () => (
  <div className="h-screen relative overflow-scroll pb-8">
    <div className="py-4 px-8 flex">
      <Logo />
    </div>
    <div className="ml-8">
      <div className="my-1">
        <ActionLink
          dataName="LinkPricing"
          className="block py-2"
          text={'Pricing'}
          href={'/pricing'}
        />
      </div>

      <div className="my-1">
        <ActionLink
          dataName="LinkBlog"
          className="block py-2"
          text={'Blog'}
          href={'/blog'}
        />
      </div>
      <div className="my-1">
        <ActionLink
          dataName="LinkPlatform"
          className="block py-2"
          text={'Platform'}
          href={'/platform'}
        />
      </div>
      <div className="mt-4 mb-1 text_nut4 text-xs">Content</div>
      <div className="my-1">
        <ActionLink
          dataName="LinkPublishers"
          className="block py-2"
          text={'Publishers'}
          href={'/publishers'}
        />
      </div>
      <div className="my-1">
        <ActionLink
          dataName="LinkMagazines"
          className="block py-2"
          text={'Magazines'}
          href={'/magazines'}
        />
      </div>
      <div className="my-1">
        <ActionLink
          dataName="LinkJournals"
          className="block py-2"
          text={'Journals'}
          href={'/publishers'}
        />
      </div>
      <div className="my-1">
        <ActionLink
          dataName="LinkSubjects"
          className="block py-2"
          text={'Subjects'}
          href={'/publishers'}
        />
      </div>
      <div className="mt-4 mb-1 text_nut4 text-xs">Helpful</div>
      <div className="my-1">
        <ActionLink
          dataName="LinkAbout"
          className="block py-2"
          text={'About'}
          href={'/about'}
        />
      </div>
      <div className="my-1">
        <ActionLink
          dataName="LinkFaq"
          className="block py-2"
          text={'FAQs'}
          href={'/faq'}
        />
      </div>
      <div className="my-1">
        <ActionLink
          dataName="LinkContact"
          className="block py-2"
          text={'Contact'}
          href={'/contact'}
        />
      </div>
      <div className="my-1">
        <ActionLink
          dataName="LinkCsr"
          className="block py-2"
          text={'CSR'}
          href={'/csr'}
        />
      </div>
      <div className="my-1">
        <ActionLink
          dataName="LinkFeedback"
          className="block py-2"
          text={'Feedback'}
          href={'/feedback'}
        />
      </div>
      <div className="my-1">
        <ActionLink
          dataName="LinkCareers"
          className="block py-2"
          text={'Careers'}
          href={'/careers'}
        />
      </div>
      <MobileHeaderNavFooter />
    </div>
  </div>
)

const MobileToggleMenu = ({ setModelOpen }) => {
  return (
    <div className="flex md:hidden">
      <button
        onClick={() => setModelOpen()}
        type="button"
        className="text_nut5 hover:text_nut6 focus:outline-none focus:text_nut6"
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
