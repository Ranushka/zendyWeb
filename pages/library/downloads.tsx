import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import { Space, ButtonFab } from "components/atoms";
import { ProfileTabs } from "components/molecules";
import { IconMore } from "components/icons";
import { BaseTemplate } from "components/templates";

type DataRowProps = {
  id: number;
  name: string;
};

const Downloads = () => {
  const [session, loading] = useSession();
  const router = useRouter();

  if (!loading && !session) {
    router.push("/authenticate");
  }

  return (
    <BaseTemplate>
      <div className="px__3 mw__5 min__h">
        <ProfileTabs />
        {dataSet.map((data: DataRowProps) => __dataRow(data))}
      </div>
    </BaseTemplate>
  );
};

const __dataRow = ({ id, name }: DataRowProps) => (
  <div key={id}>
    <div className="px__3 py__3 flex flex__space_between bg__white stage__2 rounded__1">
      <span className="first_letter_caps">{name}</span>
      <div className="flex__left"></div>

      <Space size={3} />
      <span>
        <ButtonFab classNames="bg__white" icon={<IconMore />} />
      </span>
    </div>
    <Space size={2} />
  </div>
);

const dataSet = [
  {
    id: 23,
    name:
      "optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut",
  },
  {
    id: 24,
    name: "dolore veritatis porro provident adipisci blanditiis et sunt",
  },
  {
    id: 25,
    name: "quaerat velit veniam amet cupiditate aut numquam ut sequi",
  },
];

export default Downloads;
