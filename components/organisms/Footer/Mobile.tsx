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
  IconSocialFacebook
} from 'components/icons'

type Props = {}

const Footer: React.FC<Props> = () => {
  const trans = useTranslations('footer')

  return (
    <>
      <Space size={5} />
      <svg
        className="block"
        preserveAspectRatio="none"
        viewBox="0 0 4605 356"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4605 356H2.47205e-08C2.47205e-08 356 -3.09006e-08 342.094 2.47205e-08 250.313C362.259 0.619263 1081.94 0 1081.94 0C2198.5 11.1547 2302.5 356 2302.5 356C2302.5 356 2595.69 -19.4688 3571.95 80.6562C4548.21 180.781 4605 0 4605 0V356Z"
          fill="#EDF2F7"
        />
      </svg>
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
            <div className="py__3 flex items-center">
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
