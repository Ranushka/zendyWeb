import React from "react";
import { Space } from "components/atoms";

const SecurityStripBlock: React.FC<{}> = ({}) => {
  return (
    <div className="mw__2 my__4 text__center">
      <span className="mute small">
        Your transaction are secured by Stripe, and connection is secured and
        encrypted with SSL
      </span>
      <Space size={2} />
      <img className="mw__1 block" src="/img/trust.png" />
    </div>
  );
};

export default SecurityStripBlock;
