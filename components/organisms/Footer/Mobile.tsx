import React from 'react'
import Image from 'next/image'

import { useTranslations } from 'next-intl'
import styles from './mobile.module.scss'
import { ActionItem, Space, Logo, ButtonFab } from 'components/atoms'
import MobileNav from './MobileNav'
import { PrivacyList, ExploreList, NewsList } from './Common'

import {
  IconSocialLinkedIn,
  IconSocialInstagram,
  IconSocialTwitter,
  IconSocialFacebook,
} from 'components/icons'

type Props = {}

const Footer: React.FC<Props> = ({}) => {
  const trans = useTranslations('footer')

  return (
    <>
      <Space size={5} />
      <div className={styles.footerBookImg} />
      <footer className={styles.wrapper}>
        <Space size={4} />
        <div className={styles.footerTop}>
          <section className={styles.company}>
            <Logo />
            <Space />
            <small>{trans('about_text')}</small>
            <Space />
          </section>

          <section className={styles.explore}>
            <p>Explore</p>
            <Space size={3} />
            <ExploreList />
            <Space />
            <p>Reach us</p>
            <div className="py__3 flex__center">
              <ButtonFab icon={<IconSocialFacebook />} small />
              <ButtonFab icon={<IconSocialInstagram />} small />
              <ButtonFab icon={<IconSocialLinkedIn />} small />
              <ButtonFab icon={<IconSocialTwitter />} small />
            </div>
            <Space size={3} />
          </section>

          <section className={styles.fromNews}>
            <p>{trans('news_title')}</p>
            <Space size={3} />
            <NewsList />
          </section>
        </div>
        <Space size={4} />
        <div className={styles.footerBottom}>
          <small>{trans('rights_text')}</small>
          <div className={styles.privacy}>
            <PrivacyList />
          </div>
          <div className={styles.seals}>
            <Image
              width={120}
              height={26}
              src="/img/powered_by_stripe.svg"
              alt="zendy stripe payment logo"
              placeholder="empty"
            />
          </div>
        </div>
        <Space size={6} />
      </footer>
      <MobileNav />
    </>
  )
}

export default Footer
