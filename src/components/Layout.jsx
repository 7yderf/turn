import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
// import { withAuth } from "@hoc";

import "@stylesComponents/Layout.scss";

import { Header, Sidebar } from "@components";

function Layout({ auth }) {
  const { pathname } = useLocation();
  const [tabs, setTabs] = useState([]);
  const [tab, setTab] = useState({
    id: -1,
    name: "",
    icon: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main className="layout" data-auth={auth}>
        <Sidebar tabs={tabs} tab={tab} setTab={setTab} />
        <Outlet context={{ setTabs, tab }} />
      </main>
    </>
  );
}

// export default withAuth(Layout, "component");
export default Layout;
