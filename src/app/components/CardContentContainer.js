import React from "react";

export const CardContentContainer = ({ advert }) => {
  return (
    <div>
      <div className="card-block">
        <div className="card-row">
          <h5 className="card-title">{advert.title}</h5>
          <div className="address">
            <span>{advert.realestateSummary.address.postalCode}</span>
            <span>/</span>
            <span>{advert.realestateSummary.address.street}</span>
          </div>
        </div>
        <div className="card-row">
          <div className="card-text price-description">
            <span>
              <span className="price-tag">
                {advert.advertisementPrice.baseRent} €
              </span>{" "}
              &nbsp;
            </span>
            <span>
              <span>{advert.realestateSummary.numberOfRooms} Zimmer</span>{" "}
              &nbsp; &nbsp;
              <span className="space"> &nbsp; &nbsp; ab </span>{" "}
              <span>
                {advert.realestateSummary.space.toFixed(2)} m<sup>2</sup>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
