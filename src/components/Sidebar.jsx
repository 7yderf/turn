import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMedia, useModal } from "@hooks";
import "@stylesComponents/Sidebar.scss";

import Logo from "@icons/logoSolana.png";

function Sidebar({ tabs, tab, setTab }) {
  const { pathname } = useLocation();
  const mobile = useMedia("(max-width: 635px)");
  const [menu, toggleMenu] = useModal("(max-width: 635px)");

  const handleTab = (tabToSet) => {
    setTab(tabToSet);
    localStorage.setItem("tab-active", JSON.stringify({
      pathname,
      id: tabToSet.id
    }));
    // console.log(JSON.parse(localStorage.getItem("tab-active") as string));
  };

  useEffect(() => {
    if (tabs.length > 0) {
      try {
        const tabSaved = JSON.parse(localStorage.getItem("tab-active") ?? "");
        const tabSearched = tabs.find(({ id }) => (id === tabSaved?.id));
        const tabToActive = (tabSaved?.pathname === pathname && tabSearched) ? tabSearched : tabs[0];

        setTab(tabToActive);
      } catch (error) {
        setTab(tabs[0]);
      }
    }
  }, [tabs, setTab, pathname]);

  return (
    <aside className="sidebar" data-mobile={mobile} data-menu={menu}>
      <div className="sidebar__tabs">
        {mobile ? (
          <button
            data-menu={menu}
            type="button"
            className="sidebar__menu"
            onClick={toggleMenu}
          />
        ) : null}
        <div className="sidebar__logo" data-mobile={mobile}>
          <img src={Logo} alt="" className="sidebar__logo-image" />
        </div>
        {tabs.map((tabItem) => (
          <button
            key={tabItem.name}
            type="button"
            className="sidebar__tab"
            data-active={tabItem.id === tab.id}
            onClick={() => handleTab(tabItem)}
          >
            <img src={tabItem.icon} alt={tabItem.name} className="sidebar__tab-icon" />
            {tabItem.name}
          </button>
        ))}
      </div>
      <div className="sidebar__actions">
      </div>
    </aside>
  );
}

export default Sidebar;
