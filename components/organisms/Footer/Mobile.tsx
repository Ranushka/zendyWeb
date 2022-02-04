import React from 'react'
import styles from './mobile.module.scss'
import { ActionItem, Space, Logo, ButtonFab } from 'components/atoms'
import MobileNav from './MobileNav'
import { attributes as Data } from 'data/footer.md'

import {
  IconSocialLinkedIn,
  IconSocialInstagram,
  IconSocialTwitter,
  IconSocialFacebook,
} from 'components/icons'

type Props = {}

const Footer: React.FC<Props> = ({}) => {
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
            <small>{Data.about_text}</small>
            <Space />
          </section>

          <section className={styles.explore}>
            <p>Explore</p>
            <Space size={3} />
            {__exploreList()}
            <Space />
            <p>Reach us</p>
            {/* <Space size={3} /> */}
            <div className="py__3 flex__center">
              <ButtonFab icon={<IconSocialFacebook />} small />
              <ButtonFab icon={<IconSocialInstagram />} small />
              <ButtonFab icon={<IconSocialLinkedIn />} small />
              <ButtonFab icon={<IconSocialTwitter />} small />
            </div>
            <Space size={3} />
          </section>

          <section className={styles.fromNews}>
            <p>{Data.news_title}</p>
            <Space size={3} />
            {__newsList()}
          </section>
        </div>
        <Space size={4} />
        <div className={styles.footerBottom}>
          <small>{Data.rights_text}</small>
          <div className={styles.privacy}>{__privacyList()}</div>
          <div className={styles.seals}>
            <img alt="stripe_payment_logo" src="/img/powered_by_stripe.svg" />
          </div>
        </div>
        <Space size={6} />
      </footer>
      <MobileNav />
    </>
  )
}

const __exploreList = () => {
  return (
    Data.explore_list &&
    Data.explore_list.map(({ label, path }, key) => {
      return (
        <React.Fragment key={key}>
          <ActionItem text={label} href={path} type="link__small" />
        </React.Fragment>
      )
    })
  )
}

const __newsList = () => {
  return (
    Data.news_list &&
    Data.news_list.map(({ label, path }, key) => {
      return (
        <React.Fragment key={key}>
          <ActionItem text={label} href={path} type="link__small" />
        </React.Fragment>
      )
    })
  )
}

const __privacyList = () => {
  return (
    Data.privacy_list &&
    Data.privacy_list.map(({ label, path }, key) => {
      return (
        <React.Fragment key={key}>
          <ActionItem text={label} href={path} type="link__small" />
        </React.Fragment>
      )
    })
  )
}

export default Footer
