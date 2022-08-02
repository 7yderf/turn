import ImgCart from "@images/vehicle.jpg";
import "@stylesComponents/Avaluos.scss";

export default function Card({ vehicle }) {
  return (
    <div className="avaluos__card">
      <div className="avaluos__card-top">
        <img src={ImgCart} alt="" className="avaluos__image-card" />
        <h2 className="avaluos__title-image">
          {`${vehicle.brand} ${vehicle.model}`}
        </h2>
        <p className="avaluos__mileage">{vehicle.Mileage}</p>
      </div>
      <div className="avaluos__card-bottom">
        <button type="button" className="avaluos__show-data">
          Detalle del vehículo
        </button>
        <h4 className="avaluos__card-key">Año</h4>
        <p className="avaluos__card-text">{vehicle.year}</p>
        <h4 className="avaluos__card-key">Marca</h4>
        <p className="avaluos__card-text">{vehicle.brand}</p>
        <h4 className="avaluos__card-key">Modelo</h4>
        <p className="avaluos__card-text">{vehicle.model}</p>
        <h4 className="avaluos__card-key">Versión</h4>
        <p className="avaluos__card-text">{vehicle.version}</p>
        <h4 className="avaluos__card-key">Dueños</h4>
        <p className="avaluos__card-text">{vehicle.Owners}</p>
      </div>
    </div>
  );
}
