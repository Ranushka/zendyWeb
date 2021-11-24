import React, { useContext } from "react";
import dynamic from "next/dynamic";
import DeviceTypeContext from "context/DeviceTypeContext";

const Mobile = dynamic(() => import("./Mobile"));
const Desktop = dynamic(() => import("./Desktop"));

const Header: React.FC<{}> = (props) => {
  const { isMobile } = useContext(DeviceTypeContext);

  return isMobile ? <Mobile {...props} /> : <Desktop {...props} />;
};

export default Header;
