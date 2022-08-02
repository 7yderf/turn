/* eslint-disable react/no-array-index-key */
/* eslint-disable no-return-assign */
import { useState, useEffect } from "react";
import { useMockDocuments } from "@hooks";
import "@stylesComponents/Avaluos.scss";

export default function CardDocumets({ title, data }) {
  const [listDocuments, setListDocuments] = useState(null);
  const succesMockDocuments = {
    14: {
      type: "Vehículo",
      document: "Diagnóstico mecánico",
      required: "Si",
      uploaded_at: "2022-07-29 16:59:28"
    },
    15: {
      type: "Vehículo",
      document: "Validación de factura origen",
      required: "Si",
      uploaded_at: "2022-07-29 16:59:28"
    }
  };
  const clientDocuments = data ? Object.values(data.documents) : Object.values(succesMockDocuments);
  const { documents } = useMockDocuments();
  const duplicado = [];
  const categoryTypes = documents.filter((item) => (duplicado[item.type] ? false : duplicado[item.type] = true));

  useEffect(() => {
    const arrayContent = [];
    const documentsList = categoryTypes.map((type, i) => (
      arrayContent
        .concat({ typeTitle: categoryTypes[i].type })
        .concat(documents.filter((doc) => (doc.type === categoryTypes[i].type)))
    ));
    setListDocuments(documentsList.flat(1));
  }, []);

  return (
    <div className="avaluos__card avaluos__card--cardData">
      <div className="avaluos__card-bottom">
        <button type="button" className="avaluos__show-data">
          {title}
        </button>
        <div className="avaluos__info-negotiation avaluos__info-negotiation--documents">
          {
            listDocuments !== null ? (
              listDocuments.map((document) => (
                <>
                  {document.typeTitle ? <p className="avaluos__documents-types">{document.typeTitle}</p> : null}
                  {document.type ? (
                    <div key={document.document} className=" avaluos__checks-documents form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked={clientDocuments.some((check) => (check.document === document.document))}
                        readOnly
                      />
                      <label
                        className="form-check-label avaluos__card-text"
                        htmlFor="flexCheckChecked"
                        data-required={document.required}
                      >
                        {document.document}
                      </label>
                    </div>
                  ) : null}
                </>
              ))) : null
          }
        </div>
      </div>
    </div>
  );
}
