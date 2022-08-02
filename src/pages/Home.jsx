import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Avaluos, Loader } from "@components";
import { infoAvaluo } from "@services";
import { useAppContext } from "@context";
// import { withAuth } from "@hoc";

import "@stylesPages/Home.scss";

import Tab1 from "@icons/calendar.svg";
import Tab2 from "@icons/receipt-item.svg";

function Home() {
  const { dispatch } = useAppContext();
  const { setTabs, tab } = useOutletContext();
  const [dataAvaluo, setDataAvaluo] = useState(null);

  useEffect(() => {
    setTabs([
      {
        id: 0,
        name: "Calendario",
        icon: Tab1
      },
      {
        id: 1,
        name: "Avalúos",
        icon: Tab2
      }
    ]);
  }, [setTabs]);

  useEffect(() => {
    async function fetchAvaluo() {
      try {
        const avaluo = await infoAvaluo();
        if (avaluo !== undefined) {
          dispatch({ type: "INFO_AVALUO", payload: avaluo });
          setDataAvaluo(avaluo);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchAvaluo();

  }, [dispatch]);

  return (
    <div className="home container-fluid">
      {dataAvaluo !== null
        ? (
          <article className="home__content ">
            {tab?.id === 0 ? <div className="home__dos">1</div> : null}
            {tab?.id === 1 ? (
              <div className="home__content ">
                <Avaluos avaluo={dataAvaluo} />
              </div>
            )
              : null}
          </article>
        ) : <Loader />}
    </div>
  );
}

export default Home;
