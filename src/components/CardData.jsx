import Profile from "@icons/profile.svg";
import Email from "@icons/attach-circle.svg";
import Call from "@icons/call.svg";
import "@stylesComponents/Avaluos.scss";

export default function CardData({ title, data }) {
  return (
    <div className="avaluos__card avaluos__card--cardData">
      <div className="avaluos__card-bottom">
        <button type="button" className="avaluos__show-data">
          {title}
        </button>
        <div className="avaluos__info-user avaluos__info-user avaluos__info-user--movil">
          <img src={Profile} alt="" className="avaluos__card-icon" />
          <p className="avaluos__card-key">{data.name}</p>
        </div>
        <div className="avaluos__info-user avaluos__info-user avaluos__info-user--movil">
          <img src={Email} alt="" className="avaluos__card-icon" />
          <p className="avaluos__card-key">{data.email}</p>
        </div>
        <div className="avaluos__info-user avaluos__info-user avaluos__info-user--movil">
          <img src={Call} alt="" className="avaluos__card-icon" />
          <p className="avaluos__card-key">{data.phone}</p>
        </div>
      </div>
    </div>
  );
}
