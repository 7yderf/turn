import Downloan from "@icons/document-download.svg";
import "@stylesComponents/Avaluos.scss";

export default function CardInfo({ title, data }) {
  return (
    <div className="avaluos__card avaluos__card--cardData">
      <div className="avaluos__card-bottom">
        <button type="button" className="avaluos__show-data">
          {title}
        </button>
        <div className="avaluos__info-user avaluos__info-user--comment">
          <p className="avaluos__card-key">{data.valuador}</p>
          <p className="avaluos__card-text avaluos__card-text--date">{data.fecha}</p>
        </div>
        <p className="avaluos__card-text">{data.comentario}</p>
        <p className="avaluos__card-key">Archivos adjuntos</p>
        <div className="avaluos__info-user ">
          <p className="avaluos__card-text avaluos__card-text--negotiation">Diagnostico.pdf</p>
          <img src={Downloan} alt="" className="avaluos__card-icon avaluos__card-icon--Download" />
        </div>
      </div>
    </div>
  );
}
