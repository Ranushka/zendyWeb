import classnames from "classnames";
import styles from "./index.module.scss";

type Props = {
  label?: string;
  name?: string;
  id: string;
  value?: string;
  className?: string;
  onChange?: Function;
};

const CheckBox: React.FC<Props> = ({
  label,
  name,
  id,
  value,
  className,
  onChange = () => {},
}) => {
  return (
    <div
      className={classnames(
        "my__3 mx__2 mt__0 mr__0",
        className && className,
        styles.checkBoxWrapper
      )}
    >
      <input
        className={"input__hide"}
        type="checkbox"
        name={name}
        id={id}
        value={value}
        onChange={() => onChange()}
      />

      <label htmlFor={id}>
        <div />
        {/* {name && <small>{label}</small>} */}
        {name && <span className="labelText">{label}</span>}
      </label>
    </div>
  );
};

export default CheckBox;
