import { NextPage } from "next";
import { BaseTemplate } from "components/templates";
import { TitleDetail } from "components/organisms";

const Title: NextPage = () => {
  return (
    <BaseTemplate>
      <TitleDetail />
      {/* <RelatedPublications /> */}
    </BaseTemplate>
  );
};

export default Title;
