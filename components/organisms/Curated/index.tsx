import React from "react";
import classnames from "classnames";
import styles from "./index.module.scss";
import { CardCurated } from "components/molecules";
import { attributes as Data } from "data/widgets/curatedContent.md";

type Props = {};

const Curated: React.FC<Props> = ({}) => {
  return (
    <section className={classnames(styles.wrapper, "text__center px__2")}>
      {Data.curatedContent &&
        Data.curatedContent.map(({ href, image, title, content }, id) => (
          <CardCurated
            style={{ width: `${18}rem` }}
            key={`curatedItem${id}`}
            href={href}
            img={image.replace("/public/", "")}
            title={title}
            content={content}
          />
        ))}
    </section>
  );
};

export default Curated;
