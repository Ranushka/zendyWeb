import React from "react";
import { ActionItem } from "components/atoms";
import styles from "./index.module.scss";
import classnames from "classnames";

type Props = {
  href: string;
  img: string;
  title: React.ReactNode;
  content: React.ReactNode;
  style?: React.CSSProperties;
};

const CardCurated: React.FC<Props> = (props) => {
  const { href, img, title, content, style } = props;

  return (
    <ActionItem href={href}>
      <div
        className={classnames(
          styles.curated,
          "bg__white rounded__1 stage__2 mute"
        )}
        style={style}
      >
        <div
          className={styles.curated__img}
          style={{ backgroundImage: `url(${img})` }}
        />
        <div className={styles.curated__title}>
          <h3>{title}</h3>
        </div>
        <div className={styles.curated__content}>
          <p>{content}</p>
        </div>
      </div>
    </ActionItem>
  );
};

export default CardCurated;
