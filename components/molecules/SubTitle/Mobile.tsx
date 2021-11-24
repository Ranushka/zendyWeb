import React from "react";
import { Space, ActionItem } from "components/atoms";
import { SubTitleProps } from "types";

const SubTitle: React.FC<SubTitleProps> = (props) => {
  const { title, linkHref = "#", linkText = "" } = props;

  return (
    <div className="mw__6 px__3">
      <Space size={5} />
      <div className={"flex__space_between"}>
        <h4 className="mute">{title}</h4>
        {linkText && (
          <strong>
            <ActionItem text={linkText} href={linkHref} />
          </strong>
        )}
      </div>
      <Space size={2} />
    </div>
  );
};

export default SubTitle;
