import { Card, CardData, CardInfo, CardNegotiation, CardDocumets } from "@components";
import "@stylesComponents/Avaluos.scss";

export default function Avaluos({ avaluo }) {
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
          <div className="col-md-6 col-lg-5 col-xl-4">
            <Card vehicle={avaluo.vehicle} />
          </div>
          <div className="col-md-6 col-lg-7 col-xl-8 row">
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
            <div className="col-12 col-xl-6">
              <CardData title="Datos del cliente" data={avaluo.client} />
            </div>
            <div className="col-12 col-xl-6">
              <CardData title="Datos del valuador" data={avaluo.valuador} />
            </div>
            <div className="col-12">
              <CardInfo title="Información del avalúo" data={avaluo.avaluo_info} />
            </div>
            <div className="col-12">
              <CardNegotiation title="Información de la negociación" data={avaluo.negotiation} />
            </div>
            <div className="col-12">
              <CardDocumets title="Documentación del vehículo" data={avaluo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
