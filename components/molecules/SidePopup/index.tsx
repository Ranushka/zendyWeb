import React, { useEffect } from "react";
import styles from "./index.module.scss";
import classnames from "classnames";
import { lockBody } from "lib/helpers";
import { IconClose, IconClear } from "components/icons";
import { ButtonFab } from "components/atoms";

type Props = {
  content: React.ReactNode;
  open?: boolean;
  fullHeight?: boolean;
  closeFunc?: Function;
  openLocation?: "left" | "right" | "center" | "bottom" | "none";
};

const SidePopup: React.FC<Props> = (props) => {
  const {
    content,
    open,
    fullHeight = false,
    closeFunc,
    openLocation = "left",
  } = props;

  const closeBtnStyle = classnames(
    styles.refineSearchBtnClose,
    styles[openLocation]
  );
  const contentStyle = classnames(
    "px__3",
    styles.wrapper,
    fullHeight && styles.fullHeight,
    styles[openLocation]
  );

  useEffect(() => {
    if (open) {
      lockBody(true);
    } else {
      lockBody(false);
    }
  }, [open]);

  return (
    open && (
      <>
        <div className={styles.backDrop}>
          <section className={contentStyle}>
            <div className={closeBtnStyle}>
              <ButtonFab
                classNames={"bg__nut3 stage__0 color__primary"}
                onClick={() => closeFunc(false)}
                icon={<IconClear />}
              />
            </div>
            {content}
          </section>
        </div>
      </>
    )
  );
};

export default SidePopup;
