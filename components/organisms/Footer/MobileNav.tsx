import React from "react";
import classnames from "classnames";
import { useSession } from "next-auth/client";
import styles from "./mobileNav.module.scss";
import { useRouter } from "next/router";
import { MobileNaveItem } from "components/atoms";
import { clickVibrate } from "lib/helpers";

import {
  IconNews,
  IconUser,
  IconSearch,
  IconLibrary,
  IconHome,
} from "components/icons";

type Props = {};

const MobileNav: React.FC<Props> = ({}) => {
  const router = useRouter();
  const [session] = useSession();

  React.useEffect(() => {
    router.prefetch("/search");
  }, []);

  const _clickOnSearch = () => {
    clickVibrate();
    if (router.pathname === "/search") {
      const searchBox = document.getElementById("mainSearch");
      searchBox && searchBox.focus();
    } else {
      router.push("/search");
    }
  };

  const __routeOnClick = (path: string) => {
    clickVibrate();
    router.push(path);
  };

  return (
    <>
      <section className={classnames("bg__white", styles.wrapper)}>
        <MobileNaveItem
          onClick={() => __routeOnClick("/")}
          text="Home"
          icon={<IconHome />}
          isActive={router.pathname === "/"}
        />
        <MobileNaveItem
          onClick={() => __routeOnClick(session ? "/profile" : "/authenticate")}
          text={session ? "Profile" : "Login"}
          icon={<IconUser />}
          isActive={router.pathname === "/profile"}
        />
        <MobileNaveItem
          onClick={_clickOnSearch}
          icon={<IconSearch />}
          primary
          isActive={router.pathname === "/search"}
        />
        <MobileNaveItem
          onClick={() => __routeOnClick("/library/collections")}
          text="Library"
          icon={<IconLibrary />}
          isActive={router.pathname === "/library/collections"}
        />
        <MobileNaveItem
          onClick={() => __routeOnClick("/library/searches")}
          text="News"
          icon={<IconNews />}
          isActive={router.pathname === "/library/searches"}
        />
      </section>
    </>
  );
};

export default MobileNav;
