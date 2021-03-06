import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Logo, ButtonFab } from 'components/atoms'
import { PrivacyList, ExploreList, NewsList } from './FooterCommon'
import MobileNav from './FooterMobileNav'
import {
  IconSocialLinkedIn,
  IconSocialInstagram,
  IconSocialTwitter,
  IconSocialFacebook
} from 'components/icons'

const FooterSectionTitle: React.FC<any> = ({ title }) => {
  return <p className="mb-4 text-base font-serif text_nut5">{title}</p>
}

const Footer: React.FC<{}> = () => {
  const trans = useTranslations('footer')

  return (
    <>
      <svg
        className="block h-12 md:h-16 lg:h-24 text_white w-full"
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
      <footer className="bg_white">
        <div className="container md:flex justify-between px-5 py-10">
          <section className="max-w-xs pr-4 mb-8 md:mb-3">
            <Logo className="flex" />
            <div className="small mt-4">{trans('about_text')}</div>
          </section>

          <section className="max-w-xs pr-4">
            <FooterSectionTitle title={trans('explore_title')} />

            <div className="block pb-4">
              <ExploreList />
            </div>

            <FooterSectionTitle title={trans('reach_title')} />

            <div className="flex mb-8 md:mb-3">
              <ButtonFab
                dataName="FooterSocialFacebook"
                classNames="mr-6 scale-125"
                icon={<IconSocialFacebook />}
                small
              />
              <ButtonFab
                dataName="FooterSocialLinkedIn"
                classNames="mr-6 scale-125"
                icon={<IconSocialLinkedIn />}
                small
              />
              <ButtonFab
                dataName="FooterSocialInstagram"
                classNames="mr-6 scale-125"
                icon={<IconSocialInstagram />}
                small
              />
              <ButtonFab
                dataName="FooterSocialTwitter"
                classNames="mr-6 scale-125"
                icon={<IconSocialTwitter />}
                small
              />
            </div>
          </section>

          <section className="max-w-xs pr-4">
            <FooterSectionTitle title={trans('news_title')} />
            <NewsList />
          </section>
        </div>

        <div className="container px-5 pb-28 md:pb-10 justify-between md:flex">
          <div className="my-4 md:my-0 block md:flex items-center">
            <small className="mr-4 text-xs block pb-4 md:pb-0 text_nut5">
              {trans('rights_text')}
            </small>
            <PrivacyList />
          </div>
          <div>
            <div className="relative w-28 h-6">
              <Image
                alt="zendy stripe payment logo"
                src="/img/powered_by_stripe.svg"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
          </div>
        </div>
      </footer>
      <MobileNav />
    </>
  )
}

export default Footer
