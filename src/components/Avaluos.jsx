import { Card, CardData, CardInfo } from "@components";
import "@stylesComponents/Avaluos.scss";

export default function Avaluos({ avaluo }) {
  console.log("data", avaluo);
  return (
    <div className="avaluos">
      <div className="container-fluid avaluos__hero ">

        <p className="avaluos__title">Detalles de avalúo</p>
        <p className="avaluos__title avaluos__title--sub">
          <span> Avalúos - </span>
          Kristin E. Murphy
        </p>
      </div>
      <div className="avaluos__grid">
        <div className="col row">
          <div className="col-4">
            <Card vehicle={avaluo.vehicle} />
          </div>
          <div className="col-8 row">
            <div className="avaluos__description">
              <div className="container-fluid avaluos__description-hero">
                <p className="avaluos__description-title">
                  Descripción general
                </p>
                <p className="avaluos__description-status">
                  Estatus
                </p>
                <button
                  type="button"
                  className=" btn btn-warning avaluos__btn-status"
                >
                  Cancelado
                </button>
              </div>
            </div>
            <div className="col-6">
              <CardData title="Datos del cliente" data={avaluo.client} />
            </div>
            <div className="col-6">
              <CardData title="Datos del valuador" data={avaluo.valuador} />
            </div>
            <div className="col-12">
              <CardInfo title="Información de la negociación" data={avaluo.avaluo_info} />
            </div>
            {/* <div className="col-12">
              <CardInfo title="Información de la negociación" data={avaluo.valuador} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
