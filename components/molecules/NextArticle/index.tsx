import React from "react";
import classnames from "classnames";
import styles from "./index.module.scss";
import { Space, ActionItem } from "components/atoms";

import { IconArrowLeft, IconArrowRight } from "components/icons";

type Props = {
  url: string;
  title: React.ReactNode;
  prev?: boolean;
};

const NextArticle: React.FC<Props> = (props) => {
  const { url = "/search", title, prev } = props;

  return (
    <ActionItem href={url}>
      <div
        className={classnames(
          "rounded__1 stage__2 bg__white",
          styles.wrapper,
          prev && styles.prev
        )}
      >
        <div className={styles.arrow}>
          {prev ? <IconArrowLeft /> : <IconArrowRight />}
        </div>

        <small className={styles.title}>{title}</small>
        <Space size={2} />
      </div>
    </ActionItem>
  );
};

export default NextArticle;
