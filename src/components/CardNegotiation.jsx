import Calculator from "@icons/calculator.svg";
import Receipt1 from "@icons/receipt-2-1.svg";
import Receipt2 from "@icons/receipt-item.svg";
import "@stylesComponents/Avaluos.scss";

export default function CardInfo({ title, data }) {
  const comments = Object.values(data.comments);
  return (
    <div className="avaluos__card avaluos__card--cardData">
      <div className="avaluos__card-bottom">
        <button type="button" className="avaluos__show-data">
          {title}
        </button>
        <div className="avaluos__info-negotiation">
          <div className="avaluos__box-negotiation">
            <img src={Calculator} alt="" className="avaluos__card-icon" />
            <div className="avaluo__negotiation-amount">
              <p className="avaluos__card-key">Oferta del sistema</p>
              <p className="avaluos__card-key">{data.final_offer}</p>
            </div>
          </div>
          <div className="avaluos__box-negotiation">
            <img src={Receipt1} alt="" className="avaluos__card-icon" />
            <div className="avaluo__negotiation-amount">
              <p className="avaluos__card-key">Oferta inicial</p>
              <p className="avaluos__card-key">{data.initial_offer}</p>
            </div>
          </div>
          <div className="avaluos__box-negotiation">
            <img src={Receipt2} alt="" className="avaluos__card-icon" />
            <div className="avaluo__negotiation-amount">
              <p className="avaluos__card-key">Oferta final</p>
              <p className="avaluos__card-key avaluos__card-key--finalOffer">{data.intelli_offer}</p>
            </div>
          </div>
        </div>
        {
          comments.map((comment) => (
            <>
              <div key={comment.comment} className="avaluos__info-user avaluos__info-user--comment">
                <p className="avaluos__card-key">{comment.user}</p>
                <p className="avaluos__card-text avaluos__card-text--date">{comment.date}</p>
              </div>
              <p className="avaluos__card-text">{comment.comment}</p>
            </>
          ))
        }
      </div>
    </div>
  );
}
