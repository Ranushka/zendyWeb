import React from "react";
import * as NextLink from "next/link";
import classnames from "classnames";
import styles from "./index.module.scss";
import { useRouter } from "next/router";

type Props = {
  href: string | Object;
  children: React.ReactNode;
};

const Tab: React.FC<Props> = ({ children, href }) => {
  const router = useRouter();
  const finalClassNames = classnames(
    styles.wrapper,
    router.pathname === href && styles.active
  );

  return (
    <NextLink.default href={href}>
      <a className={finalClassNames}>{children}</a>
    </NextLink.default>
  );
};

export default Tab;
