import React from "react";
import { ActionItem, Space } from "components/atoms";
import { SidePopup, StripeElementsForm } from "components/molecules";

type Props = {
  id?: string;
  price?: string;
  paying?: string;
  content?: string;
};

const Pricing: React.FC<Props> = (props) => {
  const { id, price = "48", paying = "48", content = "" } = props;
  const [modelOpen, setModelOpenState] = React.useState(false);

  return (
    <>
      <div className="text__center block rounded__1 bg__white stage__4 px__4 py__4 mw__1">
        <Space size={2} />
        <div
          className="text__center"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <Space />
        <ActionItem
          block
          text={"Subscribe"}
          type={"btn__primary"}
          onClick={() => setModelOpenState(true)}
        />
        <Space size={3} />
      </div>
      <SidePopup
        content={SidePopupContent(paying)}
        open={modelOpen}
        openLocation={"bottom"}
        closeFunc={() => setModelOpenState(false)}
      />
    </>
  );
};

const SidePopupContent = (paying) => (
  <div className="block">
    <h2 className="py__3">Secure payment</h2>
    <Space />
    <StripeElementsForm paying={paying} />
  </div>
);

export default Pricing;
