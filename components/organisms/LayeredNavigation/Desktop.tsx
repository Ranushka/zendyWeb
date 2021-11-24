import React, { useContext } from "react";
import classnames from "classnames";
import styles from "./desktop.module.scss";

import { Space, CheckBox, ButtonFab } from "components/atoms";
import { ReadMore } from "components/molecules";

type Props = {};

const LayeredNavigationTitle = () => {
  return (
    <div className="flex flex__align_center">
      <h3 className="mute">Narrow by</h3>
      <div className="flex__left" />
      <small className="mute"> 30K Results</small>
    </div>
  );
};

const FilterItems = (items) => {
  return items.map((item, id) => (
    <CheckBox key={id} id={item.id} name={item.name} label={item.name} />
  ));
};

const FilterGroups = (items) => {
  return items.map((item, id) => {
    const accordionContent = (
      <div>
        <Space size={2} />
        {FilterItems(item.items)}
      </div>
    );

    return (
      <div key={id}>
        <h5 className="color__nut6">{item.title}</h5>
        <ReadMore height={208} id={id} content={accordionContent} />
        <Space size={3} />
      </div>
    );
  });
};

const LayeredNavigation: React.FC<Props> = ({}) => {
  return (
    <>
      <section className={classnames("px__4 pr__0", styles.wrapper)}>
        {LayeredNavigationTitle()}
        <Space size={3} />
        {FilterGroups(data)}
      </section>
    </>
  );
};

export default LayeredNavigation;

const data = [
  {
    title: "Filter Title",
    items: [
      { id: "fill0", name: "some name", amount: "10k" },
      { id: "fill1", name: "other name", amount: "10k" },
      { id: "fill2", name: "totally deferent", amount: "10k" },
      { id: "fill3", name: "same name name", amount: "10k" },
      { id: "fill4", name: "deferent name", amount: "10k" },
    ],
  },
  {
    title: "Filter Title",
    items: [
      { id: "fill5", name: "some name", amount: "10k" },
      { id: "fill6", name: "other name", amount: "10k" },
      { id: "fill62", name: "other name", amount: "10k" },
      { id: "fill7", name: "totally deferent", amount: "10k" },
      { id: "fill7", name: "totally deferent", amount: "10k" },
      { id: "fill82", name: "same name name", amount: "10k" },
      { id: "fill83", name: "same name name", amount: "10k" },
      { id: "fill9", name: "deferent name", amount: "10k" },
      { id: "fill91", name: "deferent name", amount: "10k" },
      { id: "fill92", name: "deferent name", amount: "10k" },
      { id: "fill93", name: "deferent name", amount: "10k" },
    ],
  },
  {
    title: "Filter Title",
    items: [
      { id: "fill10", name: "some name", amount: "10k" },
      { id: "fill11", name: "other name", amount: "10k" },
      { id: "fill12", name: "totally deferent", amount: "10k" },
      { id: "fill13", name: "same name name", amount: "10k" },
      { id: "fill14", name: "deferent name", amount: "10k" },
    ],
  },
  {
    title: "Filter Title",
    items: [
      { id: "fill15", name: "some name", amount: "10k" },
      { id: "fill16", name: "other name", amount: "10k" },
      { id: "fill17", name: "totally deferent", amount: "10k" },
      { id: "fill18", name: "same name name", amount: "10k" },
      { id: "fill19", name: "deferent name", amount: "10k" },
    ],
  },
];
