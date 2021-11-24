import React from "react";
import classnames from "classnames";
import styles from "./index.module.scss";

type Props = {};

const data = ["ebsco", "sage", "openAccess", "ieee", "wiley"];

const Publishers: React.FC<Props> = ({}) => {
  return (
    <div>
      <h3 className="pt__0 py__4 px__3 color__nut6 text__center">
        You will get access to the premium and open content from
      </h3>
      <section
        className={classnames(
          "mw__6 text__center overflowScroll",
          styles.wrapper
        )}
      >
        {data.map((item, id) => (
          <img
            key={`publisher${id}`}
            src={`/publishers/${item}.png`}
            alt={item}
          />
        ))}
      </section>
    </div>
  );
};

export default Publishers;
