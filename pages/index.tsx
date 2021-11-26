import { Space } from 'components/atoms'
import { SeeAll, SubTitle } from 'components//molecules'

import {
  HeroCtaHome,
  MagazineWidget,
  Curated,
  EmailSubscription,
  GetStartedWithUs,
  Testimonials,
  Subjects,
} from 'components/organisms'

import { BaseTemplate } from 'components/templates'

export default function Home() {
  return (
    <BaseTemplate>
      <HeroCtaHome />
      <SubTitle title="Trending Now" linkText="See all news" linkHref="/news" />
      <Curated />
      <SubTitle
        title="Browse by subject"
        linkText="See all"
        linkHref="/subjects"
      />
      <Subjects />
      <SubTitle title="Magazines" linkText="See all" linkHref="/magazines" />
      <MagazineWidget />
      <Testimonials />
      <EmailSubscription />
      <GetStartedWithUs />
    </BaseTemplate>
  )
}
