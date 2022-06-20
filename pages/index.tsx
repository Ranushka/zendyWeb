import React from 'react'
import { useTranslations } from 'next-intl'
import Head from 'next/head'
import { SubTitle } from 'components/organisms'
import { commonMessages, curatedMessages, homeMessages } from 'lib/getMessages'

import {
  HeroCtaHome,
  MagazineWidget,
  Curated,
  EmailSubscription,
  GetStartedWithUs,
  Testimonials,
  Subjects
} from 'components/organisms'

import { BaseTemplate } from 'components/templates'

const Home: React.FC = () => {
  const trans = useTranslations('common')

  return (
    <BaseTemplate>
      <Head>
        <title>{trans('title')}</title>
      </Head>
      <HeroCtaHome />
      <SubTitle
        title={trans('section1')}
        linkText={trans('see_all')}
        linkHref="/news"
      />
      <Curated />
      <SubTitle
        title={trans('section2')}
        linkText={trans('see_all')}
        linkHref="/subjects"
      />
      <Subjects />
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
