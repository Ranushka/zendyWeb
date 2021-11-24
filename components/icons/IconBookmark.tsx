import * as React from "react";
import Svg from "./Svg";

const IconBookmark: React.FC<{}> = () => {
  return (
    <Svg>
      <path
        d="M6.25 3C5.00688 3 4 4.02925 4 5.3V17.55C4 19.4417 5.52441 21 7.375 21H19C19.5523 21 20 20.5523 20 20V19.7C20 19.1477 19.5523 18.7 19 18.7H7.375C6.73934 18.7 6.25 18.1998 6.25 17.55C6.25 16.9002 6.73934 16.4 7.375 16.4H20V15.25V14.1V5C20 3.89543 19.1046 3 18 3H16.5V11.5L14.125 9.2L11.75 11.5V5C11.75 3.89543 10.8546 3 9.75 3H6.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

export default IconBookmark;
