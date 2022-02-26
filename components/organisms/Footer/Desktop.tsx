import React from 'react'
import Image from 'next/image'
import isArray from 'lodash/isArray'
import { useTranslations } from 'next-intl'
import styles from './desktop.module.scss'
import { ActionItem, Space, Logo, ButtonFab } from 'components/atoms'
import { PrivacyList, ExploreList, NewsList } from './Common'
import {
  IconSocialLinkedIn,
  IconSocialInstagram,
  IconSocialTwitter,
  IconSocialFacebook,
} from 'components/icons'

const Footer: React.FC<{}> = ({}) => {
  const trans = useTranslations('footer')

  return (
    <>
      <Space size={5} />
      <div className={styles.footerBookImg} />
      <footer className={styles.wrapper}>
        <Space size={5} />
        <div className={styles.footerTop}>
          <section className={styles.company}>
            <Logo className="pt__0 pb__0" />
            <div className="mw__1 my__4 small ml__0">{trans('about_text')}</div>
          </section>

          <section className={styles.explore}>
            <p>{trans('explore_title')}</p>
            <Space size={3} />
            <div className="mw__1 pull__l2">
              <ExploreList />
            </div>
            <Space />
            <p>{trans('reach_title')}</p>
            <Space size={3} />

            <div className="mw__1 pull__l2">
              <ButtonFab icon={<IconSocialFacebook />} small />
              <ButtonFab icon={<IconSocialLinkedIn />} small />
              <ButtonFab icon={<IconSocialInstagram />} small />
              <ButtonFab icon={<IconSocialTwitter />} small />
            </div>
          </section>

          <section className={styles.fromNews}>
            <p>{trans('news_title')}</p>
            <Space size={3} />
            <NewsList />
          </section>
        </div>
        <Space size={5} />
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
        <Space size={5} />
      </footer>
    </>
  )
}

export default Footer
