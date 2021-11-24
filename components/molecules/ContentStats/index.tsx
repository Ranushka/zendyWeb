import classnames from "classnames";
import styles from "./index.module.scss";

type Props = {
  stat?: string;
  title?: string;
};

const ContentStats: React.FC<Props> = ({
  stat = "88.8 m",
  title = "Title",
}) => {
  return (
    // <div className={styles.wrapper}>
    <div
      className={classnames(
        "bg__nut2 mx__3 my__3 py__3 px__5 rounded__1",
        styles.wrapper
      )}
    >
      <h2>{stat}</h2>
      <h3>{title}</h3>
    </div>
  );
};

export default ContentStats;
