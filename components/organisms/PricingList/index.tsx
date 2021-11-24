import React, { useContext } from "react";
import dynamic from "next/dynamic";
import DeviceTypeContext from "context/DeviceTypeContext";

type Props = {
  id?: string;
  price?: string;
  paying?: string;
  content?: string;
};

const Mobile = dynamic(() => import("./Mobile"));
const Desktop = dynamic(() => import("./Desktop"));

const Pricing: React.FC<Props> = (props) => {
  const { isMobile } = useContext(DeviceTypeContext);

  return isMobile ? <Mobile {...props} /> : <Desktop {...props} />;
};

export default Pricing;
