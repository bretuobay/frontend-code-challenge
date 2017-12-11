import React from "react";
import { AdvertisementCard } from "./AdvertisementCard";

export const AdvertisementsList = ({ advertsList }) => {
  return (
    <div className="row">
      {advertsList.map(function(advert, index) {
        return (
          <div className="col-4" key={index}>
            <AdvertisementCard advert={advert} />
          </div>
        );
      })}
    </div>
  );
};
