import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import { withAuth } from "@hoc";

import "@stylesPages/Home.scss";

import Tab1 from "@icons/account-tab-1.svg";
import Tab2 from "@icons/account-tab-2.svg";
import Tab3 from "@icons/account-tab-3.svg";

function Home() {
  const { t } = useTranslation("home");
  const { setTabs, tab } = useOutletContext();

  useEffect(() => {
    setTabs([
      {
        id: 0,
        name: t("tab-one"),
        icon: Tab1
      },
      {
        id: 1,
        name: t("tab-two"),
        icon: Tab2
      },
      {
        id: 2,
        name: t("tab-three"),
        icon: Tab3
      }
    ]);
  }, [setTabs, t]);

  return (
    <div className="home">
      <h1 className="home__title">
        <span>
          {t("account", { ns: "header" })}
          <span className="home__subtitle">{` ${tab?.name}`}</span>
        </span>
        {tab?.id === 0 ? <div className="home__uno">1</div> : null}
      </h1>
      <article className="home__box">
        {tab?.id === 0 ? <div className="home__dos">2</div> : null}
        {tab?.id === 1 ? <div className="home__tres">3</div> : null}
        {tab?.id === 2 ? <div className="home__cuatro">4</div> : null}
      </article>
    </div>
  );
}

export default Home;
