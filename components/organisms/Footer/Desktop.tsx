/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './desktop.module.scss'
import { ActionItem, Space, Logo, ButtonFab } from 'components/atoms'
import {
  IconSocialLinkedIn,
  IconSocialInstagram,
  IconSocialTwitter,
  IconSocialFacebook,
} from 'components/icons'
import { attributes as Data } from 'data/footer.md'

const Footer: React.FC<{}> = ({}) => {
  return (
    <>
      <Space size={5} />
      <div className={styles.footerBookImg} />
      <footer className={styles.wrapper}>
        <Space size={5} />
        <div className={styles.footerTop}>
          <section className={styles.company}>
            <Logo className="pt__0 pb__0" />
            <div className="mw__1 my__4 small ml__0">{Data.about_text}</div>
          </section>

          <section className={styles.explore}>
            <p>{Data.explore_title}</p>
            <Space size={3} />
            <div className="mw__1 pull__l2">{__exploreList()}</div>
            <Space />
            <p>{Data.reach_title}</p>
            <Space size={3} />

            <div className="mw__1 pull__l2">
              <ButtonFab icon={<IconSocialFacebook />} small />
              <ButtonFab icon={<IconSocialLinkedIn />} small />
              <ButtonFab icon={<IconSocialInstagram />} small />
              <ButtonFab icon={<IconSocialTwitter />} small />
            </div>
          </section>

          <section className={styles.fromNews}>
            <p>{Data.news_title}</p>
            <Space size={3} />
            {__newsList()}
          </section>
        </div>
        <Space size={5} />
        <div className={styles.footerBottom}>
          <small>{Data.rights_text}</small>
          <div className={styles.privacy}>{__privacyList()}</div>
          <div className={styles.seals}>
            <img alt="stripe_payment_logo" src="/img/powered_by_stripe.svg" />
          </div>
        </div>
        <Space size={5} />
      </footer>
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
          <ActionItem
            text={label}
            href={path}
            type="link__small"
            className="mx__3"
          />
        </React.Fragment>
      )
    })
  )
}

export default Footer
