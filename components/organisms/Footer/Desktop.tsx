import React from 'react'
import Image from 'next/image'
import isArray from 'lodash/isArray'
import { useTranslations } from 'next-intl'
import styles from './desktop.module.scss'
import { ActionItem, Space, Logo, ButtonFab } from 'components/atoms'
import { PrivacyList, ExploreList, NewsList } from './Common'
import MobileNav from './MobileNav'
import {
  IconSocialLinkedIn,
  IconSocialInstagram,
  IconSocialTwitter,
  IconSocialFacebook
} from 'components/icons'

const Footer: React.FC<{}> = ({}) => {
  const trans = useTranslations('footer')

  return (
    <>
      <svg
        className="block h-12 md:h-16 lg:h-24 text-gray-100 w-full"
        preserveAspectRatio="none"
        viewBox="0 0 4605 356"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4605 356H2.47205e-08C2.47205e-08 356 -3.09006e-08 342.094 2.47205e-08 250.313C362.259 0.619263 1081.94 0 1081.94 0C2198.5 11.1547 2302.5 356 2302.5 356C2302.5 356 2595.69 -19.4688 3571.95 80.6562C4548.21 180.781 4605 0 4605 0V356Z"
          fill="currentColor"
        />
      </svg>
      <footer className="bg-gray-100">
        <div className="container md:flex justify-between px-5 py-10">
          <section className="max-w-xs pr-4 mb-8 md:mb-3">
            <Logo className="" />
            <div className="small mt-4">{trans('about_text')}</div>
          </section>

          <section className="max-w-xs pr-4">
            <p className="mb-4">{trans('explore_title')}</p>

            <div className="block pb-4">
              <ExploreList />
            </div>

            <p className="mb-4">{trans('reach_title')}</p>

            <div className="flex mb-8 md:mb-3">
              <ButtonFab
                classNames="mr-4"
                icon={<IconSocialFacebook />}
                small
              />
              <ButtonFab
                classNames="mr-4"
                icon={<IconSocialLinkedIn />}
                small
              />
              <ButtonFab
                classNames="mr-4"
                icon={<IconSocialInstagram />}
                small
              />
              <ButtonFab classNames="mr-4" icon={<IconSocialTwitter />} small />
            </div>
          </section>

          <section className="max-w-xs pr-4">
            <p className="mb-4">{trans('news_title')}</p>

            <NewsList />
          </section>
        </div>

        <div className="container px-5 pb-28 md:pb-4 justify-between md:flex text-center">
          <small>{trans('rights_text')}</small>
          <div className="my-4 md:my-0">
            <PrivacyList />
          </div>
          <div>
            <Image
              width={120}
              height={26}
              src="/img/powered_by_stripe.svg"
              alt="zendy stripe payment logo"
              placeholder="empty"
            />
          </div>
        </div>
      </footer>
      <MobileNav />
    </>
  )
}

export default Footer
