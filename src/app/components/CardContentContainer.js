import React from "react";

export const CardContentContainer = ({ advert }) => {
  return (
    <div
      style={{
        height: "50%",
        width: "100%"
      }}
    >
      <div className="card-block">
        <h5 className="card-title">{advert.title}</h5>

        <div className="address">
          <span>{advert.realestateSummary.address.postalCode}</span>
          <span>/</span>
          <span>{advert.realestateSummary.address.street}</span>
        </div>

        <div className="card-text price-description">
          <span>
            <span>{advert.advertisementPrice.baseRent} €</span> &nbsp;
          </span>

          <span>
            <span>{advert.realestateSummary.numberOfRooms} Zimmer</span>{" "}
            <span> | ab </span>{" "}
            <span>
              {advert.realestateSummary.space.toFixed(2)} m<sup>2</sup>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
