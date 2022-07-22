import React from 'react'
import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import { SubTitle, SearchForm } from 'components/organisms'
import RecentSearchKeywords from 'components/organisms/RecentSearchKeywords'
import {
  JournalPersonalized,
  SubjectPersonalized,
  PublishersPersonalized
} from 'components/organisms/PersonalizedContent'

import {
  commonMessages,
  curatedMessages,
  homeMessages
} from 'helpers/getMessages'

import {
  HeroCtaHome,
  MagazineWidget,
  Curated,
  EmailSubscription,
  Testimonials
  // Subjects
} from 'components/organisms'

import BaseTemplate from 'components/templates/BaseTemplate'

const GetStartedWithUs = dynamic(
  () => import('components/organisms/GetStartedWithUs')
)

const Home: React.FC = () => {
  const trans = useTranslations('common')
  const [isSticky, setIsSticky] = React.useState(false)
  const homeSearchStickyRef = React.useRef(null)

  React.useEffect(() => {
    const cachedRef = homeSearchStickyRef.current,
      observer = new IntersectionObserver(
        ([e]) => setIsSticky(e.intersectionRatio < 1),
        { threshold: [1] }
      )

    observer.observe(cachedRef)

    return function () {
      observer.unobserve(cachedRef)
    }
  }, [])

  return (
    <BaseTemplate>
      <Head>
        <title>{trans('title')}</title>
      </Head>
      <HeroCtaHome />
      <section
        ref={homeSearchStickyRef}
        className={classNames(
          'sticky flex justify-center -top-0.5 z-20 px-4 py-2 bg_white',
          isSticky && 'shadow bg_white'
        )}
      >
        <SearchForm id="mainSearch" />
      </section>
      <RecentSearchKeywords />
      <SubTitle
        title={trans('section1')}
        linkText={trans('see_all')}
        linkHref="/news"
      />
      <Curated key="curated" />
      <JournalPersonalized />
      <PublishersPersonalized />
      <SubjectPersonalized />

      {/* <SubTitle
        title={trans('section2')}
        linkText={trans('see_all')}
        linkHref="/subjects"
      />
      <Subjects key="Subjects" /> */}
      <SubTitle
        title={trans('section3')}
        linkText={trans('see_all')}
        linkHref="/magazines"
      />
      <MagazineWidget />
      <Testimonials />
      <EmailSubscription />
      <GetStartedWithUs />
    </BaseTemplate>
  )
}

export async function getStaticProps({ locale }) {
  const commonMsg = await commonMessages(locale)
  const curatedMsg = await curatedMessages(locale)
  const homeMsg = await homeMessages(locale)

  const msg = {
    ...commonMsg,
    ...curatedMsg,
    ...homeMsg
  }

  return {
    props: {
      messages: msg
    }
  }
}

export default Home
