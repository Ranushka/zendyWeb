import { Space } from "components/atoms";

import {
  HeroCta,
  Publishers,
  Stats,
  Usps,
  EmailSubscription,
  GetStartedWithUs,
  Testimonials,
  PricingList,
} from "components/organisms";

import { BaseTemplate } from "components/templates";

export default function Learn() {
  return (
    <BaseTemplate>
      <HeroCta />
      <Space size={5} />
      <Publishers />
      <Space size={5} />
      <Usps />
      <Space size={5} />
      <Stats />
      <Space size={5} />
      <PricingList />
      <Testimonials />
      <EmailSubscription />
      <GetStartedWithUs />
    </BaseTemplate>
  );
}
