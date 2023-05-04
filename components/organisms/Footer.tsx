import React from 'react'
import Image from "next/image"
import { useTranslations } from 'next-intl'
import { Logo, ButtonFab } from 'components/atoms'
import FooterPrivacyList from './FooterPrivacyList'
import FooterExploreList from './FooterExploreList'
import FooterNewsList from './FooterNewsList'
import MobileNav from './FooterMobileNav'
import {
  IconSocialLinkedIn,
  IconSocialInstagram,
  IconSocialTwitter,
  IconSocialFacebook
} from 'components/icons'

const FooterSectionTitle: React.FC<any> = ({ title }) => {
  return <p className="text_nut5 mb-4 font-serif text-base">{title}</p>
}

const Footer: React.FC<{}> = () => {
  const trans = useTranslations('footer')

  return <>
    <svg
      className="text_white block h-12 w-full md:h-16 lg:h-24"
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
      <div className="container justify-between px-5 py-10 md:flex">
        <section className="mb-8 max-w-xs pr-4 md:mb-3">
          <Logo className="flex" />
          <div className="small mt-4 mb-4">{trans('about_text')}</div>

          <FooterSectionTitle title={trans('reach_title')} />

          <div className="mb-8 flex md:mb-3">
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
          <FooterSectionTitle title={trans('explore_title')} />

          <div className="block columns-2 pb-4">
            <FooterExploreList />
          </div>
        </section>

        <section className="max-w-xs pr-4">
          <FooterSectionTitle title={trans('news_title')} />
          <FooterNewsList />
        </section>
      </div>

      <div className="container justify-between px-5 pb-28 md:flex md:pb-10">
        <div className="my-4 block items-center md:my-0 md:flex">
          <small className="text_nut5 mr-4 block pb-4 text-xs md:pb-0">
            {trans('rights_text')}
          </small>
          <FooterPrivacyList />
        </div>
        <div>
          <div className="relative h-6 w-28">
            <Image
              alt="zendy stripe payment logo"
              src="/img/powered_by_stripe.svg"
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover"
              }} />
          </div>
        </div>
      </div>
    </footer>
    <MobileNav />
  </>;
}

export default Footer
