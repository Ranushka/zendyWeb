import React from "react";
import classnames from "classnames";

type Props = {
  label?: string;
  name?: string;
  id: string;
  data?: string[];
  block?: boolean;
  className?: string;
};

const Select: React.FC<Props> = (props) => {
  const { label, name, id, data, block, className } = props;

  return (
    <div
      className={classnames(
        "input__wrapper",
        block && "block",
        className && className
      )}
    >
      {label && <label htmlFor={id}>{label}</label>}

      <select id={id} name={name}>
        {data.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
