import * as React from "react";

type Props = {
  children?: React.ReactNode;
};

const IconAdd: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

export default IconAdd;
