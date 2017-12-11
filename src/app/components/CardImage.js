import React from "react";

export const CardImage = ({ advert }) => {
  function generateAdPurpose(purpose) {
    switch (purpose) {
      case 0:
        return "Mieten";
      case 1:
        return "Kaufen";
      default:
        return "Mieten oder Kaufen ";
    }
  }

  return (
    <div>
      <img
        className="card-img-top"
        src={
          advert.advertisementAssets[0].advertisementThumbnails.inventory_m.url
        }
        alt="House photo"
      />

      <div className="purpose">{generateAdPurpose(advert.purpose)}</div>
    </div>
  );
};
