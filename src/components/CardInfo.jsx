import Profile from "@icons/profile.svg";
import Email from "@icons/attach-circle.svg";
import Call from "@icons/call.svg";
import "@stylesComponents/Avaluos.scss";

export default function CardInfo({ title, data }) {
  return (
    <div className="avaluos__card avaluos__card--cardData">
      <div className="avaluos__card-bottom">
        <button type="button" className="avaluos__show-data">
          {title}
        </button>
        <div className="avaluos__info-user">
          <p className="avaluos__card-key">{data.valuador}</p>
          <p className="avaluos__card-date">{data.fecha}</p>
        </div>
        <p className="avaluos__card-text">{data.comentario}</p>
        <p className="avaluos__card-key">Archivos adjuntos</p>
        <div className="avaluos__info-user">
          <p className="avaluos__card-text">Diagnostico.pdf</p>
          <img src={Call} alt="" className="avaluos__card-icon" />
        </div>
      </div>
    </div>
  );
}
